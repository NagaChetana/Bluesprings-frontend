from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import hashlib
import json
import os
import uvicorn

# Fixed salt value used throughout the application
SALT = "1234567890"

app = FastAPI(title="Password Manager API")

# Pydantic models for request/response
class UserCredentials(BaseModel):
    username: str
    password: str

class SignupResponse(BaseModel):
    success: bool
    message: str

class LoginResponse(BaseModel):
    success: bool
    token: str = None
    message: str = None




@app.post("/signup", response_model=SignupResponse)
def signup(credentials: UserCredentials):
    """
    Signs up a new user with the provided password.
    Args:
        credentials: UserCredentials object containing username and password
    Returns:
        SignupResponse with success status and message
    """
    un = credentials.username
    pw = credentials.password
    
    # Check if user already exists
    db_file = "users.json"
    if os.path.exists(db_file):
        with open(db_file, 'r') as f:
            users = json.load(f)
        if un in users:
            raise HTTPException(status_code=400, detail="User already exists")
    else:
        users = {}
    
    # Combine password with salt
    salted_password = pw + SALT
    # Hash with SHA-256
    hash_object = hashlib.sha256(salted_password.encode())
    password_hash = hash_object.hexdigest()
    
    # Add new user
    users[un] = {
        "salt": SALT,
        "hash": password_hash
    }
    
    # Save updated database
    with open(db_file, 'w') as f:
        json.dump(users, f, indent=2)
    
    return SignupResponse(success=True, message="User registered successfully")




@app.post("/login", response_model=LoginResponse)
def login(credentials: UserCredentials):
    """
    Logs in a user with the provided password.
    Args:
        credentials: UserCredentials object containing username and password
    Returns:
        LoginResponse with success status, token, and message
    """
    un = credentials.username
    pw = credentials.password
    db_file = "users.json"
    
    # Load existing users
    if not os.path.exists(db_file):
        raise HTTPException(status_code=404, detail="No users found")
    
    with open(db_file, 'r') as f:
        users = json.load(f)
    
    # Check if user exists
    if un not in users:
        raise HTTPException(status_code=404, detail="User does not exist")
    
    # Retrieve stored salt and hash
    stored_salt = users[un]["salt"]
    stored_hash = users[un]["hash"]
    
    # Combine provided password with stored salt
    salted_password = pw + stored_salt
    # Hash with SHA-256
    hash_object = hashlib.sha256(salted_password.encode())
    password_hash = hash_object.hexdigest()
    
    # Compare hashes
    if password_hash == stored_hash:
        # Generate a simple token (for demonstration purposes)
        token = f"token_{un}_authenticated"
        return LoginResponse(success=True, token=token, message="Login successful")
    else:
        raise HTTPException(status_code=401, detail="Incorrect password")



@app.get("/")
def root():
    """Root endpoint with API information"""
    return {
        "message": "Password Manager API",
        "endpoints": {
            "signup": "/signup (POST)",
            "login": "/login (POST)"
        }
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)