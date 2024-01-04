
import { useState,useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link for navigation if needed
import { Products3 } from './products3';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import{Card,Row,col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Multinew(){

const[users,setUsers]=useState([])
const navigate=useNavigate()

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 3, // Set items to 4 for desktop
          },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      useEffect(() => {
        axios.get('http://localhost:9000/products/productsnews')
          .then(response => setUsers(response.data))
          .catch(error => console.log(error));
      }, []);
    
      const handleItemClick = (productId) => {
        // Navigate to the route for the clicked product
        navigate(`/news/${productId}`);
      };
    

      return(
        <>
        
       
        <h2 style={{ textAlign: 'start', marginBottom: '20px' ,marginTop:"20px"}}>Top Category</h2>
  
        <Carousel responsive={responsive} className='d-flex justify-content-between'  arrows>
          <div>

       
          <div style={{ marginTop: '50px',marginLeft:"10px" }}>
            <div className="card" style={{width:"370px", height: '300px',border:"none" }}>
              <img  style={{width:"350px"}}src="https://images.unsplash.com/photo-1553729784-e91953dec042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
               
                <Link  style={{color:"black",textDecoration:"none", background: 'white',marginLeft:"0px", marginTop: '-500px' }}  to="/news/:productId"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5></Link> 
                
              </div>
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Admin icon */}
      <FontAwesomeIcon style={{marginLeft:"10px"}}  icon={faUser} size="1x" color="black" />

      {/* Read More text */}
      <div>
       
        <p className='mt-3'>Read more about the info...</p>
      </div>
    </div>
      
        </div>
       
       
       <div>
        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"370px", height: '300px' ,border:"none"}}>
              <img style={{width:"350px"}}src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
              <Link  style={{color:"black",textDecoration:"none", background: 'white',marginLeft:"0px", marginTop: '-500px' }}  to="/news2"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5></Link> 
                  
              </div>
            </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Admin icon */}
      <FontAwesomeIcon style={{marginLeft:"10px"}}  icon={faUser} size="1x" color="black" />

      {/* Read More text */}
      <div>
       
        <p className='mt-3'>Read more about the info...</p>
      </div>
    </div>




        </div>



        <div>
        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{width:"370px", height: '300px',border:"none" }}>
              <img style={{width:"350px"}} src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
              <Link  style={{color:"black",textDecoration:"none", background: 'white',marginLeft:"0px", marginTop: '-500px' }}  to="/Accessories"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5></Link> 
                
              </div>
              
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Admin icon */}
      <FontAwesomeIcon style={{marginLeft:"10px"}}  icon={faUser} size="1x" color="black" />

      {/* Read More text */}
      <div>
       
        <p className='mt-3'>Read more about the info...</p>
      </div>
    </div>

    </div>





        <div>
        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"370px", height: '300px',border:"none" }}>
              <img style={{width:"350px"}} src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
              <Link  style={{color:"black",textDecoration:"none", background: 'white',marginLeft:"0px", marginTop: '-500px' }}  to="/Accessories"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5></Link> 
                 </div>
              
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Admin icon */}
      <FontAwesomeIcon style={{marginLeft:"10px"}}  icon={faUser} size="1x" color="black" />

      {/* Read More text */}
      <div>
       
        <p className='mt-3'>Read more about the info...</p>
      </div>
    </div>
    </div>  
       
  </Carousel>
      
  

</>
      )
     

}
export default Multinew