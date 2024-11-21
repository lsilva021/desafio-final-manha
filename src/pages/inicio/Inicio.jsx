import ImagemFundo from "../../assets/imagem-fundo-hero.png"
import PDD1 from "../../assets/pdd-1.png"
import PDD2 from "../../assets/pdd-2.png"
import PDD3 from "../../assets/pdd-3.png"
import PDD4 from "../../assets/pdd-4.png"
import s from "./inicio.module.scss"

export default function Inicio(){
    return(
        <main className={s.mainInicio}>
            <section className={s.hero}>
                <h2>Venha fazer parte da maior rede de doação</h2>
            </section>
            <section className={s.porqueDoar}>
                <h2>Por que devo doar?</h2>
                <ul>
                    <li>
                        <img src={PDD1} alt="" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </li>
                    <li>
                        <img src={PDD2} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </li>
                    <li>
                        <img src={PDD3} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </li>
                    <li>
                        <img src={PDD4} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}