
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link for navigation if needed






function Multi(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4, // Set items to 4 for desktop
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





      return(
        <>
        
       
        <h2 style={{ textAlign: 'start', marginBottom: '20px' ,marginTop:"20px"}}>Top Category</h2>
  
        <Carousel responsive={responsive} className='d-flex justify-content-between' style={{}} arrows>
          <div style={{ marginTop: '50px',marginLeft:"10px" }}>
            <div className="card" style={{width:"400px", width: '200px', height: '300px', }}>
              <img  style={{width:"350px"}}src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
               
                <Link  style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn" to="/Accessories">Accessories</Link> 
                
              </div>
            </div>
        </div>

        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img style={{width:"350px"}}src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
                 Hydraulic
                </a>
              </div>
            </div>
        </div>

        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{width:"400px", width: '200px', height: '300px' }}>
              <img style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
                 Lamp
                </a>
              </div>
            </div>
        </div>

        
        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
                 Cryotronics
                </a>
              </div>
            </div>
        </div>

        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img  style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
              Induction
                </a>
              </div>
            </div>
        </div>

        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img  style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
               Avionics
                </a>
              </div>
            </div>
        </div>
        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img  style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
               Circutes
                </a>
              </div>
            </div>
        </div>

        <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img  style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
                 Electronics
                </a>
              </div>
            </div>
        </div>

 <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width:"400px", width: '200px', height: '300px' }}>
              <img  style={{width:"350px"}} src="https://www.shutterstock.com/image-photo/man-working-on-laptop-sunny-260nw-617801678.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="#" style={{ background: 'white',marginLeft:"50px", marginTop: '-500px' }} className="btn">
                HandWatch
                </a>
              </div>
            </div>
        </div>
  </Carousel>

</>
      )
     

}
export default Multi