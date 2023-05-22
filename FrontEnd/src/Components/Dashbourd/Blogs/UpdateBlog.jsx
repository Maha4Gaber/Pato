import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Aside from '../Aside'
import { fetchBlog, updateBlogfun } from './Slices/UpdatBlog'

const UpdateBlog = () => {
  const updateBlog = useSelector(state => state.updateblog)
  console.log(updateBlog);

  const Blog_id = useSelector(state => state.Blog_id.id)
  // console.log(Blog_id);
  const dispatch = useDispatch();
  let data = {
    name: updateBlog.name,
    decs : updateBlog.decs,
    img:updateBlog.img ,
    // price: updateBlog.price,
    // menu_id:updateBlog.menu_id
  }
  console.log(data);

  let handelSubmit = () => {
    dispatch(updateBlogfun({ Blog_id,data }))
    
    // console.log(data);

  }
  useEffect(() => {
    dispatch(fetchBlog(Blog_id))
  },[]);
  return (
    <div>
      <section className=" dash ">
        <div className=" container-fluid ">
          <div className='row'>
            <div className='col-lg-2 col-md-3  p-0 '>
              <Aside />
            </div>
            <div className='col-lg-9 col-md-9 bo-l-1'>
              <h3 className='color0 p-l-50 p-b-10 p-t-50 '>
                <i className='fa fa-list-alt m-r-10 '></i>
                Update Blog
              </h3>hgfg
              <form onSubmit={(e) => {
                e.preventDefault()
                handelSubmit()
              }}>
                <div className='m-t-50 container-fluid'>
                  <div className=' row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Change  Name
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            // value={updateBlog.name}
                            placeholder={updateBlog.name}
                            type="text" 
                            onChange={(e) => {
                              data.name = e.target.value
                            }}
                            />
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Change  Describtion
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            placeholder={updateBlog.decs} type="text"
                            onChange={(e)=> data.decs =e.target.value}
                            />
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Change Img
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            type="number" name=""
                            onChange={(e)=> data.img=e.target.value}
                            placeholder="" />
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
                          Update Rest
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

export default UpdateBlog
