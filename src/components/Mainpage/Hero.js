
import image1 from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import image2 from '../../images/Kalbo Adventures Karuru Experience 2021-193.jpg'
import image3 from '../../images/Kalbo Adventures Karuru Experience 2021-256.jpg'
import { Link } from 'react-router-dom';
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
          <Carousel.Caption>
            <h3 className='fs-3'>Build your Next Holiday Trip with Us</h3>
            <Link to='Contacts'>
              <p className="contacts-btn">Get in Touch</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Enjoy the Best Destinations</h3>
            <Link to='Contacts'>
              <p className="contacts-btn">Get in Touch</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>A team of professional Travel Experts</h3>
            <Link to='Contacts'>
              <p className="contacts-btn">Get in Touch</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
