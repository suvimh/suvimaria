import "./index.css";
import LyricBlobTicker from "./components/LyricBlobTicker";
import SocialsWithVideo from "./components/SocialsWithVideo";
import IntroTextCard from "./components/IntroTextCard";

export default function App() {
  const images = [
    { src: "lyrics blobs/1.png", color: "blue" },
    { src: "lyrics blobs/2.png", color: "green" },
    { src: "lyrics blobs/3.png", color: "pink" },
    { src: "lyrics blobs/4.png", color: "orange" },
    { src: "lyrics blobs/5.png", color: "blue" },
    { src: "lyrics blobs/6.png", color: "green" },
    { src: "lyrics blobs/7.png", color: "pink" },
    { src: "lyrics blobs/8.png", color: "orange" },
  ];

  return (
    <div className="min-h-srceen bg-white p-8 flex flex-col gap-16">
      {/* Header section */}
      <section className="w-full grid grid-cols-3">
        <div></div>
        <div className="text-center">
          <div className="h1 text-center">suvimaria</div>
          <div className="h2 opacity-70 mt-2">a backdoor to my mind</div>
        </div>
        <div></div>
      </section>

      <section>
        <LyricBlobTicker images={images} />
      </section>

      {/* Info section */}
      <section className="info-section">
        <div className="info-container">
          <SocialsWithVideo />
          <IntroTextCard />
        </div>
      </section>

      {/* Bottom section */}
      <section>
        <LyricBlobTicker images={images} />
      </section>
    </div>
  );
}
