import React, { useState,useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';
import { Button,Badge } from 'react-bootstrap';

function Sidebar(){


const navigate=useNavigate()
const [users,setUsers]=useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/products/products')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);


  const selectedItems = users.slice(0, 2);



 const[data,setusers]=useState([])

  const [state, setState] = useState(false);

  const handleDropdown = () => {
    setState(true);
  };
  
  const handleClose = () => {
    setState(false);
  };
  
  const handleDropdownLeave = () => {
    // Uncomment the following line if you want the dropdown to close when leaving the entire dropdown area
     setState(false);
  };
  const handleItemClick = () => {
    // You can add specific actions when an item is clicked
  };


const states=()=>{
  setState(users)

}


const handel=(productId)=>{
  navigate(`/products/products/${productId}`);

}


return(
   <div id="sidebar" style={{ width: '300px', marginLeft: '30px', border: '0.5px solid lightgray' }} className='d-flex flex-column mt-5'>
    <a href='/' className='bg-warning text-white d-flex align-items-center text-decoration-none' onMouseLeave={handleDropdownLeave}>
      <i style={{ marginLeft: '8px' }} className='fas fa-bars'></i>
      <span style={{ paddingLeft: '50px' }} className='ml-5 fs-4'>Sidebar</span>
    </a>
    <hr className='text-secondary my-2' />

    <ul className='flex-column' style={{ marginLeft: '10px', padding: '30px', marginTop: '10px', lineHeight: '50px' }}>
      <li className='navitems'>
        <div>
          <a
            onMouseOver={handleDropdown}
            href='#' id='text'>
            Accessories
            <i style={{ marginLeft: '10px' }} className='fas fa-caret-right'></i>
            {state && (
              <div className="dropsitems"  onMouseLeave={handleDropdownLeave}  onMouseOver={handleDropdown}>

                <div   onClick={handleItemClick} href='#'>
                    <p>Top Rated</p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black" ,marginTop:"50px" }}  to="/Circutes">Circuits</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/avionics">avionics</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Hydraulic">Hydraulic</Link> </p>
                    <p ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Electornics">Electornics</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Lamp">Lamp</Link> </p>
                  
                  </div>
                <div onClick={handleItemClick} href='#'>


                <p  ><Link  style={{ textDecoration: "none", color: "black" ,marginTop:"50px" }}  to="/Circutes">Circuits</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/avionics">avionics</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Hydraulic">Hydraulic</Link> </p>
                    <p ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Electornics">Electornics</Link> </p>
                    <p  ><Link  style={{ textDecoration: "none", color: "black",marginTop:"5px" }}  to="/Lamp">Lamp</Link> </p>
                  


                </div>
                <div onClick={handleItemClick} href='#'>

               {selectedItems.map((items)=>(
                <>
                   
              
           
        <img   onClick={()=>handel(items._id)} className='images ' src={items.images[0]} alt=""/> 
      
        <FontAwesomeIcon icon={faStar} />
       <p>{selectedItems.prodname}</p>
        <p key={selectedItems._id}>{items.price} </p>   
        </>           
               ))}


                </div>
              </div>
            )}
          </a>
        </div>
      </li>

     

        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Hydraulic">Hydraulic</Link>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Lamp">Lamp</Link>
       
           <i  style={{marginLeft:"170px"}} className="fas fa-caret-right"></i>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Cryotronics">Cryotronics</Link>
         
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Indroduction">Indroduction</Link>
        
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Avionics">Avionics</Link>
         
            <i  style={{marginLeft:"150px"}} className="fas fa-caret-right"></i>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Circuits">Circuits</Link>
        
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/Electornics">Electornics</Link>
        
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          <Link   style={{ textDecoration: "none", color: "black" }} to="/HandWatch">HandWatch</Link>
         HandWatch
          </a>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
)




}


export default Sidebar