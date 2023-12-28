import React from 'react'
import {Nav1,NavBar,Component,Navbar3} from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from './components/whishlist';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import Sidebar from './components/sidebar'
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

import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
return(
    <>
    <Router>
        <Nav1 />
        <NavBar />
        <Component/>
        <Navbar3/>
        <Sidebar/>
      
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/prod" element={<Prod/>}/>

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