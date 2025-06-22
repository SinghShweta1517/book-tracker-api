# 📚 Book Tracker API

This is a simple Book Tracker backend server built with **Node.js**, **Express**, and **MongoDB**. It provides custom API endpoints for managing a list of books — including adding, viewing, updating, and deleting books.

---

## 🚀 API Endpoints

Base URL: `http://localhost:5000/api/books`

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/`                | Get all books             |
| GET    | `/:id`             | Get one book by ID        |
| POST   | `/`                | Create a new book         |
| PUT    | `/:id`             | Update an existing book   |
| DELETE | `/:id`             | Delete a book             |

### 📥 Sample POST Request Body
```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "rating": 4.5,
  "review": "Inspirational story."
}

## 🧪 Testing

This project uses **Jest** and **Supertest** for testing.

### How to Run Tests

```bash
npm test

