import { useState } from 'react';
import End from './components/End';
import PageHeader from './components/PageHeader';
import Questions from './components/Questions';

function App() {
  const [finishQuestions, setFinishQuestion] = useState(true);
  const [rightAnswers, setRightAnswers] = useState(0);

  return (
    <div className="h-[100vh]">
      <PageHeader />
      {
        finishQuestions
        ? <Questions setFinishQuestion={setFinishQuestion} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers} />
        : <End rightAnswers={rightAnswers} />
      }
    </div>
  );
}

export default App;
