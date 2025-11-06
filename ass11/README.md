# Assignment 11 - JWT Authentication with Node.js, Express, MongoDB

## Description
Server-side user authentication system with JWT tokens and protected routes using Node.js, Express, and MongoDB.

## Features
- User registration and login
- JWT token generation and verification
- Password hashing with bcrypt
- Protected routes with middleware
- Role-based access control (user/admin)
- MongoDB integration with Mongoose

## Installation
```bash
npm install
```

## Environment Setup
Create `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jwt_auth_db
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
```

## Running the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Protected Routes
- `GET /api/protected/dashboard` - User dashboard (protected)
- `GET /api/protected/profile` - User profile (protected)
- `GET /api/protected/admin` - Admin only route
- `GET /api/protected/users` - Get all users (admin only)

## Testing with Postman

### 1. Register User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

### 2. Login User
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Access Protected Route
```
GET http://localhost:5000/api/protected/dashboard
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

### 4. Admin Route (requires admin role)
```
GET http://localhost:5000/api/protected/admin
Authorization: Bearer ADMIN_JWT_TOKEN_HERE
```

## User Roles
- `user` - Default role, access to basic protected routes
- `admin` - Admin role, access to all routes including admin-only endpoints

## Security Features
- Password hashing with bcrypt (12 rounds)
- JWT token expiration
- Protected routes middleware
- Role-based authorization
- Input validation
- Error handling

## Database Schema
```javascript
User {
  username: String (required, unique, min: 3)
  email: String (required, unique, valid email)
  password: String (required, min: 6, hashed)
  role: String (enum: ['user', 'admin'], default: 'user')
  timestamps: true
}
```