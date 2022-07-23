import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const url = "http://localhost:4000/questions"
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect(()=> {
    fetch(`${url}`)
      .then(r=>r.json())
      .then(questions=>setQuestions(questions))
  }, [])

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} url={url} handleDeleteQuestion={handleDeleteQuestion} />}
    </main>
  );
}

export default App;
