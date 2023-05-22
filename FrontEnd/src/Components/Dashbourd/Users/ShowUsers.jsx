import React from 'react'
import { NavLink } from 'react-router-dom'
import Aside from '../Aside'
import PopularBlog from '../PopularBlog'

const ShowUsers = () => {
  return (
    <div>
      <section className=" dash ">
        <div className=" container-fluid ">
          <div className='row'>
            <div className='col-lg-2 col-md-3  p-0 '>
              <Aside />
            </div>
            <div className='col-lg-10 col-md-10 p-0 bo-l-1'>
              <PopularBlog />
              <h3 className='color0 p-l-50 p-b-10 p-t-20 '>
                <i className='fa fa-list-alt m-r-10 '></i>
                All Users
              </h3>
              <div className='d-flex justify-content-between p-l-3 p-r-50 '>
                <div className='seach p-l-50' >
                  <span className="txt9">
                        Search
                      </span>
                      <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="search" placeholder="Search"/>
                      </div>
                </div>
                <div className='seach p-l-50' >
                  <div className="wrap-btn-slide1 animated " data-appear="zoomIn">
                  <NavLink to={'/dashbourd/adduser'} className="btn4 m-t-20 flex-c-m size1 txt3 trans-0-4">
                    Add New User
                  </NavLink>
                </div>
                </div>
              </div>
              <div className=' p-l-50 p-r-50 bo-rad-10'>
                <table className="table table-hover  ">
                  <thead className='bo-rad-10'>
                    <tr className='bo-rad-10'>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default ShowUsers
