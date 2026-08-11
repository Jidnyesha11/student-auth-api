# 🔐 Student Authentication API

A RESTful Student Authentication API built using Node.js, Express.js, MongoDB, Mongoose, bcryptjs, and JSON Web Token (JWT).

This project demonstrates secure user registration, password hashing, login authentication, JWT-based authentication, protected routes, and role-based authorization.

---

## 🚀 Features

- User registration
- Secure password hashing using bcryptjs
- User login
- JWT-based authentication
- Protected API routes
- User and Admin roles
- Role-based authorization
- MongoDB Atlas integration
- RESTful API architecture
- Postman API testing
- API documentation
- Render deployment support

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB Atlas | Database |
| Mongoose | MongoDB object modeling |
| bcryptjs | Password hashing |
| JSON Web Token | Authentication |
| dotenv | Environment variables |
| Postman | API testing |
| Render | API deployment |

---

## 📁 Project Structure

```text
student-auth-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── postman/
│   └── Student-Auth-API.postman_collection.json
│
├── docs/
│   └── API_Documentation.md
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── server.js
````

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Jidnyesha11/student-auth-api.git
```

### 2. Navigate to the project

```bash
cd student-auth-api
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Important

Never commit the `.env` file to GitHub.

Make sure `.gitignore` contains:

```gitignore
node_modules/
.env
```

---

## ▶️ Run the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The local API will run at:

```text
http://localhost:3000
```

---

## 🌐 Live API

After deployment, the live Render URL will be added here:

```text
https://YOUR-RENDER-URL.onrender.com
```

---

# 📌 API Endpoints

| Method | Endpoint             | Authentication   | Description                       |
| ------ | -------------------- | ---------------- | --------------------------------- |
| POST   | `/api/auth/register` | Not required     | Register a new user               |
| POST   | `/api/auth/login`    | Not required     | Login and receive JWT             |
| GET    | `/api/users/profile` | JWT required     | Access authenticated user profile |
| GET    | `/api/users/admin`   | JWT + Admin role | Access admin-only resource        |

---

# 👤 User Registration

## Request

```http
POST /api/auth/register
```

### URL

```text
http://localhost:3000/api/auth/register
```

### Body

```json
{
    "name": "Jidnyesha Sankhe",
    "email": "jidnyeshas26@gmail.com",
    "password": "Password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "id": "USER_ID",
        "name": "Jidnyesha Sankhe",
        "email": "jidnyeshas26@gmail.com",
        "role": "user"
    }
}
```

### Status

```text
201 Created
```

---

# 🔑 User Login

## Request

```http
POST /api/auth/login
```

### URL

```text
http://localhost:3000/api/auth/login
```

### Body

```json
{
    "email": "jidnyeshas26@gmail.com",
    "password": "Password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "Login successful",
    "token": "JWT_TOKEN"
}
```

### Status

```text
200 OK
```

The returned JWT is required to access protected endpoints.

---

# 👤 Get User Profile

This is a protected endpoint.

## Request

```http
GET /api/users/profile
```

### URL

```text
http://localhost:3000/api/users/profile
```

### Authorization

Use a Bearer Token:

```text
Authorization: Bearer JWT_TOKEN
```

### Success Response

```json
{
    "success": true,
    "message": "Protected profile accessed successfully",
    "user": {
        "userId": "USER_ID",
        "role": "user"
    }
}
```

### Status

```text
200 OK
```

---

# 👑 Admin Resource

This endpoint requires the user to have the `admin` role.

## Request

```http
GET /api/users/admin
```

### URL

```text
http://localhost:3000/api/users/admin
```

### Authorization

```text
Authorization: Bearer ADMIN_JWT_TOKEN
```

### Admin Success Response

```json
{
    "success": true,
    "message": "Admin resource accessed successfully",
    "user": {
        "userId": "USER_ID",
        "role": "admin"
    }
}
```

### Status

```text
200 OK
```

---

## 🚫 Unauthorized Request

If a protected endpoint is accessed without a valid JWT:

```json
{
    "success": false,
    "message": "Authentication required"
}
```

Status:

```text
401 Unauthorized
```

---

## 🚫 Forbidden Request

If a normal user tries to access an admin-only endpoint:

```json
{
    "success": false,
    "message": "Access denied"
}
```

Status:

```text
403 Forbidden
```

---

# 🔒 Authentication Flow

```text
User Registration
        ↓
Enter Name + Email + Password
        ↓
bcrypt.hash()
        ↓
Hashed Password
        ↓
MongoDB
```

```text
User Login
        ↓
Email + Password
        ↓
Find User
        ↓
bcrypt.compare()
        ↓
Password Valid
        ↓
jwt.sign()
        ↓
JWT Token
        ↓
Return Token
```

---

# 🛡️ Authorization Flow

```text
Client Request
        ↓
Bearer JWT
        ↓
JWT Authentication Middleware
        ↓
jwt.verify()
        ↓
Authenticated User
        ↓
Role Middleware
        ↓
Check User Role
        ↓
┌───────────────┐
│               │
user          admin
│               │
↓               ↓
User Routes   Admin Routes
```

---

# 🔐 Security

This project implements several security practices:

* Passwords are hashed using bcryptjs.
* Plain-text passwords are not stored in MongoDB.
* Passwords are not returned in API responses.
* JWT is used for authentication.
* Protected routes require a valid JWT.
* Admin routes require the `admin` role.
* MongoDB credentials are stored in environment variables.
* JWT secrets are stored in environment variables.
* `.env` is excluded from Git.

---

# 🧪 Postman Testing

The project includes a Postman collection for testing the API.

Collection:

```text
postman/Student-Auth-API.postman_collection.json
```

### Included Requests

```text
1. Register User
2. Login User
3. Get Profile
4. Admin Resource
```

### Recommended Testing Order

```text
Register
   ↓
Login
   ↓
Copy JWT
   ↓
Get Profile
   ↓
Test Without JWT
   ↓
Test Admin Route
   ↓
Test User/Admin Authorization
```

---

# 📚 API Documentation

Detailed API documentation is available at:

```text
docs/API_Documentation.md
```

---

# 🗄️ Database

The application uses MongoDB Atlas.

The User collection contains:

```text
User
├── name
├── email
├── password
├── role
├── createdAt
└── updatedAt
```

Possible roles:

```text
user
admin
```

Passwords are stored as bcrypt hashes.

---

# 📊 HTTP Status Codes

| Status Code | Meaning                 |
| ----------- | ----------------------- |
| 200         | Request successful      |
| 201         | Resource created        |
| 400         | Bad request             |
| 401         | Unauthorized            |
| 403         | Forbidden               |
| 409         | Resource already exists |
| 500         | Internal server error   |

---

# 🚀 Deployment

Deployed using Render:
```text
https://student-auth-api-2seo.onrender.com/
```

### Required Environment Variables on Render

```text
MONGODB_URI
JWT_SECRET
```

The application uses the `PORT` environment variable provided by Render.

### Start Command

```bash
npm start
```

### Build Command

```bash
npm install
```

---

# 👩‍💻 Author

## Jidnyesha Sankhe

📧 Email:

[jidnyeshas26@gmail.com](mailto:jidnyeshas26@gmail.com)

🔗 LinkedIn:

[https://www.linkedin.com/in/jidnyesha-sankhe-6599b5289](https://www.linkedin.com/in/jidnyesha-sankhe-6599b5289)

🐙 GitHub:

[https://github.com/Jidnyesha11](https://github.com/Jidnyesha11)

---

# 📄 License

This project was created for educational and learning purposes.

````