import React,{useState} from 'react';
import Sidebar from './sidebar';
import{Row,Col,CardBody,Card,Form,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './bottom';
import './style.css'

function ContactUs() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const[address,setAddress]=useState("")
const[state,setState]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Checkbox Checked:', isChecked);

    setEmail('');
    setPassword('');
    setIsChecked(false);
    console.log('Form submitted successfully!');
  };

 const  handelChange=(e)=>{
setAddress(e.target.value)
setState(true)

 }




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
      {state && <div  style={{width:"800px",height:"100px" ,background:"lightblue"}}>
  thanks for contacting us
  <p> {email}</p>
   <p>{address}</p>
    
  </div>}
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
      
      



      <Form onSubmit={handleSubmit} style={{ marginRight: '500px', marginTop: '100px' }}>
        <Form.Group style={{ marginRight: '-100px' }} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"   rows="3"></textarea>
  </div>
    
    <Button onClick={handelChange}  className="mt-4"varient="info">comment post</Button>
    
      </Col>

      
      <iframe  id="map" width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chitradurga+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
     </Row>
     
<Footer/>
     







    </div>
  );
}

export default ContactUs
