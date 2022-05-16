import logo from '../../images/logo.PNG'
export default function About() {
  return (
    <section className="section section-sm section-first bg-default text-md-left" style={
      { 'background-color': 'var(--gray)' }
    } >
      <div className="container">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <img src={logo} alt="" width="556" height="382" />
          </div>
          <div className="col-lg-6 wow "
            data-aos="fade-down-left" >
            <div className="box-width-lg-470">
              <h3 style={
                { 'color': 'var(--red)' }
              }>
                Discover New Horizons
              </h3>
              {/* <!-- Bootstrap tabs--> */}
              <div className="tabs-custom tabs-horizontal tabs-line tabs-line-big tabs-line-style-2 text-center text-md-left" id="tabs-7">
                {/* <!-- Nav tabs--> */}
                <ul className="nav nav-tabs">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="#tabs-7-1" data-toggle="tab">
                      About us
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-7-2" data-toggle="tab">
                      Why choose us
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-7-3" data-toggle="tab">
                      Our mission
                    </a>
                  </li>
                </ul>
                {/* <!-- Tab panes--> */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-7-1">
                    <p>
                      Kalbo adventures is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about
                      travel and sharing the world's wonders with you.
                    </p>
                    <div className="group-md group-middle">
                      <a className="button button-secondary button-pipaluk" href="/contact">
                        Get in Touch
                      </a>
                      <a className="button button-black-outline button-md" href="/blogs">Read More</a></div>
                  </div>
                  <div className="tab-pane fade" id="tabs-7-2">
                    <p>
                      We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen
                      destination in an authentic and exciting way.</p>
                    <div className="group-md group-middle">
                      <a className="button button-secondary button-pipaluk" href="/contacts">
                        Get in Touch
                      </a>
                      <a className="button button-black-outline button-md" href="/blogs">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-7-3">
                    <p>Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service
                      available in the industry.
                    </p>
                    <div className="group-md group-middle">
                      <a className="button button-secondary button-pipaluk" href="/contacts">
                        Get in Touch
                      </a>
                      <a className="button button-black-outline button-md" href="/blogs">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}