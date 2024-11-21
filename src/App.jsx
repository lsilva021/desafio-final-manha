import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Header from './components/header/Header'
import Inicio from './pages/inicio/Inicio'
import Footer from './components/footer/Footer'
import "./globalStyle/globalStyle.scss"

export default function App(){
  return(
    <section>
      <Header/>
      <Footer/>
    </section>
  )
}