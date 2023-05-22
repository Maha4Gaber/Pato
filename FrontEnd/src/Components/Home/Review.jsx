import React from 'react'
import { MotionAnimate } from 'react-motion-animate';
import Slider from 'react-slick/lib/slider'
import { animate, animate1 } from '../../loader';

const Review = () => {
	var settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		arrows: true,
  };
  return (
    <div>
      <section class="section-review p-t-115">
		<div class="title-review t-center m-b-2">
			<span class="tit2 p-l-15 p-r-15">
				Customers Say
			</span>

			<h3 class="tit8 t-center p-l-20 p-r-15 p-t-3">
				Review
			</h3>
		</div>

		<div class="wrap-slick3">
			<div class="slick3">
				<Slider  {...settings} >
				<div class="item-slick3 item1-slick3">
					<div class="wrap-content-slide3 p-b-50 p-t-50">
						<div class="container">
										<MotionAnimate {...animate}>
										<div class="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
											<img src="images/avatar-01.jpg" alt="IGM-AVATAR" />
										</div>
										</MotionAnimate>

										<MotionAnimate {...animate1}>
											<div class="content-review m-t-33 animated " data-appear="fadeInUp">
												<p class="t-center txt12 size15 m-l-r-auto">
													“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
												</p>

												<div class="star-review fs-18 color0 flex-c-m m-t-12">
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star p-l-1" aria-hidden="true"></i>
													<i class="fa fa-star p-l-1" aria-hidden="true"></i>
													<i class="fa fa-star p-l-1" aria-hidden="true"></i>
													<i class="fa fa-star p-l-1" aria-hidden="true"></i>
												</div>

												<div class="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">
													Marie Simmons ˗ New York
												</div>
											</div>
										</MotionAnimate>
						</div>
					</div>
				</div>

				<div class="item-slick3 item2-slick3">
					<div class="wrap-content-slide3 p-b-50 p-t-50">
						<div class="container">
							<div class="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
								<img src="images/avatar-04.jpg" alt="IGM-AVATAR" />
							</div>

							<div class="content-review m-t-33 animated " data-appear="fadeInUp">
								<p class="t-center txt12 size15 m-l-r-auto">
									“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
								</p>

								<div class="star-review fs-18 color0 flex-c-m m-t-12">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
								</div>

								<div class="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">
									Marie Simmons ˗ New York
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="item-slick3 item3-slick3">
					<div class="wrap-content-slide3 p-b-50 p-t-50">
						<div class="container">
							<div class="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated " data-appear="zoomIn">
								<img src="images/avatar-05.jpg" alt="IGM-AVATAR" />
							</div>

							<div class="content-review m-t-33 animated " data-appear="fadeInUp">
								<p class="t-center txt12 size15 m-l-r-auto">
									“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
								</p>

								<div class="star-review fs-18 color0 flex-c-m m-t-12">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
									<i class="fa fa-star p-l-1" aria-hidden="true"></i>
								</div>

								<div class="more-review txt4 t-center animated  m-t-32" data-appear="fadeInUp">
									Marie Simmons ˗ New York
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</div>

			<div class="wrap-slick3-dots m-t-30"></div>
		</div>
	</section>
    </div>
  )
}

export default Review
