import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaStarHalfAlt, FaRegStar,faBadge } from 'react-icons/fa';
import { Navbar,Container,Nav,Row,Col,Form,Alert, Badge,Button} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export function Products() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Use the useHistory hook

  useEffect(() => {
    axios.get('http://localhost:9000/products/products')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleItemClick = (productId) => {
    // Navigate to the route for the clicked product
    navigate(`/products/products/${productId}`);
    console.log(productId)

  };
 


  return (
    <>
      <h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '100px' }}>Top Products</h2>

      <Carousel responsive={responsive}>

        {users.map((user) => (

          <div key={user._id} onClick={() => handleItemClick(user._id)}>
            <Card style={{ width: '18rem', marginTop: '0px', marginLeft: '0px', marginRight: '80px', border: 'none' }}>
              {/* Assuming the user has an 'images' array with a single URL */}
              <span className="badge">New</span>
              <Badge  style={{width:"20px", height:"20px" ,marginLeft:"200px"}} variant="success"> 
                     -8 
         </Badge>

              <Card.Img variant="top" target="_blank" style={{ width: '200px', height: '170px' }} src={user.images[0]} />
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
    </>
  );
}





export function Product2(){

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const handleItemClick = (productId) => {
    // Navigate to the route for the clicked product
    navigate(`/products/products/${productId}`);
  };


  const CustomButtonGroup = ({ next, previous }) => (
    <div>
      <button onClick={() => previous()}>&lt;&lt;</button>
      <button onClick={() => next()}>&gt;&gt;</button>
    </div>
  );
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

 return(
<>

<Container  expand="lg" fluid  varient="bg-dark"  style={{width:"100%",height:"700px",background:"lightgray"}}>
  <Row>
    <Col xs={9}>
    <h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '50px' }}>Top Products</h2>
      <Carousel
        responsive={responsive}
        customTransition="transform 600ms ease-in-out"
        customButtonGroup={<CustomButtonGroup />}
        showDots={false}
      >
        {users.map((user, index) => (


       <div  onClick={() => handleItemClick(user._id)}>

          <div key={user._id}>
            <Card style={{ width: "400px", marginTop: '0px', marginLeft: '0px',height: '200px', marginRight: '20px', border: 'none' }}>
              <Card.Img  target="_blank" variant="top" style={{ width: '200px', height: '50px' ,marginTop:"20px"}} src={user.images[0]} />
              <Card.Body>
                <div>
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <span key={i}>
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
                <Card.Title  style={{marginTop:"9px"}}>{user.prodname}</Card.Title>
                <Card.Text    style={{marginTop:"10px"}}>{user.price}</Card.Text>
              </Card.Body>
            </Card>

            {/* Display products in the second row */}
            {index + 1 < users.length && (
              <Card style={{ width: '400px', marginTop: '20px', marginLeft: '40px', height: '200px',marginRight: '20px', border: 'none' }}>
                <Card.Img   target="_blank"  variant="top" style={{ width: '200px', height: '50px',marginTop:"20px" }} src={users[index + 1].images[0]} />
                <Card.Body>
                  <div  style={{marginTop:"-20px"}}>
                    {[...Array(5)].map((_, i) => {
                      const starValue = i + 1;
                      return (
                        <span key={i}>
                          {users[index + 1].rating >= starValue ? (
                            <FaStar />
                          ) : users[index + 1].rating >= starValue - 0.5 ? (
                            <FaStarHalfAlt style={{ color: 'lightgray' }} />
                          ) : (
                            <FaRegStar style={{ color: 'gold' }} />
                          )}
                        </span>
                      );
                    })}
                  </div>
                  <Card.Title  style={{marginTop:"9px"}}>{users[index + 1].prodname}</Card.Title>
                  <Card.Text    style={{marginTop:"10px"}}>{users[index + 1].price}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
          </div>
        ))}
      </Carousel>


    </Col>
    <Col>
    <img   style={{width:"300px" ,height:"400px",marginLeft:"1100px",marginTop:"-300px"}} src="https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-22.png" alt="" />
    
    </Col>
  </Row>

</Container>

</>
 )
}


