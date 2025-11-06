# Assignment 9 - Node.js Express Server with RESTful API

## Description
Node.js and Express.js back-end server with static file serving and RESTful API for student data management.

## Features
- Static file serving from `/public` directory
- JSON data endpoints
- Full CRUD operations for student data
- RESTful API design
- Error handling

## Installation
```bash
npm install
```

## Running the Server
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Basic Routes
- `GET /` - Serves static HTML documentation
- `GET /api/info` - API information

### Student CRUD Operations
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

## Testing with Postman

### 1. GET All Students
- Method: GET
- URL: `http://localhost:3000/api/students`

### 2. GET Student by ID
- Method: GET
- URL: `http://localhost:3000/api/students/1`

### 3. POST Create Student
- Method: POST
- URL: `http://localhost:3000/api/students`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "name": "Alice Brown",
  "age": 23,
  "course": "Engineering"
}
```

### 4. PUT Update Student
- Method: PUT
- URL: `http://localhost:3000/api/students/1`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "name": "John Updated",
  "age": 21,
  "course": "Data Science"
}
```

### 5. DELETE Student
- Method: DELETE
- URL: `http://localhost:3000/api/students/1`

## Sample Student Data Structure
```json
{
  "id": 1,
  "name": "John Doe",
  "age": 20,
  "course": "Computer Science"
}
```