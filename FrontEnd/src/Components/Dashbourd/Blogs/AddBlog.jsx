import React from 'react'
import { useDispatch } from 'react-redux'
import Aside from '../Aside'
import { AddNewBlog } from './Slices/AddBlogSlice'

const AddBlog = () => {
  let dispatch=useDispatch()
   let data = {
    name: '',
    decs : '',
    img:'',
    type:'',
  }
  let handelsubmit = () => {
    dispatch(AddNewBlog(data))
    console.log(data);
  }
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
                Add Blog
              </h3>
              <form  onSubmit={(e) => {
                e.preventDefault()
                handelsubmit()
              }}>
                <div className='m-t-50 container-fluid'>
                  <div className=' row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Name
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            onChange={e => {
                              data.name=e.target.value
                            }}
                            type="text"  placeholder="Name" />
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Describtion
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            onChange={e => {
                              data.decs=e.target.value
                            }}
                            type="text" placeholder="Describtion" />
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Type
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            onChange={e => {
                              data.type=e.target.value
                            }}
                            type="text" placeholder="Describtion" />
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Img
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            onChange={e => {
                              data.img=e.target.value
                            }}
                            type="number"
                            name="" placeholder="" />
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

export default AddBlog
