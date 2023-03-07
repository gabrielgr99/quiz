import questions from './questions.json';

const isCorrect = (questionId, answer) => {
  return answer === questions.find(({id}) => id === questionId).answer
};

export default isCorrect;