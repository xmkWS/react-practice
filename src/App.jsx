import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import ProductOnce from './components/ProductOnce/ProductOnce'
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/productOnce/:id" element={<ProductOnce/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
