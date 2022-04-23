import image1 from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import image2 from '../../images/Kalbo Adventures Karuru Experience 2021-193.jpg'
import image3 from '../../images/Kalbo Adventures Karuru Experience 2021-256.jpg'
export default function Holder() {

  return (
    <div >
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
      <div className='cover-text carousel-caption'>
        <h6 className="text-uppercase" data-aos="fade-left">
          Enjoy the Best Destinations with Our Travel Agency
        </h6>
        <h2 class="oh font-weight-light" data-aos="fade-up">
          <span>Explore</span>  <span className="font-weight-bold">
            The World
          </span>
        </h2>
        <a className="button button-default-outline button-ujarak" href="/contacts"
          data-aos="fade-up">
          Get in touch
        </a>
      </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}