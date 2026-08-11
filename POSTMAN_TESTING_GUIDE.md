# Postman Testing Guide for REST & GraphQL API

## Server Setup
1. Start the server: `npm start`
2. Server runs on: `http://localhost:3000`

---

## REST API Endpoints

### 1. GET All Students
- **Method**: GET
- **URL**: `http://localhost:3000/api/students`
- **Headers**: None required
- **Body**: None
- **Expected Response**: Array of all students

### 2. GET Single Student
- **Method**: GET
- **URL**: `http://localhost:3000/api/students/1`
- **Headers**: None required
- **Body**: None
- **Expected Response**: Single student object

### 3. POST Create Student
- **Method**: POST
- **URL**: `http://localhost:3000/api/students`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "major": "Biology",
  "year": 2
}
```
- **Expected Response**: 201 Created with new student data

### 4. PUT Update Student (Full Update)
- **Method**: PUT
- **URL**: `http://localhost:3000/api/students/1`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "name": "John Doe Updated",
  "email": "john.updated@example.com",
  "major": "Software Engineering",
  "year": 3
}
```
- **Expected Response**: Updated student object

### 5. PATCH Update Student (Partial Update)
- **Method**: PATCH
- **URL**: `http://localhost:3000/api/students/2`
- **Headers**: 
  - `Content-Type: application/json`
- **Body** (raw JSON):
```json
{
  "year": 4
}
```
- **Expected Response**: Partially updated student object

### 6. DELETE Student
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/students/3`
- **Headers**: None required
- **Body**: None
- **Expected Response**: Deleted student object

---

## GraphQL Endpoint

**Base URL**: `http://localhost:3000/graphql`

### Important: GraphQL in Postman Setup
1. **Method**: POST
2. **URL**: `http://localhost:3000/graphql`
3. **Headers**: 
   - `Content-Type: application/json`
4. **Body**: Select "raw" and "JSON"

---

### GraphQL Query Examples

#### 1. Get All Students
```json
{
  "query": "{ students { id name email major year } }"
}
```

#### 2. Get Single Student
```json
{
  "query": "{ student(id: \"1\") { id name email major year } }"
}
```

#### 3. Add Student (Mutation)
```json
{
  "query": "mutation { addStudent(input: { name: \"Bob Wilson\", email: \"bob.wilson@example.com\", major: \"Chemistry\", year: 1 }) { id name email major year } }"
}
```

#### 4. Update Student (Mutation)
```json
{
  "query": "mutation { updateStudent(id: \"1\", input: { name: \"John Doe Modified\", email: \"john.modified@example.com\", major: \"AI\", year: 4 }) { id name email major year } }"
}
```

#### 5. Delete Student (Mutation)
```json
{
  "query": "mutation { deleteStudent(id: \"2\") { id name email } }"
}
```

---

## Alternative: GraphQL with Variables (Recommended)

For better organization, use GraphQL variables:

### Add Student with Variables
**Body**:
```json
{
  "query": "mutation AddStudent($input: StudentInput!) { addStudent(input: $input) { id name email major year } }",
  "variables": {
    "input": {
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "major": "English",
      "year": 2
    }
  }
}
```

### Update Student with Variables
**Body**:
```json
{
  "query": "mutation UpdateStudent($id: ID!, $input: StudentInput!) { updateStudent(id: $id, input: $input) { id name email major year } }",
  "variables": {
    "id": "1",
    "input": {
      "name": "John Doe Final",
      "email": "john.final@example.com",
      "major": "Data Science",
      "year": 4
    }
  }
}
```

---

## Common Issues & Solutions

### GraphQL not working in Postman?
1. ✅ Make sure Method is **POST** (not GET)
2. ✅ Set Header: `Content-Type: application/json`
3. ✅ Body must be "raw" and format "JSON"
4. ✅ The query must be inside a JSON object with "query" key
5. ✅ Server must be running on http://localhost:3000

### REST API not working?
1. ✅ Check if Content-Type header is set for POST/PUT/PATCH
2. ✅ Verify the URL is correct
3. ✅ Make sure request body is valid JSON

---

## Testing Checklist

### REST API
- [ ] GET all students
- [ ] GET single student
- [ ] POST create student
- [ ] PUT full update student
- [ ] PATCH partial update student
- [ ] DELETE student

### GraphQL
- [ ] Query all students
- [ ] Query single student
- [ ] Mutation: Add student
- [ ] Mutation: Update student
- [ ] Mutation: Delete student

---

## Browser Testing

### GraphiQL Interface
Navigate to `http://localhost:3000/graphql` in your browser to use the built-in GraphiQL interface for testing GraphQL queries interactively.
