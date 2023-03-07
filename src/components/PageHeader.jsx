import cupid from "../assets/cupid.png";
import strip from "../assets/strip.png";

export default function PageHeader() {
  return (
    <div className="w-max mx-auto pt-[75px]">
      <img
        src={cupid}
        alt="Imagem de cupido"
        className="relative left-[-20px] animate-[bounce_2.5s_linear_infinite]"
      />
      <img src={strip} alt="Imagem de laço" />
    </div>
  );
}