import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Aside from '../Aside'
import PopularBlog from '../PopularBlog'
import { deleteblogfun } from './Slices/DeleteblogSlice'
import { fetchBlogs } from './Slices/GetBlogsSlice'
import { saveBlog_id } from './Slices/SaveBlogId'

const ShowBlogs = () => {
  const [filterblog,setstate] = useState(null);
  const blogs = useSelector(state => state.dblog)
  let search = (e) => {
    let filterblo = blogs.filter(blog => blog.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setstate(filterblo)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs())
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
                All Blogs
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
                  <NavLink to={'/dashbourd/addblog'} className="btn4 m-t-20 flex-c-m size1 txt3 trans-0-4">
                    Add New Blog
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
                      <th scope="col">Stars</th>
                      <th scope="col">updated At</th>
                      <th scope="col">Comments</th>
                      <th scope="col">Properties </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      blogs.map(blog => {
                        return (
                          <tr key={blog.id}>
                            <th scope="row">{blog.id}</th>
                            <td>{blog.name}</td>
                            <td>{blog.star}</td>
                            <td>{blog.updated_at.slice(0,10)}</td>
                            <td>{blog.Comments_num}</td>
                            <td className='d-flex justify-content-center    '>
                              <Link to={'/dashbourd/updateblog'}
                                onClick={() => {
                                  dispatch(saveBlog_id(blog.id))
                                }}
                                className="btn4 flex-c-m p-l-20 p-r-20 m-l-10 p-t-8 p-b-8 txt3 trans-0-4"
                              >
                              Upbate
                              </Link>
                              <button
                                onClick={() => {
                                  dispatch(saveBlog_id(blog.id))
                                  dispatch(deleteblogfun(blog.id))
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

export default ShowBlogs
