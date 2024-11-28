import Doação from '../../assets/doado.png'

import s from './livrosDoados.module.scss'

function LivrosDoados() {
  return (
    <section className={s.livroDoadosSection}>
        <h3>Livros Doados</h3>

        <section className={s.doandoLivros}>
        <img src={Doação} alt="Imagem de um livro com a capa vermelha" />
        <p>O protagonista</p>
        <p>Susanne Andrade</p>
        <p>Ficção</p>
        </section>
    </section>
  )
}

export default LivrosDoados