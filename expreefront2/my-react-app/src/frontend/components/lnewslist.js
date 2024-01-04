import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button,Col, Row } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './bottom';
import './style.css'
 function  List(){

    const handleRefresh = () => {
        // Reload the entire page
        window.location.reload();
      };

    return(
<>
<Row>
<Col md={3}>


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
     
        <Container>
          <Row>
            <Col  >
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


<Col  md={8}>
<h4>Nunc Placerat Augue Vel Porta Venenatis</h4>
<div  className='imagesblock d-block mt-5'>
      <div className="image-container">

        <Row>
          <Col>
          
          <img
          style={{ width: '300px', height: '300px' }}
          src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D%3D"
          className="card-img-top mb-3"
          alt="..."
        />
          </Col>
          <Col md={8}>
          <Link
        
       style={{ color: 'black', textDecoration: 'none', background: 'white' }}
       to="/news/:productId"
     >
     <p    className='texts'> The customer’s touch points with the brand are various and a customer may become user of several different products or services
 </p>
       Lorem Ipsum ..
     </Link>
          
          
          </Col>
        </Row>
       
       
      </div>

      <div className="image-container">




        <Row>

          <Col>
          <img
          style={{ width: '300px', height: '300px' }}
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top mb-3"
          alt="..."
        />
          
          </Col>
          <Col md={8}>
          
          <Link
       
          style={{ color: 'black', textDecoration: 'none', background: 'white' }}
          to="/news/:productId"
        >
              <p    className='texts' > The customer’s touch points with the brand are various and a customer may become user of several different products or services
               </p>
        
          Lorem Ipsum ..
        </Link>
          
          
          </Col>
        </Row>
       
        
      </div>

      <div className="image-container">

        <Row>
          <Col>
          <img
          style={{ width: '300px', height: '300px' }}
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top "
          alt="..."
        />
          </Col>
          <Col md={8}>
          <Link
         
            style={{ color: 'black', textDecoration: 'none', background: 'white' }}
            to="/Accessories"
          >
                <p   className='texts'> The customer’s touch points with the brand are various and a customer may become user of several different products or services
          </p>
          
            Lorem Ipsum ..
          </Link>
                    
          </Col>
        </Row>
       
       
      </div>
    </div>

</Col>
</Row>

<Footer/>
</>










)
}
export default List