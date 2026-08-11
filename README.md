# 🔐 Student Authentication API

A RESTful backend API implementing user authentication and authorization
using Node.js, Express.js, MongoDB, Mongoose, bcryptjs, and JWT.

## 🚀 Features

- User registration
- Secure password hashing
- User login
- JWT authentication
- Protected API routes
- User/Admin role authorization
- MongoDB database integration
- Postman API testing

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token
- dotenv
- Postman

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
├── .env
├── .gitignore
├── package.json
└── server.js
⚙️ Installation

Clone the repository:

git clone https://github.com/Jidnyesha11/student-auth-api.git

Move into the project:

cd student-auth-api

Install dependencies:

npm install
🔐 Environment Variables

Create a .env file:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Do not commit .env to GitHub.

▶️ Run the Application

Development:

npm run dev

Production:

npm start

The API runs locally at:

http://localhost:3000
📌 API Endpoints
Method	Endpoint	Authentication
POST	/api/auth/register	No
POST	/api/auth/login	No
GET	/api/users/profile	JWT
GET	/api/users/admin	JWT + Admin
🔑 Authentication

After login, the server returns a JWT.

Send it with protected requests:

Authorization: Bearer YOUR_JWT_TOKEN
👥 Roles
User

Can access authenticated user resources.

Admin

Can access administrator resources.

🔒 Security

Passwords are hashed using bcryptjs.

JWT is used for authentication.

Protected routes verify JWT tokens before allowing access.

Admin routes verify the user's role.

🧪 Testing

The API can be tested using Postman.

The Postman collection is available at:

postman/Student-Auth-API.postman_collection.json
📚 Documentation

Detailed API documentation:

docs/API_Documentation.md
👩‍💻 Author

Jidnyesha Sankhe