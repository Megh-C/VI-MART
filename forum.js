document.addEventListener("DOMContentLoaded", () => {
    fetchQuestions();
});

function fetchQuestions() {
    fetch("http://localhost:5000/api/questions")
        .then(response => response.json())
        .then(questions => {
            const questionsList = document.getElementById("questions-list");
            questionsList.innerHTML = ""; // Clear existing content

            questions.forEach(question => {
                const li = document.createElement("li");
                li.textContent = question.text; // Assuming `text` is the key for question content
                questionsList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching questions:", error));
}

function askQuestion() {
    const questionInput = document.getElementById("question-input");
    const questionText = questionInput.value.trim();

    if (questionText === "") return; // Prevent empty submissions

    fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: questionText })
    })
    .then(response => response.json())
    .then(newQuestion => {
        questionInput.value = ""; // Clear input
        fetchQuestions(); // Refresh list
    })
    .catch(error => console.error("Error posting question:", error));
}
