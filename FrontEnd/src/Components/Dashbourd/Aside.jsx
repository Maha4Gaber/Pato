import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <Fragment>
      <div className='asid'>
        <div className='p-4'>
          <img src="../images/icons/logo2.png" className='p-l-40' alt="IMG-LOGO" data-logofixed="images/icons/logo2.png"  />
        
        </div>
        <div className='name p-l-20  p-t-12 '>
          <h5>Hello! Maha Gaber</h5>
        </div>
        <div className='users p-l-20 bo-t-1 m-t-20   '>
          <h6 className='p-2 m-t-20'>
            <i className='fa fa-users color0 m-r-15 '></i>
            Users
          </h6>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-user-plus  color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/adduser'}>
              Add User
            </NavLink>
          </p>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-users    color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/showusers'}>
            Show Users
            </NavLink>
          </p>
        </div>
        <div className='users p-l-20 bo-t-1 m-t-20   '>
          <h6 className='p-2 m-t-20'>
            <i className='fa fa-meetup   color0 m-r-15 '></i>
            Rests
          </h6>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-user-plus  color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/addrest'}>
              Add Rest
            </NavLink>
          </p>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-users    color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/showrests'}>
            Show Rests
            </NavLink>
          </p>
        </div>
        <div className='users p-l-20 bo-t-1 m-t-20   '>
          <h6 className='p-2 m-t-20'>
            <i className='fa fa-users color0 m-r-15 '></i>
            Blogs
          </h6>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-user-plus  color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/addblog'}>
              Add Blog
            </NavLink>
          </p>
          <p className=' b-0 p-l-20  color2'>
            <i className='fa fa-users    color0 m-r-15 '></i>
            <NavLink to={'/dashbourd/showblogs'}>
            Show Blogs
            </NavLink>
          </p>
        </div>
      </div>

      
    </Fragment>
  )
}

export default Aside
