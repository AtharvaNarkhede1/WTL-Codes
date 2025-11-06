const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static('public'));

let students = [
  { id: 1, name: "pratap sanap", age: 20, course: "Computer Science" },
  { id: 2, name: "tushar shinde", age: 22, course: "Mathematics" },
  { id: 3, name: "vaibhav salve", age: 21, course: "Physics" }
];

// Static route
app.get('/', (req, res) => {
  res.send('<h1>Student API</h1><p>Use /api/students for CRUD operations</p>');
});

// JSON data
app.get('/api', (req, res) => {
  res.json({ message: "Student API", endpoints: ["/api/students"] });
});

// GET all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// GET student by ID
app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  student ? res.json(student) : res.status(404).json({ error: "Not found" });
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, age, course } = req.body;
  const newStudent = { id: Date.now(), name, age, course };
  students.push(newStudent);
  res.json(newStudent);
});

// PUT update student
app.put('/api/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });
  
  students[index] = { id: parseInt(req.params.id), ...req.body };
  res.json(students[index]);
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });
  
  const deleted = students.splice(index, 1)[0];
  res.json({ message: "Deleted", student: deleted });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});