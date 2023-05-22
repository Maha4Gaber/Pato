import React from 'react'

const PopularBlog = () => {
  return (
    <div className=' container-fluid bo-b-1'>
      <div className='row'>
      <div className='m-4 p-4 col-4 '>
        <div className='head p-l-15 p-t-2 p-b-5  '>
          Popular Blog
          
        </div>
        <div className='body  p-b-5  '>
          <div className='blog'>
            <img src="../images/blog-04.jpg" alt="" />
            <div className='fs-12 p-2 m-0 flex-wrap d-flex justify-content-between' >
              Blog Name <span>Blog Comments :20</span>
            </div>
            <div className='fs-16  m-b-0 m-t-10 p-1 t-center bo-t-1' >Blog Stars </div>
          </div>        
      </div>
      </div>
    </div>
    </div>
  )
}

export default PopularBlog
