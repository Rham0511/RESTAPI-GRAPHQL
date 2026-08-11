# REST API & GraphQL Demo

A Student Management System demonstrating both REST API and GraphQL implementations using Express.js and Node.js.

## 🚀 Features

- **REST API** with full CRUD operations (GET, POST, PUT, PATCH, DELETE)
- **GraphQL API** with queries and mutations
- Built-in GraphiQL interface for GraphQL testing
- Comprehensive Postman testing guide
- Video presentation script (Taglish)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Postman (for API testing)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Rham0511/RESTAPI-GRAPHQL.git
cd RESTAPI-GRAPHQL
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## 📚 API Documentation

### REST API Endpoints

- **GET** `/api/students` - Get all students
- **GET** `/api/students/:id` - Get a single student by ID
- **POST** `/api/students` - Create a new student
- **PUT** `/api/students/:id` - Update a student (full update)
- **PATCH** `/api/students/:id` - Partially update a student
- **DELETE** `/api/students/:id` - Delete a student

### GraphQL Endpoint

- **POST** `/graphql` - GraphQL endpoint for queries and mutations

#### Sample GraphQL Query:
```graphql
{
  students {
    id
    name
    email
    major
    year
  }
}
```

#### Sample GraphQL Mutation:
```graphql
mutation {
  addStudent(input: {
    name: "John Doe"
    email: "john.doe@example.com"
    major: "Computer Science"
    year: 2
  }) {
    id
    name
    email
  }
}
```

## 🧪 Testing

See [POSTMAN_TESTING_GUIDE.md](./POSTMAN_TESTING_GUIDE.md) for detailed testing instructions with Postman.

## 📹 Video Presentation

A complete Taglish script for video presentation is available in [VIDEO_SCRIPT_TAGLISH.md](./VIDEO_SCRIPT_TAGLISH.md)

## 🔑 Key Differences: REST vs GraphQL

| Feature | REST | GraphQL |
|---------|------|---------|
| Endpoints | Multiple endpoints | Single endpoint (`/graphql`) |
| HTTP Methods | GET, POST, PUT, PATCH, DELETE | POST only |
| Data Fetching | Fixed structure | Flexible - request specific fields |
| Over-fetching | May return unnecessary data | Get exactly what you request |
| Documentation | Manual (Swagger, etc.) | Self-documenting (GraphiQL) |

## 📦 Dependencies

- `express` - Web framework
- `graphql` - GraphQL implementation
- `express-graphql` - Express middleware for GraphQL

## 👨‍💻 Author

**Rham0511**
- GitHub: [@Rham0511](https://github.com/Rham0511)

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Assignment for ITE413_4F1 REST/GRAPHQL
- Due: August 11, 2024 at 7:00 PM
