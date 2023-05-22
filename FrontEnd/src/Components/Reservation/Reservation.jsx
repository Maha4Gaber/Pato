import React, { Fragment } from 'react'
import Footer from '../Footer/Footer';

const Reservation = () => {

	let hours = []
  let people = [];
  for(let i = 9; i < 18; i++){
    hours.push(i)
  }
  for(let i = 2; i < 13; i++){
    people.push(i)
  }



  return (
		<div>
      	<section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage: 'url(images/bg-title-page-02.jpg)'}}>
          <h2 className="tit6 t-center">
            Reservation
          </h2>
      </section>
      <section className="section-reservation bg1-pattern p-t-100 p-b-113">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 p-b-30">
					<div className="t-center">
						<span className="tit2 t-center">
							Reservation
						</span>

						<h3 className="tit3 t-center m-b-35 m-t-2">
							Book table
						</h3>
					</div>

					<form className="wrap-form-reservation size22 m-l-r-auto">
						<div className="row">
							<div className="col-md-4">
								<span className="txt9">
									Date
								</span>

								<div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date" />
									<i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
								</div>
							</div>

							<div className="col-md-4">
								<span className="txt9">
									Time
								</span>

								<div className="wrap-inputtime size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<select className="selection-1 selection-1 bo-rad-10 sizefull txt10 p-l-20" name="time">
                        {
                          hours.map(h => {
                            return (
                              <Fragment>
                                <option value={h}>{h}:00</option>
                                <option value={h}>{h}:30</option>

                              </Fragment>
                            )
                          })
                          }
                        </select>
								</div>
							</div>

							<div className="col-md-4">
								<span className="txt9">
									People
								</span>

								<div className="wrap-inputpeople size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<select className="selection-1 bo-rad-10 sizefull txt10 p-l-20" name="people">
                          <option value={1}>1 person</option>
                          {
                          hours.map(p => {
                            return (
                              <Fragment>
                                <option value={p} >{p} people</option>
                              </Fragment>
                            )
                          })
                          }
									</select>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4">
								<span className="txt9">
									Name
								</span>

								<div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
								</div>
							</div>

							<div className="col-md-4">
								<span className="txt9">
									Phone
								</span>

								<div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="phone" placeholder="Phone" />
								</div>
							</div>

							<div className="col-md-4">
								<span className="txt9">
									Email
								</span>

								<div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
									<input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email" />
								</div>
							</div>

						</div>

						<div className="wrap-btn-booking flex-c-m m-t-6">
							<button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">
								Book Table
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="info-reservation flex-w p-t-80">
				<div className="size23 w-full-md p-t-40 p-r-30 p-r-0-md">
					<h4 className="txt5 m-b-18">
						Reserve by Phone
					</h4>

					<p className="size25">
						Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus.
						<span className="txt25">Nulla vulputate</span>
						, lectus vel volutpat efficitur, orci
						<span className="txt25">lacus sodales</span>
						 sem, sit amet quam:
						<span className="txt24">(001) 345 6889</span>
					</p>
				</div>

				<div className="size24 w-full-md p-t-40">
					<h4 className="txt5 m-b-18">
						For Event Booking
					</h4>

					<p className="size26">
						Donec feugiat ligula rhoncus:
						<span className="txt24">(001) 345 6889</span>
						, varius nisl sed, tinci-dunt lectus sodales sem.
					</p>
				</div>

			</div>
		</div>
			</section>
			<Footer />
    </div>
  )
}

export default Reservation
