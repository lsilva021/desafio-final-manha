import Livro from "../../assets/livro-Oprotagonista.png"
import s from "./livrosDoados.module.scss"

export default function LivrosDoados(){
    return(
        <main className={s.doados}>
            <h2>Livros Doados</h2>
            <section className={s.livrosDoados}>
                <img src={Livro} alt="" />
                <section className={s.infoLivro}>
                    <p>O Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
            </section>
        </main>
    )
}