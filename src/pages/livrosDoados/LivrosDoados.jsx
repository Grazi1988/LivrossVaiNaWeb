import LivroProtagonista from "../../assets/doado.png"

import s from "./livrosDoados.module.scss"

function LivrosDoados() {
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

export default LivrosDoados;
