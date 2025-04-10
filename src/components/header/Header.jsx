import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Início from '../../pages/início/Início'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import s from './header.module.scss'

function Header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
         <section className={s.logoHeader}>
            <img src={logoLivro} alt=""/>
            <h1>Livros Vai na Web</h1>
         </section>
         <nav className={s.navHeader}>
            <ul>
                <li><Link className={s.link} to='/'>Início</Link></li>
                <li><Link className={s.link} to='/livros-doados'>Doados</Link></li>
                <li><Link className={s.link} to='/quero-doar'>Quero Doar</Link></li>
            </ul>
         </nav>
         <section className={s.barraDeBusca}>
            <input type="search" name="" id="" placeholder='O que você procura?'/>
            <button><img src={lupa} alt="Imagem de lupa branca"/>
            </button>
         </section>
    </header>
        <Routes>
            <Route path='/' element={<Início/>} />
            <Route path='/livros-doados' element={<LivrosDoados/>}/>
            <Route path='/quero-doar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>

    )

}

export default Header