import image1 from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import image2 from '../../images/Kalbo Adventures Karuru Experience 2021-193.jpg'
import image3 from '../../images/Kalbo Adventures Karuru Experience 2021-256.jpg'
export default function Herotest(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active d-flex justify-content-start ">
      <img className="d-block w-100" src={image1} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block ">
    <h5>Build your Next Holiday Trip with Us</h5>
    <p>Your Tour</p>
  </div>
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src={image2} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block cover-text">
    <h5>Build your Next Holiday Trip with Us</h5>
    <p>Your Tour</p>
  </div>
    </div>
    <div className="carousel-item  position-relative">
      <img className="d-block w-100" src={image3} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block cover-text">
    <h5>Build your Next Holiday Trip with Us</h5>
    <p>Your Tour</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}