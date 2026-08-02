const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Dummy Database
let students = [
    {
        id: 1,
        name: "Hit",
        age: 20
    }
];


// CREATE
app.post("/students", (req, res) => {
    const student = req.body;

    students.push(student);

    res.status(201).json({
        message: "Student Added",
        data: student
    });
});


// READ ALL
app.get("/students", (req, res) => {
    res.json(students);
});


// READ SINGLE
app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.json(student);
});


// UPDATE
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    students[index] = {
        ...students[index],
        ...req.body
    };

    res.json({
        message: "Student Updated",
        data: students[index]
    });

});


// DELETE
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student Deleted",
        data: deletedStudent
    });

});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});