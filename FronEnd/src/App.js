// import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
  
  
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen  searchTerm={searchTerm} />} exact/>
        <Route path='/product/:id' element={<ProductScreen/>}exact/>
        <Route path='/cart/:id?' element={<CartScreen />}/>
        <Route path='/login' element={<LoginScreen/>} exact/>
        <Route path='/register' element={<RegisterScreen/>} exact/>
        <Route path='/profile' element={<ProfileScreen/>} exact/>
        <Route path='/shipping' element={<ShippingScreen/>} exact/>


        </Routes>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
