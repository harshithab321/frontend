import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app.css'
function Sidebar(){
return(
    <div  id="sidebar" style={{ width: '300px', marginLeft: '30px', border: '0.5px solid lightgray' }} className='d-flex flex-column mt-5'>
    <a href='/' className='bg-warning text-white d-flex align-items-center text-decoration-none'>
      <i style={{ marginLeft: '8px' }} className='fas fa-bars'></i>
      <span style={{ paddingLeft: '50px' }} className='ml-5 fs-4'>Sidebar</span>
    </a>
    <hr className='text-secondary my-2' />
    <ul className='nav nav-pills flex-column' style={{ marginLeft: '10px', padding: '30px', marginTop: '10px', lineHeight: '50px' }}>
      <li className='nav-item'>
        <div className='dropdown'>
          <a href='#' id='text'>
            Accessories
            <i style={{ marginLeft: '10px' }} className='fas fa-caret-right'></i>
          </a>
          <div className='dropdown-menu'>
            <div href='#'>Item 1</div>
            <div href='#'>Item 2</div>
            <div href='#'>Item 3</div>
          </div>
        </div>
      </li>
        <li className='nav-item'>
          <a href='#' >
          Hydraulic
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
           Lamp
           <i  style={{marginLeft:"170px"}} className="fas fa-caret-right"></i>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
            Cryotronics
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
           Indroduction
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
            Avionics
            <i  style={{marginLeft:"150px"}} className="fas fa-caret-right"></i>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
          Circuits
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
         Electornics
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' >
         HandWatch
          </a>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
)




}


export default Sidebar