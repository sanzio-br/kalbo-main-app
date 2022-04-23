export default function Testimonies() {
    return (
        <section className="section section-sm section-last bg-default">
            <div className="container">
                <h3>What People Say</h3>
                {/* <!-- Owl Carousel--> */}
                <div className="owl-carousel owl-modern" >
                    {/* <!-- Quote Lisa--> */}
                    <article>
                        <div className="quote-lisa-body"><a className="quote-lisa-figure" href="/"><img className="img-circles" src="images/user-16-100x100.jpg" alt="" width="100" height="100" /></a>
                            <div className="quote-lisa-text">
                                <p className="q">Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam phasellus vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing. Aliquet enim tortor at auctor urna. Tortor aliquam nulla facilisi cras fermentum. Malesuada pellentesque elit eget gravida cum sociis natoque.</p>
                            </div>
                            <h5 className="quote-lisa-cite"><a href="#">Catherine Williams</a></h5>
                            <p className="quote-lisa-status">Regular Client</p>
                        </div>
                    </article>
                    {/* <!-- Quote Lisa--> */}
                    <article className="quote-lisa">
                        <div className="quote-lisa-body"><a className="quote-lisa-figure" href="#"><img className="img-circles" src="images/user-17-100x100.jpg" alt="" width="100" height="100" /></a>
                            <div className="quote-lisa-text">
                                <p className="q">Sodales ut etiam sit amet nisl purus. Maecenas accumsan lacus vel facilisis volutpat est. Suscipit adipiscing bibendum est ultricies integer quis auctor. Viverra aliquet eget sit amet tellus cras adipiscing. Posuere ac ut consequat semper viverra nam libero justo laoreet. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.</p>
                            </div>
                            <h5 className="quote-lisa-cite"><a href="#">Rupert Wood</a></h5>
                            <p className="quote-lisa-status">Regular Client</p>
                        </div>
                    </article>
                    {/* <!-- Quote Lisa--> */}
                    <article className="quote-lisa">
                        <div className="quote-lisa-body"><a className="quote-lisa-figure" href="#"><img className="img-circles" src="images/user-18-100x100.jpg" alt="" width="100" height="100" /></a>
                            <div className="quote-lisa-text">
                                <p className="q">Lacus vestibulum sed arcu non odio euismod lacinia. Pellentesque elit ullamcorper dignissim cras. Ultrices eros in cursus turpis massa tincidunt dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Commodo odio aenean sed adipiscing diam. Sed euismod nisi porta lorem mollis aliquam.</p>
                            </div>
                            <h5 className="quote-lisa-cite"><a href="#">Samantha Brown</a></h5>
                            <p className="quote-lisa-status">Regular Client</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}