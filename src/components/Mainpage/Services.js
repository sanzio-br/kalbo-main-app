import { GiWallet } from 'react-icons/gi'
import { GiAchievement } from 'react-icons/gi'
import { AiFillFire } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { GiWorld } from 'react-icons/gi'
export default function Services() {
  return (
    <section className="section section-sm" style={{'background-color':'var(--gray)'}}>
      <div className="container">
        <h3 style={{'color': 'var(--red)'}}>Our Services</h3>
        <div className="row row-30">
          <div className="col-sm-6 col-lg-4">
            <article className="box-icon-classNameic" data-aos="fade-down-right">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-equalization3">
                    <GiWorld />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">Personalized Matching</a></h5>
                  <p className="box-icon-classNameic-text">Our unique matching system lets you find just the tour you want for your next holiday.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4">
            <article className="box-icon-classNameic" data-aos="fade-down">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-circular220">
                    <GiAchievement />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">Wide Variety of Tours</a></h5>
                  <p className="box-icon-classNameic-text">We offer a wide variety of personally picked tours with destinations all over the globe.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4">
            <article className="box-icon-classNameic" data-aos="fade-down-left">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-favourites5">
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">Highly Qualified Service</a></h5>
                  <p className="box-icon-classNameic-text">Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4">
            <article className="box-icon-classNameic" data-aos="fade-up-right">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-headphones32">
                    <BiSupport />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">24/7 Support</a></h5>
                  <p className="box-icon-classNameic-text">You can always get professional support from our staff 24/7 and ask any question you have.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4" >
            <article className="box-icon-classNameic" data-aos="fade-up">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-hot67">
                    <AiFillFire />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">Handpicked Hotels</a></h5>
                  <p className="box-icon-classNameic-text">Our team offers only the best selection of affordable and luxury hotels to our clients.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4">
            <article className="box-icon-classNameic" data-aos="fade-up-left">
              <div className="unit box-icon-classNameic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                <div className="unit-left">
                  <div className="box-icon-classNameic-icon fl-bigmug-line-wallet26">
                    <GiWallet />
                  </div>
                </div>
                <div className="unit-body">
                  <h5 className="box-icon-classNameic-title"><a href="/kalbo-main-app/Tours">Best Price Guarantee</a></h5>
                  <p className="box-icon-classNameic-text">If you find tours that are cheaper than ours, we will compensate the difference.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}