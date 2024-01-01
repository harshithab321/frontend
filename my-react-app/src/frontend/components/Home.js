import '../app.css'
import Carousel from 'react-bootstrap/Carousel';
import {Card, Navbar,Container,Nav,Row,Col,Form,Alert, Button} from "react-bootstrap"
import CardGroup from 'react-bootstrap/CardGroup';
import Multi from './multicarousel';
import Footer from './bottom';
import {Products,Product2} from './products';
import Sidebar from './sidebar';
import { Products3 } from './products3';
function Home() {
  return (
    <>
    <Sidebar/>
    <div style={{height:"3500px"}}>
    <Carousel data-bs-theme="dark" style={{marginLeft:"400px",marginTop:"-580px"}}>
      <Carousel.Item>
        <img
        style={{width:"900px",marginTop:"-90px",marginRight:"40px",height:"665px"}}
          className="d-inline w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ835DCopXxEqFM3XiPvmr34BqdQs9VzV36QM6ar_rcvNm-bBvmsY52m2zaUrCKLRfTpEA&usqp=CAU"
          alt="First slide"
        />
         <Carousel.Caption>
          <p>Spring Summer 2020</p>
          <h5>purchase this</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="info">shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width:"900px",marginTop:"-90px",marginRight:"40px",height:"665px"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzGTKH-5KjauY2tmOGacS6cKCh8c0S6kYxQ&usqp=CAU"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p>Spring Summer 2020</p>
          <h5>purchase this</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="info">shop Now</Button> 
     </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
    
    <Container fluid>
      <Row  style={{marginTop:"50px",marginLeft:"20px"}}>
       
        <Col >
       <Card  style={{width:"600px",height:"200px",background:"lightgray",border:"none"}}>
        <Row>
        <Card.Body>
       
        <Card.Text style={{margin:"40px 30px "}}>
        <h5>New Smart WatchGET </h5>  
        <div>UP TO 50% OFF </div>
       
        <p class="linker"> Shop now <i style={{marginLeft:"2px"}} class="fa-solid fa-arrow-right"></i></p>
        </Card.Text>
        
      </Card.Body>
      <Col>
      <Col  style={{marginLeft:"400px",marginRight:"90px" ,marginTop:"-170px"}}>
            <Card.Img  style={{}}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1lLaWpGD8cmrHg9-PjsjYDLSasOH6_WVCA&usqp=CAU" />
      </Col>
  </Col>
    </Row>
    </Card>
    </Col>

    <Col >
       <Card style={{width:"600px",height:"200px",background:"lightgray",border:"none"}} >
        <Row>
        <Card.Body>
    
        <Card.Text  style={{margin:"40px 30px "}}>
      <h5>New Smart WatchGET </h5>  
        <div>UP TO 50% OFF </div>
      
        <p   class="linker">Shop now
        <i style={{marginLeft:"2px"}} class="fa-solid fa-arrow-right"></i></p>
        </Card.Text>
       
      </Card.Body>
      <Col>
      <Col style={{marginLeft:"400px",marginRight:"90px" ,marginTop:"-170px",}} >
            <Card.Img style={{width:"60px",height:"60px"}}   variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq2Zvx6sQyAAAlN7hKiJZYL6CKmlqaNc1Rg&usqp=CAU" />
      </Col>
  </Col>
    </Row>
    </Card>
    </Col>
      
      </Row>
    </Container>


    <CardGroup  style={{marginLeft:"30px",marginTop:"50px",marginRight:"100px"}}>
    <Card className='d-flex justify-content-between  mb-2 '>
      <Row>
        <Col style={{ margin: "20px" }}>
          <Card.Img    style={{width:"60px",height:"60px"}} src="https://www.shutterstock.com/image-vector/call-center-24-hour-operator-260nw-1936146829.jpg" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>24/7 support</Card.Text>
            {/* Add other card content here */}
          </Card.Body>
        </Col>
      </Row>
    </Card>

    <Card className='d-flex justify-content-between mb-2   '>
      <Row>
        <Col style={{ margin: "20px" }}>
          <Card.Img  style={{width:"60px",height:"60px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwy1V4clNyR2HnwmsSwAv-zL6umd29j14cbyDzixzmtdE-qL1AzRrlyp5dOq6mhFxV718&usqp=CAU" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>Money Back Guarantee</Card.Text>
            {/* Add other card content here */}
          </Card.Body>
        </Col>
      </Row>
    </Card>

      <Card className='d-flex justify-content-between mb-2 ' style={{borderRight:"-20px"}}> 
      <Row>
        <Col style={{ margin: "20px" }}>
          <Card.Img   style={{width:"60px",height:"60px"}} src="https://cdn-icons-png.flaticon.com/128/455/455705.png" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>Special Gift Cards</Card.Text>
            {/* Add other card content here */}
          </Card.Body>
        </Col>
      </Row>
    </Card>

       <Card className='d-flex justify-content-between mb-2'>
      <Row>
        <Col style={{ margin: "20px" }}>
          <Card.Img  style={{width:"60px",height:"60px"}}src="https://img.freepik.com/premium-vector/piggy-bank-vector-icon-isolated-white-background-saving-money-symbol-flat-design-with-shadows_572070-11.jpg" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>Free Shipping</Card.Text>
            {/* Add other card content here */}
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </CardGroup>

     <Multi/>
    <Products/>
    <Product2/>
    <Products3/>
   
    <Footer/>
   
    </div>
    </>









  );
}

export default Home;