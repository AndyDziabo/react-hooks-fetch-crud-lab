import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => setQuestions(questions));
  }, []);

  function handleDeleteQ(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  function handleUpdateAnswer(updatedAnswer){
    const updatedQuestions = questions.map((question) => {
      if(question.id === updatedAnswer.id){
        return updatedAnswer;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteQ={handleDeleteQ} onUpdate={handleUpdateAnswer} />}
    </main>
  );
}

export default App;
