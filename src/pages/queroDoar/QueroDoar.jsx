import iconeLivro from "../../assets/iconeLivro.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from 'axios'

function QueroDoar() {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [image_url, setImage_url] = useState("")

  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }

  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }

  const capturaImagem = (e) => {
    setImage_url(e.target.value)
  }

  const enviarDados = async () => {

    const dadosAEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    }
      console.log(dadosAEnviar)

    await axios.post("https://desafio-livros-api.onrender.com/doar",dadosAEnviar)
      alert("Parabéns, seu livro foi cadastrado com sucesso!🎉🎉")
  }

  return (
    <section className={s.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
          <img src={iconeLivro} alt="Imagem de icone de um livro aberto" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder="Título" onChange={capturaTitulo} required />
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} required />
        <input type="text" placeholder="Autor" onChange={capturaAutor} required />
        <input type="url" placeholder="Link da Imagem" onChange={capturaImagem} required />
        <input type="submit" value="Doar" className={s.buttonDoar}onClick={enviarDados} />
      </form>
    </section>
  )
}

export default QueroDoar
