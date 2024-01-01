import React from 'react'
import {Nav1,NavBar,Component,Navbar3} from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from './components/whishlist';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Features from './components/Features';

import Acce from './components/Accessories';
import Avio from './components/avionics';
import Circ from './components/Circutes';
import Cyro from './components/Cryotronics';
import ELect from './components/Electronics';
import HandWatch from './components/Handwatch';
import Hydraulic from './components/Hydraulic';
import Induction from './components/induction';
import Lamp from './components/Lamp';
import Prod from './components/productsstore';
import Cart from './components/cart';
import Order from './components/buynow';
import News2 from './components/news2';
import News3 from './components/news3'
import DeletedOrder from './components/dletedorder'

import {Funlogin,FunRegistration} from './components/login';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/loginrouter';
import NewsDes from './components/newspage';
function App({productId,authenticate}){
return(
    <>
    <Router>
        <Nav1 />
        <NavBar />
        <Component/>
        <Navbar3/>
      
      
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/products/products/:productId"    element={<Prod    authenticate={authenticate} />}/>
          <Route path='/carts/' element={<Cart/>}/>
         <Route path='/api/login' element={<Funlogin/>}/>
         <Route path='/api/user/customertype'  element={<FunRegistration/>}/>
         <Route path='/products/products/:productId'   element={<Order />}/>
         <Route path='/news/:productId'       element={<  NewsDes />}/>
        <Route path='/news2' element={<News2/>}/>
<Route path='/news3' element={<News3/>}/>
<Route path='/deletedOrder/:id' element={< DeletedOrder/>}/>


          <Route path="/Accessories" element={<Acce/>}/>
          <Route path="/Hydraulic" element={<Hydraulic/>}/>
          <Route path="/Lamp" element={<Lamp/>}/>
          <Route path="/Cryotronics" element={<Cyro/>}/>
          <Route path="/induction" element={<induction/>}/>
          <Route path="/Avionics" element={<Avio/>}/>
          <Route path="/Circutes" element={<Circ/>}/>
          <Route path="/Electronics" element={<ELect/>}/>
          <Route path="/Handwatch" element={<HandWatch/>}/>
        </Routes>
      </Router>


    </>
)  
    
}
export default App