import { useEffect, useState } from 'react';
import questions from '../questions.json';
import QuestionBody from './QuestionBody';
import QuestionHeader from './QuestionHeader';

export default function Questions({setFinishQuestion, rightAnswers, setRightAnswers}) {
  const [questionNumber, setQuestionNumber] = useState(0);
  

  useEffect(() => {
    setFinishQuestion(questions.length > questionNumber)
  });

  return (
    <div className="w-[244px] mx-auto mt-[93px]">
      <h3 className="text-[#FFFFFF] font-bold text-[18px]">{`Pontos ${rightAnswers}/${questions.length}`}</h3>
      <div className="drop-shadow-xl">
        <QuestionHeader question={questions[questionNumber]?.question} />
        <QuestionBody
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setRightAnswers={setRightAnswers}
        />
      </div>
    </div>
  );
}
