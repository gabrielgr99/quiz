import { useState } from 'react';
import isCorrect from '../utils';

export default function QuestionOption({option, index, setQuestionNumber, questionNumber, questionId, setRightAnswers, marked, setMarked}) {
  const [style, setStyle] = useState('');

  const handleClick = () => {
    setMarked(true);

    if (isCorrect(questionId, `option-${index}`)) {
      setStyle("bg-[#2C9A30] text-[#FFFFFF] border-none");
      setRightAnswers(prev => prev + 1);
    } else {
      setStyle("bg-[#C02020] text-[#FFFFFF] border-none");
    }

    setTimeout(() => {
      setQuestionNumber(questionNumber + 1)
      setStyle('')
      setMarked(false);
    }, 1000);
  };

  return (
    <button
      className={`w-[201px] border border-[#000000] text-[#272727]
      min-h-[38px] m-[7px] font-bold rounded-[3px] h-max px-[3px] ${style}`}
      disabled={marked}
      onClick={handleClick}
      id={`option-${index}`}
    >
      {option}
    </button>
  );
}