# Password Manager API

A secure FastAPI-based password management system with user registration and authentication.

## Features

- **User Registration (Signup)**: Create new user accounts with secure password hashing
- **User Authentication (Login)**: Authenticate users and generate authentication tokens
- **Password Security**: SHA-256 hashing with salt for secure password storage
- **RESTful API**: Clean API endpoints with proper HTTP status codes
- **Interactive Documentation**: Automatic API documentation via FastAPI

## Technology Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **Pydantic**: Data validation using Python type annotations
- **Uvicorn**: ASGI server for running the application
- **hashlib**: SHA-256 cryptographic hashing
- **JSON**: File-based user database storage

## Installation

1. Install required dependencies:
```bash
pip install fastapi uvicorn
```

2. Run the application:
```bash
python PassManager.py
```

The server will start at `http://localhost:8000`

## API Endpoints

### Root Endpoint
**GET** `/`
- Returns API information and available endpoints

### Signup
**POST** `/signup`
- Register a new user account
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully"
  }
  ```
- **Error Codes**:
  - `400`: User already exists

### Login
**POST** `/login`
- Authenticate an existing user
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "token_username_authenticated",
    "message": "Login successful"
  }
  ```
- **Error Codes**:
  - `404`: User does not exist or no users found
  - `401`: Incorrect password

## Security Implementation

### Password Hashing Process

1. **Salt Addition**: A fixed salt value (`"1234567890"`) is appended to the user's password
2. **SHA-256 Hashing**: The salted password is hashed using SHA-256 algorithm
3. **Secure Storage**: Only the hash (not the plain password) is stored in `users.json`

### Authentication Flow

1. User submits credentials via `/login` endpoint
2. System retrieves stored hash and salt for the username
3. Submitted password is salted and hashed using the same algorithm
4. Hash comparison determines authentication success
5. If successful, a token is generated and returned

## Data Storage

User data is stored in `users.json` with the following structure:
```json
{
  "username": {
    "salt": "1234567890",
    "hash": "hashed_password_string"
  }
}
```

## Interactive Documentation

FastAPI automatically generates interactive API documentation:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## Usage Example

### Using cURL

**Signup:**
```bash
curl -X POST "http://localhost:8000/signup" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "secure_password123"}'
```

**Login:**
```bash
curl -X POST "http://localhost:8000/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "secure_password123"}'
```

### Using Python requests

```python
import requests

# Signup
response = requests.post(
    "http://localhost:8000/signup",
    json={"username": "john_doe", "password": "secure_password123"}
)
print(response.json())

# Login
response = requests.post(
    "http://localhost:8000/login",
    json={"username": "john_doe", "password": "secure_password123"}
)
print(response.json())
```

## Code Structure

- **Pydantic Models**: Define request/response schemas for type validation
  - `UserCredentials`: Username and password input
  - `SignupResponse`: Registration response
  - `LoginResponse`: Authentication response with token

- **API Endpoints**: RESTful routes using FastAPI decorators
  - Automatic request validation
  - Type-safe responses
  - Built-in error handling

- **Security Functions**: Password hashing and verification logic
  - Consistent salt application
  - SHA-256 cryptographic hashing
  - Secure comparison operations

## Notes

- This is a demonstration implementation with a fixed salt value
- For production use, consider:
  - Using unique salts per user
  - Implementing JWT tokens instead of simple string tokens
  - Using a proper database instead of JSON file storage
  - Adding password strength validation
  - Implementing rate limiting
  - Using HTTPS for secure communication
  - Adding password reset functionality
  - Implementing session management
