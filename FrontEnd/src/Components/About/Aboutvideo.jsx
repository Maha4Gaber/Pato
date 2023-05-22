import React from 'react'

const Aboutvideo = () => {
  return (
    <div>
      <section className="section-video parallax100" style={{backgroundImage: 'url(images/header-menu-01.jpg)'}}>
        <div className="content-video t-center p-t-225 p-b-250">
          <span className="tit2 p-l-15 p-r-15">
            Discover
          </span>

          <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
            Our Video
          </h3>

          <div className="btn-play ab-center size16 hov-pointer m-l-r-auto m-t-43 m-b-33" data-toggle="modal" data-target="#modal-video-01">
            <div className="flex-c-m sizefull bo-cir bgwhite color1 hov1 trans-0-4">
              <i className="fa fa-play fs-18 m-l-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="modal-video-01" tabindex="-1" role="dialog" aria-hidden="true">

        <div className="modal-dialog" role="document" data-dismiss="modal">
          <div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>

          <div className="wrap-video-mo-01">
            <div className="w-full wrap-pic-w op-0-0"><img src="images/icons/video-16-9.jpg" alt="IMG" /></div>
            <div className="video-mo-01">
              <iframe title='V1' src="https://www.youtube.com/embed/5k1hSu2gdKE?rel=0&amp;showinfo=0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutvideo
