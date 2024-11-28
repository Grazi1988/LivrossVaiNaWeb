import Circulo from "../../assets/circulo.png"
import LendoLivro from "../../assets/lendo.png"
import Transform from "../../assets/transform.png"
import Balança from "../../assets/balança.png"
import s from "./início.module.scss"

function Início() {
  return (
    <main>
      <section className={s.sectionInício}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={s.sectionSegundo}>
        <h2>Por que devo doar?</h2>

        <section className={s.cardsMotivos}>
          <section>
            <img src={Circulo} alt="Imagem ilustrando círculo social com quatro pessoas" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>

          <section>
            <img src={LendoLivro} alt="Imagem ilustrando uma pessoa lendo um livro" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>

          <section>
            <img src={Transform} alt="Imagem ilustrando seis pessoas" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>

          <section>
            <img src={Balança} alt="Imagem ilustrando balança" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </section>
      </section>
    </main>
  )
}

export default Início
