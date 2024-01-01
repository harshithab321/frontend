import React from 'react';
import { Container, Card, Row, Col,Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './bottom';
import { Link } from 'react-router-dom';
const Posts = ({ posts, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <h2>loading</h2>;
  }

  const handleItemClick = (productId) => {
    // Navigate to the route for the clicked product
    navigate(`/products/products/${productId}`);
  };

  return (
    <>
  
      <Row>
        <Col  md={3}>
          <Sidebar />




               

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

        <Col md={6}  >
          <Container  >
          
            <Row  className='d-flex flex-start' style={{marginLeft:"-500px"}} >
              {posts.map((user) => (
                <Col key={user._id} md={4} className="mb-4">
                  <div onClick={() => handleItemClick(user._id)}>
                    <Card style={{ width: '18rem', marginTop: '0px', padding: '40px 50px', border: 'none' }}>
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
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Posts;
