import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Aside from '../Aside'
import { fetchRest, updaterestfun } from './Slices/UpdateRestSlice'

const UpdateRest = () => {
  const updaterest = useSelector(state => state.updaterest)
  console.log(updaterest);
  const Rest_id = useSelector(state => state.Rest_id.id)
  const dispatch = useDispatch();
  let data = {
    name: updaterest.name,
    decs : updaterest.decs,
    img:updaterest.img ,
    price: updaterest.price,
    menu_id:updaterest.menu_id
  }
  let handelSubmit = () => {
    dispatch(updaterestfun({ Rest_id,data }))
    
    // console.log(data);

  }
  useEffect(() => {
    dispatch(fetchRest(Rest_id))
  },[]);
  return (
    <div>
      <section className=" dash  ">
        <div className=" container-fluid ">
          <div className='row'>
            <div className='col-lg-2 col-md-3  p-0 '>
              <Aside />
            </div>
            <div className='col-lg-9 col-md-9 bo-l-1'>
              <h3 className='color0 p-l-50 p-b-10 p-t-50 '>
                <i className='fa fa-list-alt m-r-10 '></i>
                Update Rest
              </h3>
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
                            placeholder={updaterest.name}
                            type="text" name="Name"
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
                            placeholder={updaterest.decs} type="text"
                            name="Name"
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
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='seach p-l-50' >
                        <span className="txt9">
                            Change Price 
                          </span>
                          <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                          <input className="bo-rad-10 sizefull txt10 p-l-20"
                            placeholder={updaterest.price}
                            type="number" name=""
                            onChange={(e)=> data.price =e.target.value}
                            />
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

export default UpdateRest
