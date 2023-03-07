import { useState } from 'react';
import Congratulation from './Congratulation';
import Secret from './Secret';

export default function End({rightAnswers}) {
  const [renderSecret, setRenderSecret] = useState(false);

  return (
    <div>
      {
        renderSecret
        ? <Secret />
        : <Congratulation
          rightAnswers={rightAnswers}
          setRenderSecret={setRenderSecret}
        />
      }
    </div>
  );
}