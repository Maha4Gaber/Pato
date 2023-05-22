import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Rests from './Rests';
import { fetchmenu } from './Slices/MenuSlice';

const Main_menu = () => {

	const menu = useSelector((state) => state.menu);
	// let smenu = menu.slice(0,4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmenu())    
  },[5])


  return (
    <div>
		<section className="section-mainmenu p-t-110 p-b-70 bg1-pattern">
		<div className="container">
			<div className="row">
				<div  className="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
					<div className="wrap-item-mainmenu p-b-22">
						<h3 className="tit-mainmenu tit10 p-b-25">
							STARTERS
								</h3>
								
							<Rests id={1} />
						</div>
						</div>
						<div  className="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
					<div className="wrap-item-mainmenu p-b-22">
						<h3 className="tit-mainmenu tit10 p-b-25">
							MAIN
						</h3>
							<Rests id={2} />
						</div>
						</div>
						<div  className="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
					<div className="wrap-item-mainmenu p-b-22">
						<h3 className="tit-mainmenu tit10 p-b-25">
							DRINKS
						</h3>
							<Rests id={3} />
						</div>
						</div>
						<div  className="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
					<div className="wrap-item-mainmenu p-b-22">
						<h3 className="tit-mainmenu tit10 p-b-25">
							DESSERT
						</h3>
							<Rests id={4} />
						</div>
						</div>
						
				</div>
		</div>
	</section>
    </div>
  )
}

export default Main_menu

				// 		<div className="col-md-10 col-lg-6 p-l-35 p-l-15-lg m-l-r-auto">
				// 	<div className="wrap-item-mainmenu p-b-22">
				// 		<h3 className="tit-mainmenu tit10 p-b-25">
				// 			Dessert
				// 		</h3>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					tempus aliquet
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$9.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Proin lacinia nisl ut ultricies posuere nulla
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					scelerisque
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$19.35
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Sed fermentum eros vitae eros
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					Cras maximus
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$5.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Duis pharetra ligula at urna dignissim
				// 			</span>
				// 		</div>
				// 	</div>
				// 		</div>
				// 		<div className="col-md-10 col-lg-6 p-l-35 p-l-15-lg m-l-r-auto">
				// 	<div className="wrap-item-mainmenu p-b-22">
				// 		<h3 className="tit-mainmenu tit10 p-b-25">
				// 			Dessert
				// 		</h3>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					tempus aliquet
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$9.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Proin lacinia nisl ut ultricies posuere nulla
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					scelerisque
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$19.35
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Sed fermentum eros vitae eros
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					Cras maximus
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$5.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Duis pharetra ligula at urna dignissim
				// 			</span>
				// 		</div>
				// 	</div>
				// 		</div>
				// 		<div className="col-md-10 col-lg-6 p-l-35 p-l-15-lg m-l-r-auto">
				// 	<div className="wrap-item-mainmenu p-b-22">
				// 		<h3 className="tit-mainmenu tit10 p-b-25">
				// 			Dessert
				// 		</h3>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					tempus aliquet
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$9.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Proin lacinia nisl ut ultricies posuere nulla
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					scelerisque
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$19.35
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Sed fermentum eros vitae eros
				// 			</span>
				// 		</div>

				// 		<div className="item-mainmenu m-b-36">
				// 			<div className="flex-w flex-b m-b-3">
				// 				<a href="#" className="name-item-mainmenu txt21">
				// 					Cras maximus
				// 				</a>

				// 				<div className="line-item-mainmenu bg3-pattern"></div>

				// 				<div className="price-item-mainmenu txt22">
				// 					$5.79
				// 				</div>
				// 			</div>

				// 			<span className="info-item-mainmenu txt23">
				// 				Duis pharetra ligula at urna dignissim
				// 			</span>
				// 		</div>
				// 	</div>
				// </div>