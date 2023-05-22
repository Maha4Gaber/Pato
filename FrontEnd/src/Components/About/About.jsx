import React from 'react'
import Footer from '../Footer/Footer'
import Signup from '../Footer/Signup'
import Aboutvideo from './Aboutvideo'

const About = () => {
  return (
    <div>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage: 'url(images/bg-title-page-03.jpg)'}}>
          <h2 className="tit6 t-center">
            About Us
          </h2>
      </section>
      <section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15">
        <span className="tit2 t-center">
          Italian Restaurant
        </span>

        <h3 className="tit3 t-center m-b-35 m-t-5">
          Our Story
        </h3>

        <p className="t-center size32 m-l-r-auto">
          Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
        </p>
      </section>

      <Aboutvideo />


      <section className="bg1-pattern p-t-120 p-b-105">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-t-45 p-b-30">
            <div className="wrap-text-delicious t-center">
              <span className="tit2 t-center">
                Delicious
              </span>

              <h3 className="tit3 t-center m-b-35 m-t-5">
                RECIPES
              </h3>

              <p className="t-center m-b-22 size3 m-l-r-auto">
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
              </p>
            </div>
          </div>

          <div className="col-md-6 p-b-30">
            <div className="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
              <img src="images/our-story-01.jpg" alt="IMG-OUR"  />
            </div>
          </div>
        </div>


        <div className="row p-t-170">
          <div className="col-md-6 p-b-30">
            <div className="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
              <img src="images/our-story-02.jpg" alt="IMG-OUR" />
            </div>
          </div>

          <div className="col-md-6 p-t-45 p-b-30">
            <div className="wrap-text-romantic t-center">
              <span className="tit2 t-center">
                Romantic
              </span>

              <h3 className="tit3 t-center m-b-35 m-t-5">
                Restaurant
              </h3>

              <p className="t-center m-b-22 size3 m-l-r-auto">
                Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      <div className="parallax0 parallax100" style={{backgroundImage: 'url(images/bg-cover-video-02.jpg)'}}>
        <div className="overlay0-parallax t-center size33"></div>
      </div>
  
      <section className="section-chef bgwhite p-t-115 p-b-95">
        <div className="container t-center">
          <span className="tit2 t-center">
            Meet Our
          </span>

          <h3 className="tit5 t-center m-b-50 m-t-5">
            Chef
          </h3>

          <div className="row">
            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#"><img src="images/avatar-02.jpg" alt="IGM-AVATAR" /></a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Peter Hart
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Chef
                  </span>

                  <p className="t-center">
                    Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#"><img src="images/avatar-03.jpg" alt="IGM-AVATAR" /></a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Joyce Bowman
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Chef
                  </span>

                  <p className="t-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis a sem tempus tempus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#"><img src="images/avatar-05.jpg" alt="IGM-AVATAR" /></a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Peter Hart
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Chef
                  </span>

                  <p className="t-center">
                    Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at velit nec ipsum iaculis posuere quis in sapien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Signup />
      <Footer />
    </div>
  )
}

export default About
