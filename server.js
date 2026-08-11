const express = require("express");
const path = require("path");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let students = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", major: "Computer Science", year: 2 },
  { id: "2", name: "Jane Smith", email: "jane.smith@example.com", major: "Mathematics", year: 3 },
  { id: "3", name: "Samuel Lee", email: "samuel.lee@example.com", major: "Physics", year: 1 },
];
let nextId = 4;

// REST API Endpoints
app.get("/api/students", (req, res) => {
  res.json(students);
});


// Get a single student by ID
app.get("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(student);
});


// Create a new student
app.post("/api/students", (req, res) => {
  const { name, email, major, year } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newStudent = { id: String(nextId++), name, email, major: major || "", year: year ?? null };
  students.push(newStudent);
  res.status(201).json({ message: "Student created successfully", data: newStudent });
});


// Update an existing student
app.put("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, email, major, year } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  student.name = name;
  student.email = email;
  student.major = major || "";
  student.year = year ?? null;

  res.json({ message: "Student updated successfully", data: student });
});



// Partially update an existing student
app.patch("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, email, major, year } = req.body;
  if (name !== undefined) student.name = name;
  if (email !== undefined) student.email = email;
  if (major !== undefined) student.major = major;
  if (year !== undefined) student.year = year;

  res.json({ message: "Student partially updated", data: student });
});


// Delete a student
app.delete("/api/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];
  res.json({ message: "Student deleted successfully", data: deletedStudent });
});


// GraphQL Schema and Resolvers
const schema = buildSchema(`
  type Student {
    id: ID!
    name: String!
    email: String!
    major: String
    year: Int
  }

  input StudentInput {
    name: String!
    email: String!
    major: String
    year: Int
  }

  type Query {
    students: [Student!]!
    student(id: ID!): Student
  }

  type Mutation {
    addStudent(input: StudentInput!): Student!
    updateStudent(id: ID!, input: StudentInput!): Student
    deleteStudent(id: ID!): Student
  }
`);

const rootValue = {
  students: () => students,
  student: ({ id }) => students.find((s) => s.id === id),
  addStudent: ({ input }) => {
    const newStudent = { id: String(nextId++), name: input.name, email: input.email, major: input.major || "", year: input.year ?? null };
    students.push(newStudent);
    return newStudent;
  },
  updateStudent: ({ id, input }) => {
    const student = students.find((s) => s.id === id);
    if (!student) return null;
    student.name = input.name;
    student.email = input.email;
    student.major = input.major || "";
    student.year = input.year ?? null;
    return student;
  },
  deleteStudent: ({ id }) => {
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) return null;
    return students.splice(index, 1)[0];
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true, // GraphiQL interface for browser
    pretty: true,
  })
);

app.listen(PORT, () => {
  console.log(`Student portal demo running on http://localhost:${PORT}`);
  console.log(`REST: http://localhost:${PORT}/api/students`);
  console.log(`GraphQL: http://localhost:${PORT}/graphql`);
});