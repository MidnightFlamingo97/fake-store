import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Details from './Pages/Details/Details';
import Checkout from './Pages/Checkout/Checkout';
import CartContextProvider from './Contexts/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/contact-us' element={<ContactUs />}></Route>
          <Route exact path='/details/:productId' element={<Details />}></Route>
          <Route exact path='/checkout' element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
