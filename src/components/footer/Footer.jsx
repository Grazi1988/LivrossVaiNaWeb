import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/Twitter.png"
import Youtube from "../../assets/youtube.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import s from "./footer.module.scss"

function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href=""><img src={Facebook}alt=""/></a>
          <a href=""><img src={Twitter} alt=""/></a>
          <a href=""><img src={Youtube}alt=""/></a>
          <a href=""><img src={Linkedin} alt=""/></a>
          <a href=""><img src={Instagram} alt=""/></a>
          </nav>
        </section>
        <section className={s.copyright}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
         </footer>
  )
}

export default Footer
