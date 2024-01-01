import React from 'react';
import Sidebar from './sidebar';
import{Row,Col,CardBody,Card,Form,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './bottom';
function ContactUs() {
  return (
    <div>
     <Row>
      <Col  md={3}>
      <Sidebar/>
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
     
      <Col md={9}>
      <Row>
      <h3>Contact Us</h3>
      <Col className="mt-5" md={2}>
     
      <FontAwesomeIcon className=' m-auto'  style={{fontSize:"30px"}} icon={faMapMarkerAlt} /> 
      <div> location at 123 main street banglore</div>

      </Col>
      <Col   className="mt-5" md={2}>
      
      <FontAwesomeIcon  style={{fontSize:"30px"}} icon={faPhone} /> 
      <div> call to +91 9843582981</div>
      
      </Col>
      <Col    className="mt-5" md={3}>
      <FontAwesomeIcon  style={{fontSize:"30px"}} icon={faEnvelope} /> 
     <div>message here</div>
      
      
      
      </Col>



      </Row>
      
      <Form style={{marginRight:"500px" , marginTop:"100px"}}>
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
  );
}

export default ContactUs;
