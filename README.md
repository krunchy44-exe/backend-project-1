# Backend Project 1 - REST API Fundamentals

A simple REST API built using **Node.js** and **Express.js** as part of Backend Development Project 1.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (for API testing)

## Features

- Create a local Express server
- GET Home Route
- GET All Users
- GET User By ID
- POST New User
- Input Validation
- Duplicate User ID Prevention
- JSON Responses
- Proper HTTP Status Codes

## Project Structure

```
backend-project-1/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/backend-project-1.git
```

Move into the project directory:

```bash
cd backend-project-1
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server will run on:

```
http://localhost:3000
```

## API Endpoints

### Home Route

**GET /**

Response

```text
Welcome to my first Express server!
```

---

### Get All Users

**GET /users**

Response

```json
[
    {
        "userID": 1,
        "name": "surya"
    },
    {
        "userID": 2,
        "name": "pankaj"
    }
]
```

---

### Get User By ID

**GET /users/:userID**

Example

```
GET /users/1
```

Response

```json
{
    "userID": 1,
    "name": "surya"
}
```

If the user does not exist:

```json
{
    "message": "User not found"
}
```

---

### Add New User

**POST /users**

Request Body

```json
{
    "userID": 3,
    "name": "Amit"
}
```

Success Response

```json
{
    "message": "User added successfully",
    "users": [
        {
            "userID": 1,
            "name": "surya"
        },
        {
            "userID": 2,
            "name": "pankaj"
        },
        {
            "userID": 3,
            "name": "Amit"
        }
    ]
}
```

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |

## Validation

- `userID` is required.
- `name` is required.
- Duplicate `userID` is not allowed.

## Author

**Kannishk Chauhan**
