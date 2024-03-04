import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
