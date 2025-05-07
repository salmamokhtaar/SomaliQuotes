import { useState, useEffect } from "react";

function SomaliQuote() {
  const MaahMaah = [
    {
      text: "Canjeero See U Kala Koreyso Lo Cuna.",
      translation: "Pancakes are eaten according to how they are stacked.",
      meaning: "Things should be done in the proper order."
    },
    {
      text: "Hal libaax arkaysaa ma godlato.",
      translation: "A she-camel that has seen a lion doesn't return to its den.",
      meaning: "Once you've experienced danger, you remain cautious."
    },
    {
      text: "Awkeey dooli diloow dad nool maas udaahaa.",
      translation: "A lame donkey that kills, doesn't delay for living people.",
      meaning: "Don't underestimate someone based on appearances."
    },
    {
      text: "Sabuul galeey ninkusiiyaa la siiyaa.",
      translation: "The one who gives you a sack, is given one too.",
      meaning: "What goes around comes around."
    },
    {
      text: "Dawaco geel ma cunto.",
      translation: "A jackal doesn't eat a camel.",
      meaning: "Know your limits and capabilities."
    },
    {
      text: "Cusbo caan waaye.",
      translation: "Salt is famous.",
      meaning: "Essential things are always valued."
    },
    {
      text: "Quraansho aruurte anyax waa jiidee.",
      translation: "A termite that has gathered food will attract ants.",
      meaning: "Success attracts both friends and enemies."
    },
    {
      text: "Kuunto Wixii Loo Kuu Kusay Karaamo Lee Maahino.",
      translation: "What is sewn for you is not a blessing.",
      meaning: "Be grateful for what you receive, even if it's not perfect."
    },
    {
      text: "Nin Rooraayo Hortiis Mala Rooro.",
      translation: "Don't run in front of a running man.",
      meaning: "Don't try to outdo someone who is already in motion."
    },
    {
      text: "Ninkii la waayo mininkiisaa laga tawaa.",
      translation: "If a man is missing, he is sought at his home.",
      meaning: "People are often found where they belong."
    },
    {
      text: "Aqoon la'aan waa iftiin la'aan.",
      translation: "Without knowledge, there is no light.",
      meaning: "Education is essential for enlightenment."
    },
    {
      text: "Gacmo wadajir bey wax ku gooyaan.",
      translation: "Hands working together can cut anything.",
      meaning: "Unity brings strength and success."
    },
    {
      text: "Hadal badni haan ma buuxsho.",
      translation: "Too much talk doesn't fill a water container.",
      meaning: "Actions speak louder than words."
    },
    {
      text: "Intaadan falin ka fiirso.",
      translation: "Before you act, think carefully.",
      meaning: "Consider the consequences before taking action."
    },
    {
      text: "Nin aad taqaan iyo tuug aadan aqoon midna ha rumaysan.",
      translation: "Don't trust a man you know or a thief you don't know.",
      meaning: "Be cautious with everyone, even those familiar to you."
    }
  ];

  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  // Add auto-advance feature
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < MaahMaah.length - 1) {
        handleTransition();
      }
    }, 15000); // Change quote every 15 seconds

    return () => clearTimeout(timer);
  }, [index]);

  const handleTransition = () => {
    setFadeIn(false);
    setTimeout(() => {
      nextBtn();
      setFadeIn(true);
      setShowTranslation(false);
      setShowMeaning(false);
    }, 500);
  };

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

  const randomBtn = () => {
    const randomIndex = Math.floor(Math.random() * MaahMaah.length);
    setIndex(randomIndex);
    setShowTranslation(false);
    setShowMeaning(false);
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const toggleMeaning = () => {
    setShowMeaning(!showMeaning);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Somali Proverbs (Maahmaahyo)</h2>

        <div className={`relative min-h-[200px] flex flex-col items-center justify-center mb-8 ${fadeIn ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
          <p className="text-3xl font-medium text-gray-800 mb-6 text-center">
            {`${index + 1}. ${MaahMaah[index].text}`}
          </p>

          {showTranslation && (
            <div className="bg-blue-50 p-4 rounded-lg w-full mb-4">
              <p className="text-xl text-gray-700">
                <span className="font-semibold">Translation:</span> {MaahMaah[index].translation}
              </p>
            </div>
          )}

          {showMeaning && (
            <div className="bg-yellow-50 p-4 rounded-lg w-full">
              <p className="text-xl text-gray-700">
                <span className="font-semibold">Meaning:</span> {MaahMaah[index].meaning}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={toggleTranslation}
            className={`px-4 py-2 rounded-md text-white transition-colors ${showTranslation ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'}`}
          >
            <i className={`fa-solid ${showTranslation ? 'fa-eye-slash' : 'fa-eye'} mr-2`}></i>
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>

          <button
            onClick={toggleMeaning}
            className={`px-4 py-2 rounded-md text-white transition-colors ${showMeaning ? 'bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
          >
            <i className={`fa-solid ${showMeaning ? 'fa-lightbulb' : 'fa-lightbulb'} mr-2`}></i>
            {showMeaning ? 'Hide Meaning' : 'Show Meaning'}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={previousBtn}
            disabled={index === 0}
            className={`bg-blue-500 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-600 transition-colors flex items-center
            ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Previous
          </button>

          <button
            onClick={randomBtn}
            className="bg-purple-500 px-6 py-3 rounded-md text-white font-medium hover:bg-purple-600 transition-colors flex items-center"
          >
            <i className="fa-solid fa-shuffle mr-2"></i>
            Random
          </button>

          <button
            onClick={nextBtn}
            disabled={index === MaahMaah.length - 1}
            className={`bg-blue-500 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-600 transition-colors flex items-center
            ${index === MaahMaah.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Proverb {index + 1} of {MaahMaah.length}
          </span>

          {index === MaahMaah.length - 1 && (
            <p className="mt-4 text-red-500 font-semibold">You've reached the end of the collection!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SomaliQuote;