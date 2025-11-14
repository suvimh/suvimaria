import "./IntroTextCard.css";
export default function IntroTextCard() {
  return (
    <div className="introtext-wrapper">
      <div className="introtext-left">
        <p className="introtext-left p">
          Hi! I'm a Finnish singer-songwriter whose music bubbles up in moments
          of processing. From Helsinki to London to Barcelona, these songs have
          travelled with me, evolving as I share them on stage with those
          leaning in to listen.
        </p>
      </div>
      <div className="introtext-right">
        <img src="suvimaria.png" alt="Suvi Maria" className="artistlogo" />
      </div>
    </div>
  );
}

