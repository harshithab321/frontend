import react from "react"
import { Component } from "./navbar"
import { Navbar,Container,Nav,Row,Col,Form,Alert, Button} from "react-bootstrap"
import '@fortawesome/fontawesome-free/css/all.min.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";
function Footer(){


return(
  <>
  <Container fluid>
<div  style={{position:"relative",marginTop:"900px" }}>
  
<div  style={{background:"lightgray",width:"100%",height:"800px",marginTop:"300px",position:"relative" }}>
  
    <Navbar bg="primary" data-bs-theme="dark" style={{marginTop:"100px",width:"1200px", position:'absolute',marginLeft:"30px" ,padding:"20px"}}>
        <Container>
        
          <Nav className="ml-0">
          <Nav.Link href="#home">
          <div style={{ background: "white", width: "40px", height: "40px", borderRadius: "3px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "black" }} className="fab fa-facebook"></i>
          </div>
         
            </Nav.Link>
           
            <Nav.Link href="#home">  <div style={{ background: "white", width: "40px", height: "40px", borderRadius: "3px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "black" }} className="fab fa-twitter"></i>
          </div></Nav.Link>


            <Nav.Link href="#features"> <div style={{ background: "white", width: "40px", height: "40px", borderRadius: "3px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "black" }} className="fab fa-wifi"></i>
          </div></Nav.Link>


            <Nav.Link href="#pricing">  <div style={{ background: "white", width: "40px", height: "40px", borderRadius: "3px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "black" }} className="fab fa-youtube"></i>
          </div>
          </Nav.Link>

          
          <Nav.Link href="#pricing">  <div style={{ background: "white", width: "40px", height: "40px", borderRadius: "3px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "black" }} className="fab fa-instagram"></i>
          </div>
          </Nav.Link>

          <h6  className="mt-3 " style={{marginLeft:"150px" ,marginRight:"2px" ,color:"white"}}>SIGN UP FOR NEWS LETTER</h6>
         
          <TextField
          label="Search"
          
          style={{ marginRight: '-10px', width: '500px',borderRadius:"none",background:"white" }}
        />
        <InputAdornment position="end">
          <IconButton
            aria-label="search"
            style={{
              backgroundColor: 'yellow',
              color: 'white',
              borderRadius: '0px',
              width: '120px',
              height: '54px',
              marginTop:"55px"
            }}
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
          </Nav>
        </Container>
      </Navbar>
      
      <Container  >
      <Row  style={{border:"1px solid grey", position:"absolute" ,marginTop:"250px",width:"1300px",marginLeft:"20px",border:"none"}}>
        <Col   xs={5}>
        <h4>Contact us</h4>
      
      {/* Phone icon */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i style={{ marginRight: '5px' }} className="fas fa-phone"></i>
        <span>Local Phone Number</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i style={{ marginRight: '5px' }} className="far fa-envelope"></i>
        <span>example@example.com</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i style={{ marginRight: '5px' }} className="fas fa-map-marker-alt"></i>
        <span>City, Country</span>
      </div>
        
        </Col>
        <Col>
        <h4>My Account</h4>
        <ul>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  to="/Orders">Orders</Link></li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  to="/My Account">My Account</Link></li>
          <li><Link   style={{ textDecoration: "none", color: "black" }} to="/Checout">Checout</Link></li>
          <li><Link   style={{ textDecoration: "none", color: "black" }} to="/Downdows">Downdows</Link></li>
          <li><Link   style={{ textDecoration: "none", color: "black" }} to="/Account details">Account details</Link> </li>
        </ul>
        
        </Col>
        <Col> <h4>Categories</h4>
        <ul>
          <li><Link  style={{ textDecoration: "none", color: "black" }} target="_self" to="/Hydraulic">Hydraulic</Link></li>
          <li><Link   style={{ textDecoration: "none", color: "black" }} target="_blank" to="/Lamp">Lamp</Link></li>
          <li><Link   style={{ textDecoration: "none", color: "black" }} target="_blank" to="/Checout">Checout</Link></li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}   target="_blank" to="/induction">induction</Link></li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  target="_blank"  to="/Avionics">Avionics</Link> </li>
        
        </ul>
        
        
        </Col>
        <Col> <h4>Information</h4>
        <ul>
          <li><Link   style={{ textDecoration: "none", color: "black" }} to="/About Us">About Us</Link></li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  to="/Delivery Information">Delivery Information</Link></li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  to="/Privacy Policy">Privacy Policy</Link> </li>
          <li><Link  style={{ textDecoration: "none", color: "black" }}  to="/Contact Us">Contact Us</Link> </li>
         
        </ul>
        </Col>
      </Row>
    </Container>

    <div  style={{listStyleType:"none"}}>
      <div style={{ marginTop: "600px", position: "absolute", marginLeft: "80px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }}     target="_self" to="/Avionics">Avionics</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link    style={{ textDecoration: "none", color: "black" }}   target="_self" to="/Lamp">Lamp</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self" to="/Avionics">Avionics</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self" to="/Electronics">Electronics</Link> </div>
      <div style={{ paddingRight: "10px", marginBottom: "10px" }}>Handwatch</div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self"  to="/Circuits">Circuits</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }}target="_self"  to="/Cryotronics">Cryotronics</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }}  target="_self"  to="/Hydraulic">Hydraulic</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self" to="/Accessories">Accessories</Link> </div>
      <div style={{ paddingRight: "10px", marginBottom: "10px" }}>Avionics</div>

      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link   style={{ textDecoration: "none", color: "black" }}target="_self" to="/Circuits">Circuits</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link   style={{ textDecoration: "none", color: "black" }}target="_self" to="/Cryotronics">Cryotronics</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link   style={{ textDecoration: "none", color: "black" }}  target="_self" to="/Hydraulic">Hydraulic</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link   style={{ textDecoration: "none", color: "black" }} target="_self" to="/Accessories">Accessories</Link> </div>
  
     
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self"  to="/Circuits">Circuits</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self" to="/Cryotronics">Cryotronics</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }} target="_self"  to="/Hydraulic">Hydraulic</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }}target="_self"  to="/Accessories">Accessories</Link> </div>
    <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link  style={{ textDecoration: "none", color: "black" }}target="_self"  to="/Avionics">Hydraulic</Link> </div>
      <div style={{ borderRight: "1px solid gray", paddingRight: "10px", marginBottom: "10px" }}><Link   style={{ textDecoration: "none", color: "black" }} target="_self" to="/Avionics">Accessories</Link> </div>

    </div>
    </div>
<div>
  <h6  style={{position:"absolute", marginTop:"700px",marginLeft:"550px"}}>
  Designed by Demo Theme All rights reserved.
  </h6>
</div>


</div>
</div>
</Container>


</>
  )
}

export default Footer


