import LogoFacebook from "../../assets/logo-facebook-branco-redondo.png/"
import LogoTwitter from "../../assets/logo-twitter-branco.png/"
import LogoYoutube from "../../assets/logo-youtube-branco.png/"
import LogoLinkedin from "../../assets/logo-linkedin-branco-redondo.png/"
import LogoInstagram from "../../assets/logo-instagram-branco-vazado.png/"
import s from "./footer.module.scss"

export default function Footer(){
    return(
        <footer>
            <section className={s.rodape1}>
                <section className={s.contato}>
                    <p>(XX)XXXXX-XXXX</p>
                </section>
                <section className={s.redesSociais}>
                    <ul>
                        <li><a href="#"><img src={LogoFacebook} alt="Logo Facebook" /></a></li>
                        <li><a href="#"><img src={LogoTwitter} alt="Logo Twitter" /></a></li>
                        <li><a href="#"><img src={LogoYoutube} alt="Logo Youtube" /></a></li>
                        <li><a href="#"><img src={LogoLinkedin} alt="Logo LinkedIn" /></a></li>
                        <li><a href="#"><img src={LogoInstagram} alt="Logo Instagram" /></a></li>
                    </ul>
                </section>
            </section>
            <section className={s.rodape2}>
                <p>Layout desenvolvido pela <a href="https://vainaweb.com.br/" target="_blank">Vai Na Web</a> para fins educativos - 2024</p>
            </section>
        </footer>
    )
}