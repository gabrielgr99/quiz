import { useState } from 'react';
import marry from '../assets/marry.gif';

export default function Secret() {
  const [yes, setYes] = useState(null);
  const styleBtn = "border-2 border-[#FFFFFF] font-bold h-[42px] w-[110px] rounded mt-[20px]"

  return (
    <div className="w-[244px] mx-auto mt-[93px] text-center text-[24px] text-[#FFFFFF]">
      <p>
        Você se casaria com a pessoa que
        escreveu todas essas perguntas? 
      </p>
      <div className="flex justify-around">
        <button
          className={`bg-[#C02020] ${styleBtn}`}
          onClick={() => setYes(false)}
        >
          Não
        </button>
        <button
          className={`bg-[#9DCF86] ${styleBtn}`}
          onClick={() => setYes(true)}
        >
          Sim
        </button>
      </div>
      {(yes !== null && !yes) && <div>Resposta errada!</div>}
      {(yes !== null && yes) && <img src={marry} alt="Gif de pedido de casamento" className="mt-[20px] rounded-xl" />}
    </div>
  );
}