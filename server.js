const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let questions = []; // Store questions in-memory

app.get("/api/questions", (req, res) => {
    res.json(questions);
});

app.post("/api/questions", (req, res) => {
    const newQuestion = { text: req.body.text };
    questions.push(newQuestion);
    res.status(201).json(newQuestion);
});

app.listen(5000, () => console.log("Server running on port 5000"));
