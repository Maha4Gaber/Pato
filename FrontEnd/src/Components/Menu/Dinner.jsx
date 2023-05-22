import React from 'react'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdinnerRests } from './Slices/Dinner';
// import { fetchLunchRests } from './Slices/LunchSlice';


const Dinner = () => {


	
		const rests = useSelector((state) => state.dinner);
		const dispatch = useDispatch();
		useEffect(() => {
			dispatch(fetchdinnerRests())    
		},[5])


  return (
    <div>
      <section className="section-dinner bgwhite">
		<div id='DINNER' className="header-dinner parallax0 parallax100" style={{backgroundImage:' url(images/header-menu-02.jpg)'}}>
			<div className="bg1-overlay t-center p-t-170 p-b-165">
				<h2 className="tit4 t-center">
					Dinner
				</h2>
			</div>
		</div>

		<div className="container">
			<div className="row p-t-108 p-b-70">
				<div className="col-md-12 col-lg-12 m-l-r-auto">
					<div className='row'>
								
							{
								rests.map(rest => {
									return (
										<div key={rest.id} className="blo3 flex-w col-lg-6 col-md-6 flex-col-l-sm m-b-30">
										<div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
											<a href="#"><img src={"images/dinner-0" + rest.img +".jpg"} alt="IMG-MENU"/></a>
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

export default Dinner
