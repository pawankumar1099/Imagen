
import { Route , Routes } from 'react-router-dom'
import BuyCredit from "./pages/BuyCredit"
import Result from "./pages/Result"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import AppContext from './contexts/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const {showLogin} = useContext(AppContext);
  return (
    <div className='min-h-screen'>
      <ToastContainer position='bottom-right' />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
