import { useState } from 'react';
import questions from '../questions.json';
import QuestionOption from './QuestionOption';

export default function QuestionBody({setQuestionNumber, questionNumber, setRightAnswers}) {
  const [marked, setMarked] = useState(false);

  return (
    <div className="p-[14px] bg-[#FFFFFF] rounded-b-[7px]">
      {
        questions[questionNumber]?.options.map((option, index) => (
          <QuestionOption
            key={`option-${index}`}
            option={option}
            index={index}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
            questionId={questions[questionNumber].id}
            setRightAnswers={setRightAnswers}
            marked={marked}
            setMarked={setMarked}
          />
        ))
      }
    </div>
  );
}