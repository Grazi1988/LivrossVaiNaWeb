import LivroProtagonista from "../../assets/doado.png"
import s from "./livrosDoados.module.scss"
import { useState, useEffect } from "react"
import axios from 'axios'

function LivrosDoados() {

  const [livros,setLivros] = useState ([])
  
  const getLivros = async()=>{
    const resposta = await axios.get("https://desafio-livros-api.onrender.com/livros")
    setLivros(resposta.data.livros)
    
  } 
  
  useEffect(()=>{
      getLivros()
  },[])


  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>

      <section className={s.doandoLivros}>
        <section>
          <img src={LivroProtagonista} alt="Imagem de um livro com a capa vermelha"/>
          <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  )
}

export default LivrosDoados
