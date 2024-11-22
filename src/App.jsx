import Header from './components/header/Header.jsx'
import Início from './pages/início/Início.jsx'
import LivrosDoados from './pages/livrosDoados/livrosDoados.jsx'
import QueroDoar from './pages/queroDoar/queroDoar.jsx'
import Footer from './components/footer/Footer.jsx'


import './GlobalStyle/globalStyle.scss'

function App(){
  return(
    <section>
    <Header />
    <Início/>
    <LivrosDoados/>
    <QueroDoar/>
    <Footer />

  </section>
  )
}

export default App
