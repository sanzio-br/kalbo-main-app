import image from "../../images/SSI_0898.jpg"
export default function Choice() {
    return (
        <section className="section section-sm section-first bg-default text-md-left">
            <div className="container">
                <div className="row row-50 justify-content-center align-items-xl-center">
                    <div className="col-md-10 col-lg-5 col-xl-6"><img src={image} alt="" width="519" height="564" />
                    </div>
                    <div className="col-md-10 col-lg-7 col-xl-6">
                        <h3 className="text-spacing-25 font-weight-normal title-opacity-9">Why choose us</h3>
                        {/* <!-- Bootstrap tabs--> */}
                        <div className="tabs-custom tabs-horizontal tabs-line" id="tabs-4">
                            {/* <!-- Nav tabs--> */}
                            <ul className="nav nav-tabs">
                                <li className="nav-item" role="presentation"><a className="nav-link active" href="#tabs-4-1" data-toggle="tab">Experience</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#tabs-4-2" data-toggle="tab">Skills</a></li>
                            </ul>
                            {/* <!-- Tab panes--> */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tabs-4-1">
                                    <p>Aliquam malesuada bibendum arcu vitae elementum curabitur. A erat nam at lectus urna duis convallis convallis tellus. Sit amet consectetur adipiscing elit pellentesque.</p>
                                </div>
                                <div className="tab-pane fade" id="tabs-4-2">
                                    <div className="row row-40 justify-content-center text-center inset-top-10">
                                        <div className="col-sm-4">
                                            <div className="progress blue"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                                                <div className="progress-value"></div>
                                            </div>
                                            <p className="progress-bar-circle-title">Tours</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="progress blue"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                                                <div className="progress-value">88</div>
                                            </div>
                                            <p className="progress-bar-circle-title">Excursion</p>
                                        </div>
                                        <div className="col-sm-4">
                                        <div className="progress blue"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                                                <div className="progress-value">78</div>
                                            </div>
                                            <p className="progress-bar-circle-title">Hotel Bookings</p>
                                        </div>
                                    </div>
                                    <div className="group-md group-middle"><a className="button button-width-xl-230 button-primary button-pipaluk" href="/About">Get in touch</a><a className="button button-black-outline button-width-xl-230" href="/About">Read more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}