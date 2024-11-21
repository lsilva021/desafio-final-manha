import LivroSimples from "../../assets/vetor-livro-simples.png"
import s from "./queroDoar.module.scss"

export default function QueroDoar(){
    return(
        <main className={s.principal}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className={s.cadastro}>
                <section className={s.tituloForm}>
                    <img src={LivroSimples} alt="Imagem de um livro simples com fundo branco e bordas azuis" />
                    <h2>Informações do Livro</h2>
                </section>
                <form action="" className={s.formulario}>
                    <input type="text" name="text" id="text" placeholder="Título"/>
                    <input type="text" name="" id="" placeholder="Categoria"/>
                    <input type="text" name="" id="" placeholder="Autor"/>
                    <input type="url" name="" id="" placeholder="Link da imagem"/>
                    <button>Doar</button>
                </form>
            </section>
        </main>
    )
}