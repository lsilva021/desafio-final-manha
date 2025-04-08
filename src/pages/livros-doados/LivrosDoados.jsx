import Livro from "../../assets/livro-Oprotagonista.png"
import s from "./livrosDoados.module.scss"
import { useState, useEffect } from "react"
import axios from "axios"

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    // Funçao assincrona = comunicação 
    const getLivros = async()=>{
        const resposta = await axios.get("https://api-livros-ks8u.onrender.com/livros")
        setLivros(resposta.data)
    }
    
    // o useEffect está protegendo a funçao getLivros pra nao executá-la várias vezes e evitar de consumir toda a memória RAM.
    useEffect(()=>{
        getLivros()
    },[])

    return(
        <main className={s.doados}>
            <h2>Livros Doados</h2>
            <section className={s.livrosDoados}>
                {
                    livros.map((item)=>(
                        <section className={s.card}>
                            <img src={item.image_url} alt={`Titulo do livro ${item.titulo}`}/>
                            <h3>{item.titulo}</h3>
                            <p>{item.autor}</p>
                            <p>{item.categoria}</p>
                        </section>
                    ))
                }
            </section>
        </main>
    )
}