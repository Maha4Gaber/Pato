import React from 'react'
import {  NavLink } from 'react-router-dom'
import './NaveBar.css'
import $ from "jquery";
import Aside from './Aside';

const NaveBar = () => {
	   var header = $('header');
    var logo = $(header).find('.logo img');
    var linkLogo1 = $(logo).attr('src');
    var linkLogo2 = $(logo).data('logofixed');


    $(window).on('scroll',function(){
        if($(this).scrollTop() > 5 && $(this).width() > 992) {
            $(logo).attr('src',linkLogo2);
            $(header).addClass('header-fixed');
        }
        else {
            $(header).removeClass('header-fixed');
            $(logo).attr('src',linkLogo1);
        }
        
    });



  return (
    <div>
      	  
	<header>
		<div className="wrap-menu-header gradient1 trans-0-4">
			<div className="container h-full">
				<div className="wrap_header trans-0-3">
					<div className="logo">
                <NavLink to={'/'}>
							<img src="images/icons/logo.png" alt="IMG-LOGO" data-logofixed="images/icons/logo2.png" />
						</NavLink>
					</div>

					<div className="wrap_menu p-l-45 p-l-0-xl">
						<nav className="menu">
							<ul className="main_menu">
								<li>
									<NavLink to={'/'} href="index.html">Home</NavLink>
								</li>

								<li>
									<NavLink to={'/menu'} href="menu.html">Menu</NavLink>
								</li>

								<li>
									<NavLink to={"reservation"}>Reservation</NavLink>
								</li>

								<li>
											<NavLink to={"gallery"}>Gallery</NavLink>
								</li>

								<li>
											<NavLink to={"about"}>About</NavLink>
								</li>

										<li>
											<NavLink to={"blog"}>Blog</NavLink>
								</li>

										<li>
											<NavLink to={"contact"}>Contact</NavLink>
											
								</li>
							</ul>
						</nav>
					</div>

					<div className="social flex-w flex-l-m p-r-20">
						<a href="#"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true"></i></a>

						<button className="btn-show-sidebar m-l-33 trans-0-4"></button>
					</div>
				</div>
			</div>
		</div>
	</header>

  
<Aside />
    </div>
  )
}

export default NaveBar
