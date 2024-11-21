import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivrosDoados from "../../pages/livros-doados/LivrosDoados";
import QueroDoar from "../../pages/quero-doar/QueroDoar";
import Inicio from "../../pages/inicio/Inicio";
import logoLivro from "../../assets/logoLivro.png"
import lupaHeader from "../../assets/lupaHeader.png"
import s from "./header.module.scss"

export default function Header(){
    return(
        <BrowserRouter>
            <header>
                <section className={s.logoPagina}>
                    <img src={logoLivro} alt="um livro aberto que representa o logo do página" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to="/">Início</Link></li>
                        <li><Link className={s.link} to="/LivrosDoados">Livros doados</Link></li>
                        <li><Link className={s.link} to="/QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraPesquisa}>
                    <input type="search" name="search" id="search" placeholder="O que você procura?" />
                    <button>
                        <img src={lupaHeader} alt="Imagem de uma lupa branca" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/LivrosDoados" element={<LivrosDoados/>}/>
                <Route path="/QueroDoar" element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

