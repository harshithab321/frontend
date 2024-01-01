import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './bottom'
function News3() {
  const [posts, setPost] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:9000/products/productsnews')
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredPosts = posts.filter((post) => post._id === productId);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <div>
     <Row>
     <Col  md={3}>
     

     <div className="search-container "  >
        <form action="/action_page.php">
          <input
            className="p-1 mt-3"
            style={{ border: '2px solid black' }}
            type="text"
            placeholder="Search.."
            name="search"
            id="search"
          />
          <button className="bg-dark" type="submit" style={{ height: '40px' }}>
            <FontAwesomeIcon className="p-1 " style={{ color: 'white', width: '50px' }} icon={faSearch} />
          </button>
        </form>
      </div>
      <Carousel responsive={responsive} className="d-flex justify-content-between" arrows>
        <Container>
          <Row>
            <Col >
              <div style={{ marginTop: '50px', border: 'none' }}>
                <div className="card" style={{ width: '400px', height: '30px', border: 'none' }}>
                  <Col>
                    <img
                      style={{ width: '70px', height: '70px' }}
                      src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D%3D"
                      className="card-img-top"
                      alt="..."
                    />
                      <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginTop: '-900px' }}
                        to="/news/:productId"
                      >
                        Lorem Ipsum ..
                      </Link>
                  </Col>
                  <div className="card-body">
                    <Col>
                    
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '50px', border: 'none' }}>
                <div className="card" style={{ width: '400px', height: '100px', border: 'none' }}>
                  <Col>
                    <img
                      style={{ width: '70px', height: '70px' }}
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                      className="card-img-top"
                      alt="..."
                    />
                     <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginTop: '-900px' }}
                        to="/news/:productId"
                      >
                        Lorem Ipsum ..
                      </Link>
                  </Col>
                  <div className="card-body">
                    <Col>
                      <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginLeft: '70px',marginTop:"-90px" }}
                        to="/Accessories"
                      >
                      </Link>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>


            <Col>
              <div style={{ marginTop: '0px', border: 'none' }}>
                <div className="card" style={{ width: '400px', height: '100px', border: 'none' }}>
                  <Col>
                    <img
                      style={{ width: '70px', height: '70px' }}
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                      className="card-img-top"
                      alt="..."
                    />
                     <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginTop: '-900px' }}
                        to="/news/:productId"
                      >
                        Lorem Ipsum ..
                      </Link>
                  </Col>
                  <div className="card-body">
                    <Col>
                      <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginLeft: '70px',marginTop:"-90px" }}
                        to="/Accessories"
                      >
                      
                      </Link>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>


            <Col>
              <div style={{ marginTop: '0px', border: 'none' }}>
                <div className="card" style={{ width: '400px', height: '100px', border: 'none' }}>
                  <Col>
                    <img
                      style={{ width: '70px', height: '70px' }}
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                      className="card-img-top"
                      alt="..."
                    />
                     <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginTop: '-900px' }}
                        to="/Accessories"
                      >
                        Lorem Ipsum ..
                      </Link>
                  </Col>
                  <div className="card-body">
                    <Col>
                      <Link
                        style={{ color: 'black', textDecoration: 'none', background: 'white', marginLeft: '70px',marginTop:"-90px" }}
                        to="/Accessories"
                      >
                      
                      </Link>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel>

      

<div>
<label for="customRange1" class="form-label">filter range</label>
<input type="range" class="form-range" id="customRange1"/>

<label for="customRange1" class="form-label">price:</label>
<Button  variant='info'>price</Button>
<label for="customRange1" class="form-label">2000</label>

<hr/>

</div>

<div>
  <h5> filter by color</h5>
  <hr/>
<ul>
  <li>
black
  </li>
  <li>
    blue
  </li>
  <li>
    pink
  </li>
</ul>

</div>



<div>
  <h5> filter by size</h5>
  <hr/>
<ul>
  <li>
large
  </li>
  <li>
    medium
  </li>
  <li>
    small
  </li>
</ul>

</div>

<div className='d-flex flex-wrap ml-4 mt-4'>
      <h5 className='mb-5'>Product Tags</h5>
      <hr />
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/Accessories'>Accessories</Link>
      </Button>
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/Hydraulic'>Hydraulic</Link>
      </Button>
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/Cryotronics'>Cryotronics</Link>
      </Button>
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/induction'>Induction</Link>
      </Button>
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/Circuits'>Circuits</Link>
      </Button>
      <Button variant='dark' className='mr-2 mb-2'>
        <Link to='/Electronics'>Electronics</Link>
      </Button>
    </div>
     
     
     
     </Col>
    
    <Col  md={7}>
    
    <img style={{margin:"80px  -200px",zIndex:"1", width: '800px', height: '500px' }}
                      src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D%3D"
                      className="card-img-top"
                      alt="..."
                    />


<p  style={{ marginLeft:"-200px", textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>


      <hr  style={{marginLeft:"-280px"}}/>
      <p  style={{marginRight:"100px" }}>

      The customer’s touch points with the brand are various and a customer may become user of several different products or services
      </p>
      <hr  style={{marginLeft:"-280px"}}/>


<p style={{textAlign: 'justify',marginLeft:"-200px" }}>

<FontAwesomeIcon   style={{marginLeft:"-30px"}} icon={faQuoteLeft} />Jason Santa Maria
Reading is not only informed by what’s going on with us at that moment, but also governed by how our eyes and brains work to process information. What you see and what you’re experiencing as you read these words is quite different.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem 
Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply
 dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text <FontAwesomeIcon icon={faQuoteRight} />



</p>


<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iCP-_J4il_0W5Q1ZUWL5QzpvPPVuwaVbmYudxfhahqJAaJrMEle34X1JuagjJR1N6mY&usqp=CAU' alt=''/>         


    <Form style={{marginRight:"500px" }}>
      <Form.Group  style={{marginRight:"-100px" }} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>   


    <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    
    <Button  className="mt-4"varient="info">comment post</Button>
    
    </Col>




     </Row>
<Footer/>


    
     </div>
    </>
  );
}

export default News3;
