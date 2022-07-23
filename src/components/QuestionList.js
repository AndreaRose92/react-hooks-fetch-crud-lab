import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, handleDeleteQuestion}) {

  const questionsToRender = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} />
  })

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToRender}</ul>
    </section>
  );
}

export default QuestionList;
