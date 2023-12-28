import "../app.css"
import  React, {useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free'
import { Navbar,Container,Nav,Row,Col,Form,Alert, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'; // Import Link for navigation if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import NavDropdown from 'react-bootstrap/NavDropdown';
function Nav1()  {
 
 

  

    return (
      <>
      <Container fluid class="container" >
        <Navbar id="navbar"  fluid expand="lg" className="d-flex justify-content-between">
                <Container id="conatiner2"  >
                    <a href="index.html">
                      <img src="https://www.webibazaar.com/image/catalog/webi-logo.png" alt="webibazar" />
                    </a>
                    <Navbar.Brand id="heading" href="#home">Shopeur Electronics WooCommerce Theme</Navbar.Brand>
                 </Container>
                 <Container  id="navitems" aria-controls="basic-navbar-nav">
                 
                        <Nav className="d-flex  justify-content-between">
                          <Nav.Item >
                            <Nav.Link href="#home">
                            <img  id="images" src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="webibazar" />
                                    <span>mobile</span>

                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                      <Nav.Link href="#link">

                    
                                <img  id="images" src="https://iconape.com/wp-content/png_logo_vector/laptop.png" alt="image"/>
                                <span>mobile</span>

                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#about">

                            <img id="images" src="https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-mobile-tablet-mockup-transparent-png-png-image_5977370.png" alt="webibazar" />
                            <span>mobile</span>

                  </Nav.Link>
                </Nav.Item>
                </Nav>
                <Button id="button" onClick={() => alert('Button clicked')}>
                  Buy now
                </Button>
             

         </Container>
          </Navbar>
        
        </Container>
      </>
    );
  }


  const NavBar = () => {
    return (
      <Navbar className="navbar2" expand="lg">
        <Container>
        <Navbar.Brand className="fs-6">Extra 30% Off On Selected Itmes</Navbar.Brand> 
        
        <FontAwesomeIcon icon={faEnvelope} />
         <Navbar.Brand className="fs-6">company@example.com</Navbar.Brand> 
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto " >
            <Nav.Link   className="mt-2" as={Link} to="/wishlist">Wishlist</Nav.Link>
            <div  id="line" ></div>
            <div>
            <div style={{ display: 'block', width: 100, padding: 20 }}> 
                   
                    <OverlayTrigger 
                  
                    overlay={(props) => ( 
                    <Tooltip {...props}> 
                        GRP 
                    </Tooltip> 
                    )} 
                    placement="bottom"
                ><div  className="arrow-down" variant="warning">USD</div> 
                
                </OverlayTrigger>
                </div>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    );
  };


function Component({ orderNumber }){
 
  const [state, setState] = useState(90);

  const handleChange = (event) => {
    setState(event.target.value);
  }   
 
return(
  <div style={{ display: 'flex', alignItems: 'start', margin: '20px' }}>
  <Container>
    <img
      className="ml-5"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpjnrEfF6rpPRb0rtDUEMK6lmrGeF3MqJ52DiQUIesg&s"
      style={{ height: '50px' }}
      alt="bag"
    />
    <span className="fs-3">SHOPEUR</span>
  </Container>

  <Container style={{ display: 'flex', alignItems: 'center' }}>
  
  <div   className="select">
  <select style={{height:"57px",width:"180px",borderRadius:"0px",border:"1px solid gray"}} onChange={handleChange} value={state}
 
   title="Select a city">
=
   
      <option  style={{scrollbarWidth:"auto"}} value={90}>Jaipur</option>
      <option value={80}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={80}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={80}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={80}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={80}>Jaipur</option>
      <option value={78}>Jaipur</option>
      <option value={70}>Jaipur</option>
      <option value={80}>Jaipur</option>
  
     
    </select>
      
    </div>
       <TextField
          label="Search"
          
          style={{ marginRight: '-10px', width: '500px',borderRadius:"0px" }}
        />
        <InputAdornment position="end">
          <IconButton
            aria-label="search"
            style={{
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '0px',
              width: '120px',
              height: '54px',
            }}
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      </Container>

      <Container  className="d-flex ">
        <div style={{width:"50px",height:"50px" ,background:"lightgray",borderRadius:"3px"}}>
        <i style={{padding:"15px"}} class="fa-regular fa-user"></i>       </div>
        <div className="mt-3" style={{lineHeight:"2px"}}>
        <p>My Account</p>
        <p>Sign in</p>
        </div>
      
        <div style={{width:"50px",height:"50px" ,background:"lightgray",borderRadius:"3px",}}>
        <i  style={{padding:"15px",position: "relative"}} className="fas fa-shopping-cart"></i>
        {orderNumber > 0 && (
          <span
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              background: "red",
              borderRadius: "50%",
              padding: "5px",
              fontSize: "12px",
              color: "white",
            }}
          >
            {orderNumber}
          </span>
        )}
        </div>
        <div className="mt-3" style={{lineHeight:"2px"}}>
        <p>My cart</p>
        <p>$ 00.00</p>
        </div>
      </Container>

</div>
);
  
}



function Navbar3(){


  return(
    <Navbar style={{height:"40px"}}variant="dark" bg="primary" expand="lg" id="nav" className="d-flex ml-5 pl-5 justify-Content-between">
    <Container fluid>
    
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
        <Navbar.Brand><Nav.Link  style={{color:"white"}} id="home" className="mt-2 " as={Link} to="/Home"><span>Home</span>
         </Nav.Link>
  </Navbar.Brand>


     

     <Navbar.Brand><Nav.Link style={{color:"white"}} id="shop" className="mt-2" as={Link} to="/Shop"><span>Shop</span>
 </Nav.Link>
     </Navbar.Brand>
     <Navbar.Brand> <Nav.Link style={{color:"white"}}  id="blog" className="mt-2" as={Link} to="/Blog"><span>Blog</span><i class="fa-solid fa-caret-down"></i>
     
     <div className="dropdown-menu">
          
          <div href="#">Item 1</div>
          <div href="#">Item 2</div>
          <div href="#">Item 3</div>
        </div>
     
     
     
     </Nav.Link>
     </Navbar.Brand>
     <Navbar.Brand>   <Nav.Link style={{color:"white"}} id="pages" className="mt-2" as={Link} to="/Contact Us"><span>Pages</span><i class="fa-solid fa-caret-down"></i>
     
     <div className="dropdown-menu">
          
          <div href="#">Item 1</div>
          <div href="#">Item 2</div>
          <div href="#">Item 3</div>
        </div>
     
     
     
     </Nav.Link>

     </Navbar.Brand>
     <Navbar.Brand>  <Nav.Link  style={{color:"white"}} id="ContactUs" className="mt-2" as={Link} to="/Features"><span>ContactUs</span></Nav.Link>
     </Navbar.Brand>
     <Navbar.Brand>  <Nav.Link  style={{color:"white"}} id="features" className="mt-2" as={Link} to="/Features"><span>Features</span></Nav.Link>
     </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Container>
     <Container className="d-flex justify-content-end">
     <i class="fa-solid fa-percent"><span style={{color:"white",marginLeft:"10px"}}>discount!</span></i>
 
    </Container>
  </Navbar>
  )


}
  
export{Nav1,NavBar,Component,Navbar3} 
