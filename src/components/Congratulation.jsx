export default function Congratulation({rightAnswers, setRenderSecret}) {
  return (
    <div className="w-[244px] mx-auto mt-[93px] text-center text-[24px] text-[#FFFFFF] pb-[20px]">
      <h3>Parabéns!</h3>
      <br />
      <p>
        Você completou o QUIZ com {rightAnswers} pontos,
        e isso te dá o direito de responder a
        pergunta secreta elaborada pela nossa
        plataforma.
      </p>
      <button
        className="bg-[#9DCF86] border-2 border-[#FFFFFF] font-bold w-[173px] rounded
        mt-[20px] h-[47px]"
        onClick={() => setRenderSecret(true)}
      >
        Responder
      </button>
    </div>
  );
}