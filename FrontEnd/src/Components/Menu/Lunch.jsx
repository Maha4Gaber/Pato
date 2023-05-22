import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLunchRests } from './Slices/LunchSlice';

const Lunch = () => {


	  const rests = useSelector((state) => state.lunch);
		// console.log(rests);
		const dispatch = useDispatch();
		useEffect(() => {
			dispatch(fetchLunchRests())    
		},[5])




  return (
    <div>
      <section className="section-lunch bgwhite">
				<div className="header-lunch parallax0 parallax100" style={{backgroundImage: 'url(images/header-menu-01.jpg)'}}>
					<div id='LUNCH' className="bg1-overlay t-center p-t-170 p-b-165">
						<h2 className="tit4 t-center">
							Lunch
						</h2>
					</div>
			</div>

		<div  className="container">
			<div className="row p-t-108 p-b-70">
				<div className="col-md-8 col-lg-12 m-l-r-auto">
							<div className='row'>
								
							{
								rests.map(rest => {
									return (
										<div key={rest.id} className="blo3 flex-w col-lg-6 col-md-6 flex-col-l-sm m-b-30">
										<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
											<a href="#"><img src={"images/lunch-0" + rest.img +".jpg"} alt="IMG-MENU"/></a>
										</div>

										<div className="text-blo3 size21 flex-col-l-m">
											<a href="#" className="txt21 m-b-3">
												{rest.name}
											</a>

											<span className="txt23">
												{rest.decs}
											</span>

											<span className="txt22 m-t-20">
												${rest.price}
											</span>
										</div>
									</div>
									)
								})
					}
							</div>

				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Lunch


				// 	<div className="blo3 flex-w flex-col-l-sm m-b-30">
				// 		<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
				// 			<a href="#"><img src="images/lunch-03.jpg" alt="IMG-MENU"/></a>
				// 		</div>

				// 		<div className="text-blo3 size21 flex-col-l-m">
				// 			<a href="#" className="txt21 m-b-3">
				// 				tempus aliquet
				// 			</a>

				// 			<span className="txt23">
				// 				Aenean condimentum ante erat
				// 			</span>

				// 			<span className="txt22 m-t-20">
				// 				$45.09
				// 			</span>
				// 		</div>
				// 	</div>

				// 	<div className="blo3 flex-w flex-col-l-sm m-b-30">
				// 		<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
				// 			<a href="#"><img src="images/lunch-05.jpg" alt="IMG-MENU"/></a>
				// 		</div>

				// 		<div className="text-blo3 size21 flex-col-l-m">
				// 			<a href="#" className="txt21 m-b-3">
				// 				Duis massa
				// 			</a>

				// 			<span className="txt23">
				// 				Proin lacinia nisl ut ultricies posuere nulla
				// 			</span>

				// 			<span className="txt22 m-t-20">
				// 				$12.75
				// 			</span>
				// 		</div>
				// 	</div>
				// </div>

				// <div className="col-md-8 col-lg-6 m-l-r-auto">
				// 	<div className="blo3 flex-w flex-col-l-sm m-b-30">
				// 		<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
				// 			<a href="#"><img src="images/lunch-02.jpg" alt="IMG-MENU"/></a>
				// 		</div>

				// 		<div className="text-blo3 size21 flex-col-l-m">
				// 			<a href="#" className="txt21 m-b-3">
				// 				sbrisalona
				// 			</a>

				// 			<span className="txt23">
				// 				Proin lacinia nisl ut ultricies posuere nulla
				// 			</span>

				// 			<span className="txt22 m-t-20">
				// 				$29.79
				// 			</span>
				// 		</div>
				// 	</div>

				// 	<div className="blo3 flex-w flex-col-l-sm m-b-30">
				// 		<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
				// 			<a href="#"><img src="images/lunch-04.jpg" alt="IMG-MENU"/></a>
				// 		</div>

				// 		<div className="text-blo3 size21 flex-col-l-m">
				// 			<a href="#" className="txt21 m-b-3">
				// 				Cras eget magna
				// 			</a>

				// 			<span className="txt23">
				// 				Sed fermentum eros vitae eros
				// 			</span>

				// 			<span className="txt22 m-t-20">
				// 				$45.09
				// 			</span>
				// 		</div>
				// 	</div>

				// 	<div className="blo3 flex-w flex-col-l-sm m-b-30">
				// 		<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
				// 			<a href="#"><img src="images/lunch-06.jpg" alt="IMG-MENU"/></a>
				// 		</div>

				// 		<div className="text-blo3 size21 flex-col-l-m">
				// 			<a href="#" className="txt21 m-b-3">
				// 				Nullam maximus
				// 			</a>

				// 			<span className="txt23">
				// 				Duis massa nibh porttitor nec imperdiet eget
				// 			</span>

				// 			<span className="txt22 m-t-20">
				// 				$12.75
				// 			</span>
				// 		</div>
				// 	</div>