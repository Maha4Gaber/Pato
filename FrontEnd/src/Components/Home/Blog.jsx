import React from 'react'

const Blog = () => {
  return (
    <div>
      <section className="section-blog bg-white p-t-115 p-b-123">
        <div className="container">
          <div className="title-section-ourmenu t-center m-b-22">
            <span className="tit2 t-center">
              Latest News
            </span>

            <h3 className="tit5 t-center m-t-2">
              The Blog
            </h3>
          </div>

          <div className="row">
            <div className="col-md-4 p-t-30">
              <div className="blo1">
                <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
                  <a href="blog-detail.html"><img src="images/blog-01.jpg" alt="IMG-INTRO"/></a>

                  <div className="time-blog">
                    21 Dec 2017
                  </div>
                </div>

                <div className="wrap-text-blo1 p-t-35">
                  <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Best Places for Wine
                  </h4></a>

                  <p className="m-b-20">
                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                  </p>

                  <a href="blog-detail.html" className="txt4">
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-t-30">
              <div className="blo1">
                <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
                  <a href="blog-detail.html"><img src="images/blog-02.jpg" alt="IMG-INTRO"/></a>

                  <div className="time-blog">
                    15 Dec 2017
                  </div>
                </div>

                <div className="wrap-text-blo1 p-t-35">
                  <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Eggs and Cheese
                  </h4></a>

                  <p className="m-b-20">
                    Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat
                  </p>

                  <a href="blog-detail.html" className="txt4">
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-t-30">
              <div className="blo1">
                <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom pos-relative">
                  <a href="blog-detail.html"><img src="images/blog-03.jpg" alt="IMG-INTRO"/></a>

                  <div className="time-blog">
                    12 Dec 2017
                  </div>
                </div>

                <div className="wrap-text-blo1 p-t-35">
                  <a href="blog-detail.html"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                    Style the Wedding Party
                  </h4></a>

                  <p className="m-b-20">
                    Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                  </p>

                  <a href="blog-detail.html" className="txt4">
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
