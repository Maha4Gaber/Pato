import React from 'react'
import $ from "jquery";

const Aside = () => {
   $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function(){
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })


  return (
    <div>
        <aside className="sidebar trans-0-4">
        
          <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>

          <ul className="menu-sidebar p-t-95 p-b-70">
            <li className="t-center m-b-13">
              <a href="index.html" className="txt19">Home</a>
            </li>

            <li className="t-center m-b-13">
              <a href="menu.html" className="txt19">Menu</a>
            </li>

            <li className="t-center m-b-13">
              <a href="gallery.html" className="txt19">Gallery</a>
            </li>

            <li className="t-center m-b-13">
              <a href="about.html" className="txt19">About</a>
            </li>

            <li className="t-center m-b-13">
              <a href="blog.html" className="txt19">Blog</a>
            </li>

            <li className="t-center m-b-33">
              <a href="contact.html" className="txt19">Contact</a>
            </li>

            <li className="t-center">
              <a href="reservation.html" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
              RESERVATION
              </a>
            </li>
          </ul>

          <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
            <h4 className="txt20 m-b-33">
            </h4>

            <div className="wrap-gallery-sidebar flex-w">
              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-01.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-02.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-03.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-05.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-06.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-07.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-09.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-10.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-11.jpg" data-lightbox="gallery-footer">
                <img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY" />
              </a>
            </div>
          </div>
        </aside>
    </div>
  )
}

export default Aside
