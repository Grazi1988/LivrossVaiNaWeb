//import LivroProtagonista from "../../assets/doado.png"
import s from "./livrosDoados.module.scss"
import { useState, useEffect } from "react"
import axios from "axios"

function LivrosDoados() {
  const [livros, setLivros] = useState([])

  const getLivros = async () => {
    const resposta = await axios.get(
      "https://api-livros-wgwr.onrender.com/livros"
    )
    setLivros(resposta.data)
  }

  useEffect(() => {
    getLivros()
  }, [])

  return (

    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {livros.map((item) => (
          <section key={item.id}>
            <div>
              <img src={item.image_url} alt={item.titulo} />
              <h3>{item.titulo}</h3>
              <h4>{item.autor}</h4>
              <h5>{item.categoria}</h5>
            </div>
          </section>
        ))}
      </section>
    </section>
  )
}

export default LivrosDoados
