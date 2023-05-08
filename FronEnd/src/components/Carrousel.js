import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/072a72151f5a3d17195720bc1fe82a271960e480_ASUS-ZENSCREEN-MB165B%20(1).png"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/933b64507d4ea940efa542cfad97a97570cdd651_Kaspersky.png"
          alt="Second slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/2d0859f1ac357d1d4a47dbf8225cb616ab9f655a_MSI-Raider-Pulse.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;