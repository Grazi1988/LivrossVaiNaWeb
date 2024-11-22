import Facebook from "../footer/imgs/facebook.png";
import Twitter from "../footer/imgs/Twitter.png";
import Youtube from "../footer/imgs/youtube.png";
import Linkedin from "../footer/imgs/linkedin.png";
import Instagram from "../footer/imgs/instagram.png";
import s from "./footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.RedesSociais}>
        <p>4002-8922</p>
        <ul className={s.ul}>
          <li>
            <a href="">
              <img src={Facebook} alt="Logo do facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Twitter} alt="Logo do twitter" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Youtube} alt="Logo do youtube" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Linkedin} alt="Logo do linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Instagram} alt="Logo do instagram" />
            </a>
          </li>
        </ul>
      </section>

      <section className={s.final}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}

export default Footer;
