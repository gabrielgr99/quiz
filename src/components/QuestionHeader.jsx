export default function QuestionHeader({question}) {
  return (
    <h4
      className="text-center bg-gradient-to-r from-[#FF7A7A]
      to-[#FFB775] rounded-t-[7px] text-[#FFFFFF] font-bold text-[14px]
      p-[5px]"
    >
      {question}
    </h4>
  );
}