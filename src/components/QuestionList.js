import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQ, onUpdate }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQ={onDeleteQ} onUpdate={onUpdate} />
        ))}
        
      </ul>
    </section>
  );
}

export default QuestionList;
