import Img from "../../images/DSC_0770.jpg";
export default function Tours(){
    return(
        <section className="section section-lg section-top-1 bg-gray-4">
        <div className="container offset-negative-1">
          <div className="box-categories cta-box-wrap">
            <div className="box-categories-content">
              <div className="row justify-content-center">
                <div className="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul className="list-marked-2 box-categories-list">
                    <li><a href="/"><img src={Img} alt="" width="368" height="420" /></a>
                      <h5 className="box-categories-title">Balloon Flights</h5>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul className="list-marked-2 box-categories-list">
                    <li><a href="/"><img className="tours" src={Img} alt="" width="368" height="420" /></a>
                      <h5 className="box-categories-title">Mountain Holiday</h5>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul className="list-marked-2 box-categories-list">
                    <li><a href="/"><img src={Img} alt="" width="368" height="420" /></a>
                      <h5 className="box-categories-title">Beach Holidays</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div><a className="link-classNameic wow fadeInUp" href="/">Other Tours<span></span></a>
        </div>
      </section>
    )
}