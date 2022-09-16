import logo from "../src/assests/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-full mx-auto px-16 flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent text-6xl bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="../src/assests/image6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zince font-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1  bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#242634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zince block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:opacity-70 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
