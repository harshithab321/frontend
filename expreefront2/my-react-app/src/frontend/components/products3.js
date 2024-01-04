import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Navbar,Container,Nav,Row,Col,Form,Alert, Button} from "react-bootstrap"
import Multinew from './news';



export function Products3() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Use the useHistory hook
  
    useEffect(() => {
      axios.get('http://localhost:9000/products/products')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);
  
    const responsive = {
      superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
  
    const handleItemClick = (productId) => {
      // Navigate to the route for the clicked product
      navigate(`/products/products/${productId}`);
    };
  
  
  
  
    return (
      <>

    <Container fluid style={{marginTop:"60px",width:"100%",height:"400px"}} >

    <Row >
     <Col   xs={12} md={1} style={{marginTop:"90px"}}>
  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6jYTiGygKqLef3s6KCACNwfCLJ7sPx2wXA&usqp=CAU" alt=""/>


     </Col>
     <Col xs={12} md={9} style={{marginLeft:"150px",marginTop:"-90px"}}>


     <h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '100px' }}>Top Products</h2>
  
  <Carousel   responsive={responsive}>
    {users.map((user) => (
      <div key={user._id} onClick={() => handleItemClick(user._id)}>
        <Card style={{ width: '18rem', marginTop: '0px', marginLeft: '0px', marginRight: '80px', border: 'none' }}>
          {/* Assuming the user has an 'images' array with a single URL */}
          <Card.Img variant="top" style={{ width: '200px', height: '170px' }} src={user.images[0]} />
          <Card.Body>
            <div>
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span key={index}>
                    {user.rating >= starValue ? (
                      <FaStar />
                    ) : user.rating >= starValue - 0.5 ? (
                      <FaStarHalfAlt style={{ color: 'lightgray' }} />
                    ) : (
                      <FaRegStar style={{ color: 'gold' }} />
                    )}
                  </span>
                );
              })}
            </div>
            <Card.Title>{user.prodname}</Card.Title>
            <Card.Text>{user.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ))}
  </Carousel>

  

     </Col>
   </Row>

   <Container fluid className='' style={{marginLeft:"130px"}}>
      <Row  style={{marginTop:"50px",marginLeft:"20px"}}>
       
        <Col xs={12} md={12}>
       <Card   style={{width:"1200px",height:"200px",background:"lightgray",border:"none"}}>
        <Row>
        <Card.Body>
       
        <Card.Text style={{margin:"40px 30px "}}>
        <h5>New Smart WatchGET </h5>  
        <div>UP TO 50% OFF </div>
       
        <p class="linker"> Shop now <i style={{marginLeft:"2px"}} class="fa-solid fa-arrow-right"></i></p>
        </Card.Text>
        
      </Card.Body>
      <Col>
      <Col    style={{marginLeft:"800px",marginRight:"90px" ,marginTop:"-170px"}}>
            <Card.Img  style={{width:"300px",height:"100px"}}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1lLaWpGD8cmrHg9-PjsjYDLSasOH6_WVCA&usqp=CAU" />
      </Col>
     </Col>
    </Row>
    </Card>
    </Col>

   
      
      </Row>
    </Container>
    <Row className='mt-5'>
        <Col xs={12} md={2}>
        <h4>Deal Of The Day</h4>
        </Col>
        <Col xs={12} md={10}>
        <hr/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col xs={12} md={2}>
        <h4>Latest News</h4>
        </Col>
        <Col xs={12} md={10}>
        <hr/>
        </Col>
    </Row>
 
  <Multinew/>




















        </Container>
      </>
    );
  }
  
  