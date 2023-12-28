import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Card ,Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export function Products() {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '100px' }}>Top Products</h2>
      <Carousel responsive={responsive}>
        {users.map(user => (
          <div key={user._id}>
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
                          <FaStarHalfAlt  style={{ color: 'lightgray' }} />
                        ) : (
                          <FaRegStar    style={{ color: 'gold' }} />
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

     
  const [users, setUsers] = useState([]);


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
<h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '100px' }}>Latest Products</h2>
<Container  expand="lg" fluid  varient="bg-dark"  style={{width:"100%",height:"500px",background:"lightgray"}}>
  <Row>
    <Col xs={9}>
    <h2 style={{ textAlign: 'start', marginBottom: '20px', marginTop: '100px' }}>Top Products</h2>
      <Carousel
        responsive={responsive}
        customTransition="transform 600ms ease-in-out"
        customButtonGroup={<CustomButtonGroup />}
        showDots={false}
      >
        {users.map((user, index) => (
          <div key={user._id}>
            <Card style={{ width: "400px", marginTop: '0px', marginLeft: '0px',height: '100px', marginRight: '20px', border: 'none' }}>
              <Card.Img variant="top" style={{ width: '400px', height: '50px' }} src={user.images[0]} />
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
                <Card.Title  style={{marginTop:"-9px"}}>{user.prodname}</Card.Title>
                <Card.Text    style={{marginTop:"-10px"}}>{user.price}</Card.Text>
              </Card.Body>
            </Card>

            {/* Display products in the second row */}
            {index + 1 < users.length && (
              <Card style={{ width: '400px', marginTop: '20px', marginLeft: '40px', height: '100px',marginRight: '20px', border: 'none' }}>
                <Card.Img variant="top" style={{ width: '400px', height: '50px' }} src={users[index + 1].images[0]} />
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
                  <Card.Title  style={{marginTop:"-9px"}}>{users[index + 1].prodname}</Card.Title>
                  <Card.Text    style={{marginTop:"-10px"}}>{users[index + 1].price}</Card.Text>
                </Card.Body>
              </Card>
            )}
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


