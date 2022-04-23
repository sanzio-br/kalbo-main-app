import Place from '../../images/view.jpg'
export default function Holder(){
    const data =[
        {
            imgUrl:{Place},
            destination:"Benidorm, Spain",
            reviews:5,
            price:3000,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis illum quis dolore dolorum explicabo quasi, magni suscipit totam nesciunt nostrum repellendus perferendis facilis repudiandae. Mollitia praesentium earum rem quam?",
        },
        {
            imgUrl:{Place},
            destination:"Benidorm, Spain",
            reviews:5,
            price:3000,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis illum quis dolore dolorum explicabo quasi, magni suscipit totam nesciunt nostrum repellendus perferendis facilis repudiandae. Mollitia praesentium earum rem quam?",
        },
    ]
    return(
        <section className="section section-sm bg-default">
        <div className="container">
          <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">Hot Tours</span></h3>
          <div className="row row-sm row-40 row-md-50">
            <div className="col-sm-6 col-md-12 wow fadeInRight">
              {/* products card */}
              {data.map(({imgUrl,destination,description,reviews,price}) =>{
                  return(
                    <article className="product-big">
                    <div className="unit flex-column flex-md-row align-items-md-stretch">
                      <div className="unit-left">
                          <div className="product-big-figure">
                              <img src={Place} alt="" width="600"
                            height="366" /></div></div>
                      <div className="unit-body">
                        <div className="product-big-body">
                          <h5 className="product-big-title">
                              <p>{destination}</p></h5>
                          <div className="group-sm group-middle justify-content-start">
                            <div className="product-big-rating"><span className="icon material-icons-star"></span><span
                                className="icon material-icons-star"></span><span className="icon material-icons-star"></span><span
                                className="icon material-icons-star"></span><span className="icon material-icons-star_half"></span></div>
                                <span className="product-big-reviews">{reviews} customer reviews</span>
                          </div>
                          <p className="product-big-text">{description}</p>
                          <a className="button button-black-outline button-ujarak" href="https://wa.me/+254720 126177">Book
                            This Tour</a>
                          <div className="product-big-price-wrap"><span className="product-big-price">ksh {price}/=</span></div>
                        </div>
                      </div>
                    </div>
                  </article>
                  )
              })}
            </div>
          </div>
        </div>
      </section>
    )
}