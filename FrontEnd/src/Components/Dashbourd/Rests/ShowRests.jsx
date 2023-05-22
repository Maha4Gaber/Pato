import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Aside from '../Aside'
import PopularBlog from '../PopularBlog'
import { Deleterest, deleterestfun } from './Slices/DeleteRestSlice'
import { fetchRests } from './Slices/GetRestsSlice'
import { saveid } from './Slices/SaveRestId'


const ShowRests = () => {
   const [filterrest,setstate] = useState(null);
  const Rests = useSelector(state => state.drest)
  let search = (e) => {
    let filterR = Rests.filter(blog => blog.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setstate(filterR)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRests())
  },[]);
  
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
                All Rests
              </h3>
              <div className='d-flex justify-content-between p-l-3 p-r-50 '>
                <div className='seach p-l-50' >
                  <span className="txt9">
                        Search
                      </span>
                      <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                        <input className="bo-rad-10 sizefull txt10 p-l-20"
                        type="text"
                        onChange={search}
                        name="search" placeholder="Search" />
                      </div>
                </div>
                <div className='seach p-l-50' >
                  <div className="wrap-btn-slide1 animated " data-appear="zoomIn">
                  <NavLink to={'/dashbourd/adduser'} className="btn4 m-t-20 flex-c-m size1 txt3 trans-0-4">
                    Add New Rest
                  </NavLink>
                </div>
                </div>
              </div>
              <div className=' p-l-50 p-r-50 bo-rad-10'>
                <table className="table table-hover  ">
                  <thead className='bo-rad-10'>
                    <tr className='bo-rad-10'>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Properties </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Rests.map(rest => {
                        return (
                          <tr key={rest.id}>
                            <th scope="row">{rest.id}</th>
                            <td>{rest.name}</td>
                            <td>{rest.price}</td>
                            <td className='d-flex justify-content-center    '>
                              <Link to={'/dashbourd/updaterest'}
                                onClick={() => {
                                  dispatch(saveid(rest.id))
                                }}
                                className="btn4 flex-c-m p-l-20 p-r-20 m-l-10 p-t-8 p-b-8 txt3 trans-0-4"
                              >
                              Upbate
                              </Link>
                              <button
                                onClick={() => {
                                  dispatch(saveid(rest.id))
                                  dispatch(deleterestfun(rest.id))
                                }}
                                className="btn4 flex-c-m p-l-20 p-r-20 m-l-10 p-t-8 p-b-8 txt3 trans-0-4"
                              >
                              Delete
                            </button>
                            </td>
                          </tr>
                        )
                      })
                    }
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

export default ShowRests
