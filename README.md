# 📚 Book Review API

A RESTful API for managing books and user reviews built with Node.js, Express.js, and MongoDB. The system supports JWT authentication, user signup/login, CRUD operations on books, and allows each user to submit a single review per book.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- dotenv
- Postman (for testing)

---

## ⚙️ Environment Variables

Create a .env file in the root directory of your project and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
DBNAME=your_db_name
PORT=8000
JWT_SECRET=your_jwt_secret_key
Replace values with your actual credentials.
```
---

## ⚙️Schema Design
```
🧍 User
Field	Type	Description
username	String	Unique identifier
password	String	Hashed password

📖 Book
Field	Type	Description
title	String	Book title
author	String	Book author
genre	String	Book genre

📝 Review
Field	Type	Description
user	ObjectId	Reference to User
book	ObjectId	Reference to Book
rating	Number	Value between 1 and 5
comment	String	Review content

```
---

## 🔐 Authentication
```
All protected routes require a JWT token in the Authorization header:


Authorization: Bearer <your_token_here>
📫 Example API Endpoints
📌 Base URL: http://localhost:8000/api



1. Sign Up
POST /signup
Body (JSON):

{
"username": "john123",
"password": "mypassword"
}

—

2. Login
POST /login
Body:

{
"username": "john123",
"password": "mypassword"
}

Returns:

{
"token": "JWT_TOKEN_HERE"
}

Use this token for all protected routes:

Authorization: Bearer JWT_TOKEN_HERE

—

3. Add a Book (Protected)
POST /books
Headers: Authorization
Body:

{
"title": "The Alchemist",
"author": "Paulo Coelho",
"genre": "Fiction"
}

—

4. Get All Books
GET /books?page=1&limit=5&author=paulo&genre=fiction

—

5. Get Book Details by ID
GET /books/:id?page=1&limit=3
Returns:

book object

averageRating

paginated reviews

—

6. Add a Review to a Book (Protected)
POST /books/:id/reviews
Headers: Authorization
Body:

{
"rating": 5,
"comment": "Amazing book!"
}

—

7. Update Your Review
PUT /reviews/:id
Headers: Authorization
Body:

{
"rating": 4,
"comment": "Updated comment."
}

—

8. Delete Your Review
DELETE /reviews/:id
Headers: Authorization
—
```
---
## 🧪 Testing with Postman
```
You can test all routes using Postman or any other API client. Ensure you:

Signup or login to get the token

Add Bearer Token in Authorization tab

Use JSON format for request bodies

—
