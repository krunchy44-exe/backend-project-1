# Backend Project 1 - REST API Fundamentals

> Built as part of the **DecodeLabs Backend Development Internship Program**.

## 📖 Overview

This project is a simple REST API developed using **Node.js** and **Express.js**. It demonstrates the fundamentals of backend development, including routing, HTTP methods, JSON responses, request validation, and proper HTTP status codes.

## 🚀 Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman

## ✨ Features

- Express Server
- GET Home Route (`/`)
- GET All Users (`/users`)
- GET User By ID (`/users/:userID`)
- POST New User (`/users`)
- Request Validation
- Duplicate User ID Prevention
- JSON Responses
- Proper HTTP Status Codes

## 📂 Project Structure

```text
backend-project-1/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/backend-project-1.git
```

Move into the project

```bash
cd backend-project-1
```

Install dependencies

```bash
npm install
```

Run the server

```bash
node server.js
```

The server runs on:

```
http://localhost:3000
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome route |
| GET | `/users` | Returns all users |
| GET | `/users/:userID` | Returns a user by ID |
| POST | `/users` | Adds a new user |

## 📊 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |

## ✅ Validation

- `userID` is required.
- `name` is required.
- Duplicate `userID` values are not allowed.

## 📚 Learning Outcomes

Through this project, I learned:

- Express.js fundamentals
- REST API development
- HTTP methods (GET & POST)
- Routing
- Route parameters (`req.params`)
- Request body (`req.body`)
- JSON responses
- Input validation
- Error handling
- HTTP status codes

## 👨‍💻 Author

**Kannishk Chauhan**

Backend Development Intern at DecodeLabs
