import { useEffect } from "react";
import HeaderImage from "../header/rowland.jpeg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Rowland Wanderi</h3>
        <p data-aos="fade-up">

        Let's embark on a digital odyssey together, where innovation knows no bounds and where the possibilities are as limitless as the pixels on your screen. Welcome to the symphony of colors and codes that is my digital playground – where every byte is a brushstroke, and every website is a masterpiece in the making. 🚀🎉
        Ready to embark on this digital adventure? Buckle up; the journey is just beginning! 💼🌟
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;