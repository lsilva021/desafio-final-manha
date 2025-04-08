import LivroSimples from "../../assets/vetor-livro-simples.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar(){

    // Criando os 4 estados que guardarão as informações preenchidas no formulário
    // armazena     atualiza
    const [titulo, setTitulo] = useState ("")
    const [categoria,setCategoria] = useState ("")
    const [autor,setAutor] = useState ("")
    const [image_url, setImage_url] = useState ("")

    // o paramentro (e) recebe o input, e dentro do nosso input o alvo (target) é o valor (value) que está sendo digitado
    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturarCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturarAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturarImagem = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async()=>{

        // criando um objeto (no python = dicionario. no js = objeto)
        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        // esperando o axios postar, no endpoint da nossa api, os dados preenchidos
        await axios.post("https://api-livros-ks8u.onrender.com/doar", dadosAEnviar)

    }

    return(

        <main className={s.principal}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className={s.cadastro}>
                <section className={s.tituloForm}>
                    <img src={LivroSimples} alt="Imagem de um livro simples com fundo branco e bordas azuis" />
                    <h2>Informações do Livro</h2>
                </section>

                {/* o evento onSubmit significa 'ao enviar' */}
                {/* o preventDefault impede a página de recarregar ao clicar em algum botão dentro do formulário */}
                <form className={s.formulario} onSubmit={(e)=>e.preventDefault()}>
                    {/* a cada mudança no input, o onchange chama a função designada. */}
                    <input type="text" placeholder="Título" onChange={capturarTitulo} required/> 
                    <input type="text" placeholder="Categoria" onChange={capturarCategoria} required/>
                    <input type="text" placeholder="Autor" onChange={capturarAutor} required/>
                    <input type="url" placeholder="Link da imagem" onChange={capturarImagem} required/>
                    <button onClick={enviarDados}>Doar</button>
                </form>
            </section>
        </main>
    )
}