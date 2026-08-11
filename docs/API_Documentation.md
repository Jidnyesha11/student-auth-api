# Student Authentication API Documentation

## 1. Project Overview

Student Authentication API is a backend REST API built using Node.js,
Express.js, MongoDB, and Mongoose.

The API provides:

- User registration
- Secure password hashing
- User login
- JWT authentication
- Protected routes
- Role-based authorization

---

## 2. Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token
- dotenv
- Postman

---

## 3. Base URL

### Local

http://localhost:3000

---

## 4. Authentication

The API uses JWT-based authentication.

After successful login, the API returns a JWT.

Protected requests must include:

Authorization: Bearer <JWT_TOKEN>

---

# 5. API Endpoints

## 5.1 Register User

### Request

POST /api/auth/register

### URL

http://localhost:3000/api/auth/register

### Request Body

```json
{
    "name": "Test Student",
    "email": "teststudent@example.com",
    "password": "Password123"
}
Success Response

Status: 201 Created

{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "id": "USER_ID",
        "name": "Test Student",
        "email": "teststudent@example.com",
        "role": "user"
    }
}
Possible Errors

400 Bad Request

{
    "success": false,
    "message": "Name, email and password are required"
}

409 Conflict

{
    "success": false,
    "message": "User with this email already exists"
}
5.2 Login User
Request

POST /api/auth/login

URL

http://localhost:3000/api/auth/login

Request Body
{
    "email": "teststudent@example.com",
    "password": "Password123"
}
Success Response

Status: 200 OK

{
    "success": true,
    "message": "Login successful",
    "token": "JWT_TOKEN"
}
Invalid Credentials

Status: 401 Unauthorized

{
    "success": false,
    "message": "Invalid email or password"
}
5.3 Get User Profile

This is a protected endpoint.

Request

GET /api/users/profile

URL

http://localhost:3000/api/users/profile

Authorization

Bearer Token

Authorization: Bearer JWT_TOKEN
Success Response

Status: 200 OK

{
    "success": true,
    "message": "Protected profile accessed successfully",
    "user": {
        "userId": "USER_ID",
        "role": "user"
    }
}
Without Authentication

Status: 401 Unauthorized

{
    "success": false,
    "message": "Authentication required"
}
5.4 Admin Resource

This endpoint requires the admin role.

Request

GET /api/users/admin

URL

http://localhost:3000/api/users/admin

Authorization

Bearer Token

Authorization: Bearer ADMIN_JWT_TOKEN
Admin Success Response

Status: 200 OK

{
    "success": true,
    "message": "Admin resource accessed successfully",
    "user": {
        "userId": "USER_ID",
        "role": "admin"
    }
}
Normal User

Status: 403 Forbidden

{
    "success": false,
    "message": "Access denied"
}

6. HTTP Status Codes
Status	Meaning
200	Request successful
201	Resource created
400	Bad request
401	Authentication required or invalid
403	Authenticated but not authorized
409	Resource already exists
500	Server error
7. User Model

The Users collection contains:

Name
Email
Password
Role

Passwords are stored as bcrypt hashes instead of plain text.

Possible roles:

user
admin
8. Authentication Flow
Register
    ↓
Password hashed using bcrypt
    ↓
User stored in MongoDB
    ↓
Login
    ↓
Password verified using bcrypt
    ↓
JWT generated
    ↓
JWT returned to client
    ↓
Client sends JWT with protected requests
    ↓
JWT middleware verifies token
    ↓
Protected resource accessed
9. Authorization Flow
Authenticated User
        ↓
JWT verified
        ↓
Check user role
        ↓
    ┌───┴───┐
    ↓       ↓
  user    admin
    ↓       ↓
 Limited   Admin
 access    access
10. Security

The project uses:

bcrypt password hashing
JWT authentication
Environment variables for secrets
Protected API routes
Role-based authorization

Sensitive values such as MongoDB credentials and JWT secrets must not be committed to GitHub.

11. Postman Collection

The project includes a Postman collection containing:

Register User
Login User
Get Profile
Admin Resource

Postman collection file:

postman/Student-Auth-API.postman_collection.json