import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopy } from '@fortawesome/free-solid-svg-icons';
import Fun from './details';
import { Products } from './products';
import Footer from './bottom';
import { useNavigate } from 'react-router-dom';

function Prod({ userLogin }) {
  const { productId } = useParams();
  const storedAuthenticate = JSON.parse(localStorage.getItem('authenticate')) || false;
  const [productDetails, setProductDetails] = useState({});
  const [cartMessage, setCartMessage] = useState('');
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState('');
  const [buy, setBuy] = useState(false); // Initialize buy state
  const [orderstate,setOrder]=useState('')
const [orderdetails,setOrderDetailes]=useState([])
const [id,setId]=useState('')





  const increment = useMemo(() => {
    return () => setValue((prevValue) => prevValue + 1);
  }, []);

  const decrement = useMemo(() => {
    return () => setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  }, []);




  useEffect(() => {
    if (storedAuthenticate === true) {
      setUserId(productDetails.userId);
    }
  }, [storedAuthenticate, productDetails]);

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const storedAuthenticate = JSON.parse(localStorage.getItem('authenticate')) || false;

    if (storedAuthenticate) {
      try {
        const response = await axios.post('http://localhost:9000/carts/', {
          userId: userId,
          items: [
            {
              productId: productId,
              quantity: value,
            },
          ],
          DateOfManufacturing: new Date().toLocaleString(),
        });

        if (response.status === 200) {
          console.log('Item added to cart!');

          setTimeout(() => {
            setCartMessage(`${value} items added to cart`);
          }, 6000);
        } else {
          console.error('Failed to add item to cart:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding items to cart:', error);
      }
    } else {
      navigate('/api/login');
    }
  };





















  const buyNow = useCallback(async() => {
    setBuy(true);

    if (storedAuthenticate && buy) {
      try {
        console.log(productDetails.userId)
        const orderData = {
        
          userId: productDetails.userId, // Replace with actual customer ID
          productId: [productId],
          DateOfManufacturing: new Date().toLocaleString(),
          quantity: value,
          address: '123 Main St',
          // Other order data...
        };
  
        const response = await axios.post('http://localhost:9000/orders/', orderData);

      if (response.status === 201) {
        console.log('Order placed successfully:',response.data.newOrder._id);
        setOrderDetailes(response.data.newOrder._id)
        setOrder('order placed successfully');
        setId(response.data.newOrder._id)
      } else {
        console.error('Failed to place order:', response.newOrder);
        setOrder('order not placed successfully');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setOrder('error placing order');
    }
    }
  },[buy]);

  const deleteNow=(id)=>{


    navigate(`/deletedOrder/${id}`)
   
    
  }
console.log(id)


console.log(orderdetails)
  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/products/${productId}`)
      .then((response) => setProductDetails(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

  if (Object.keys(productDetails).length === 0) {
    return <div>Loading...</div>;
  }

 
 

  return (
    <Container>
      <div style={{ width: '600px', height: '50px', border: '1px solid gray' }}>{cartMessage}</div>

      <Card className="mt-5" style={{ width: '100%', height: '570px' }}>
        <Row>
          <Col>
            <Card.Img variant="top" style={{ width: '400px', height: '570px' }} src={productDetails.images[0]} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{productDetails.prodname}</Card.Title>
              <hr />
              <Card.Text>
                <p>{productDetails.price}</p>
                <hr />
                <p>{productDetails.description}</p>
                <hr />
                <p className="mb-2" style={{ color: 'green' }}>
                  {productDetails.quantity} in stock
                </p>
                <Container className="d-flex ml-2" style={{ alignItems: 'baseline' }}>
                  qty:{' '}
                  <Button
                    className="pb-4"
                    onClick={increment}
                    style={{ border: '1px solid gray', width: '20px', height: '20px', color: 'black', justifyContent: 'center' }}
                    variant="light"
                  >
                    +
                  </Button>
                  <div style={{ width: '20px', height: '20px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 5px' }}>
                    {value}
                  </div>
                  <Button
                    className="pb-4"
                    onClick={decrement}
                    style={{ border: '1px solid gray', width: '20px', height: '20px', color: 'black', justifyContent: 'center' }}
                    variant="light"
                  >
                    -
                  </Button>

                  <div>
                    <Button onClick={handleAddToCart} style={{ marginLeft: '5px' }} variant="primary">
                      add to cart
                    </Button>
                  </div>

                  <Button onClick={buyNow} style={{ marginLeft: '5px' }} variant="primary">
                    buy now
                    {orderstate}
                  </Button>

    
                  <Button onClick={()=>deleteNow(id)} style={{ marginLeft: '5px' }} variant="primary">
                    delete order
                  </Button>

                </Container>
              </Card.Text>

              <div className="d-flex">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span>Add to Wishlist</span>
                <span>
                  <FontAwesomeIcon icon={faCopy} />
                </span>
                <span>Compare</span>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Fun />
      <h3>You may also like </h3>
      <Products />
      <h3>Related Products</h3>
      <Products />
      <Footer />
    </Container>
  );
}

export default React.memo(Prod);
