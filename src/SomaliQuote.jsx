import { useState } from "react";

function SomaliQuote() {
  const MaahMaah = [
    "1. Canjeero See U Kala Koreyso Lo Cuna.",
    "2. Hal libaax arkaysaa ma godlato.",
    "3. Awkeey dooli diloow dad nool maas udaahaa.",
    "4. Sabuul galeey ninkusiiyaa la siiyaa..",
    "5. Dawaco geel ma cunto.",
    "6. Cusbo caan waaye.",
    "7. Quraansho aruurte anyax waa jiidee.",
    "8. Kuunto Wixii Loo Kuu Kusay Karaamo Lee Maahino.",
    "9. Nin Rooraayo Hortiis Mala Rooro",
    "10. Ninkii la waayo mininkiisaa laga tawaa",
  ];

  const [index, setIndex] = useState(0);

  const nextBtn = () => {
    if (index < MaahMaah.length - 1) {
      setIndex(index + 1);
    } 
  };


  const previousBtn = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };


  return (
    <div className="text-center">  
<h1 className= {`text-4xl text-red-500 font-bold ${index === MaahMaah.length-1 ? "block" :"hidden" }`}>Dhamaad</h1>

<p className={`my-20 text-4xl ${index == 2 ?"text-red-700" :" "}`}>{MaahMaah[index]}</p>
      <button onClick={previousBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-2xl" >Previous</button>
      <button onClick={nextBtn}className="bg-blue-500 px-8 py-3 rounded text-white ml-20 text-2xl"> Next</button>
    </div>
  );

  }
export default SomaliQuote;
