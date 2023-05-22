import React from 'react'
import { Fragment } from 'react';

const Booking = () => {
  
  let hours = []
  let people = [];
  for(let i = 9; i < 18; i++){
    hours.push(i)
  }
  for(let i = 2; i < 13; i++){
    people.push(i)
  }
  // console.log(c);


  return (
    <div>
      	<section id='booking' className="section-booking bg1-pattern p-t-100 p-b-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-b-30">
                <div className="t-center">
                  <span className="tit2 t-center">
                    Reservation
                  </span>

                  <h3 className="tit3 t-center m-b-35 m-t-2">
                    Book table
                  </h3>
                </div>

                <form className="wrap-form-booking">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="txt9">
                        Date
                      </span>

                      <div className="wrap-inputdate pos-relative txt10 size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input className="my-calendar bo-rad-10 sizefull txt10 p-l-20" type="text" name="date" />
                        <i className="btn-calendar fa fa-calendar ab-r-m hov-pointer m-r-18" aria-hidden="true"></i>
                      </div>

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

                    <div className="col-md-6">
                      <span className="txt9">
                        Name
                      </span>

                      <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name"/>
                      </div>

                      <span className="txt9">
                        Phone
                      </span>

                      <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="phone" placeholder="Phone" />
                      </div>

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

              <div className="col-lg-6 p-b-30 p-t-18">
                <div className="wrap-pic-booking size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                  <img src="images/booking-01.jpg" alt="IMG-OUR" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Booking
