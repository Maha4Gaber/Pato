import React from 'react'
import Aside from '../Aside'

const AddUser = () => {
  return (
    <div>
      <section class=" dash ">
        <div className=" container-fluid ">
          <div className='row'>
            <div className='col-lg-2 col-md-3  p-0 '>
              <Aside />
            </div>
            <div className='col-lg-9 col-md-9 bo-l-1'>
              <h3 className='color0 p-l-50 p-b-10 p-t-50 '>
                <i className='fa fa-list-alt m-r-10 '></i>
                Add User
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault()
              }}>
                <div className='m-t-50 container-fluid'>
                  <div className=' row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Name
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="Name" placeholder="Search"/>
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            E-Mail
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input className="bo-rad-10 sizefull txt10 p-l-20" type="email" name="Name" placeholder="Search"/>
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Phone
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="Name" placeholder="Search"/>
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Address 
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="Name" placeholder="Search"/>
                          </div>
                      </div>
                    </div>
                    <div className='col-12 p-l-50' >
                      <div className='seach p-l-50 d-flex justify-content-center' >
                        <div className="wrap-btn-slide1 animated " data-appear="zoomIn">
                          <button
                            className="btn4 m-t-20 flex-c-m size1 txt3 trans-0-4"
                            type='submit'
                          >
                          Add New User
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AddUser
