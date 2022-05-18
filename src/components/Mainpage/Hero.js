
import image1 from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import image2 from '../../images/Kalbo Adventures Karuru Experience 2021-193.jpg'
import image3 from '../../images/Kalbo Adventures Karuru Experience 2021-256.jpg'
import { Carousel } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className='hero'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
