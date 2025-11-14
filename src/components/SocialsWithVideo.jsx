import { FaInstagram, FaSpotify } from "react-icons/fa";
import "./SocialsWithVideo.css";

export default function SocialsWithVideo() {
  return (
    <div className="socials-wrapper">
      {/* LEFT SIDE */}
      <div className="socials-left">
        <p className="socials-heading1">more music in the making.</p>
        <p className="socials-heading2">
          follow on insta + spotify to stay in the loop or get in touch
        </p>

        <div className="social-links">
          {/* Instagram */}
          <a
            href="https://instagram.com/suvimariasings"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaInstagram className="social-icon" />
            <span>@suvimariasings</span>
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/3Un3Q6P74jfvpdUDT1eR3O"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaSpotify className="social-icon" />
            <span>suvimaria</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="socials-right">
        <div className="iframe-wrapper">
          <iframe
            src="https://www.instagram.com/reel/DP1RAf-CItr/embed"
            allow="encrypted-media"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
