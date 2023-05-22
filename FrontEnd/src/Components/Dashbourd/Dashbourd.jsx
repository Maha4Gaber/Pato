import React from 'react'
import Aside from './Aside'
import './Dashbourd.css'
const Dashbourd = () => {
  return (
    <div>
      <section class=" dash ">
        <div className=" container-fluid ">
          <div className='row'>
            <div className='col-lg-2 col-md-3  p-0 '>
              <Aside />
            </div>
            <div className='col-lg-9 col-md-9 bo-l-1'>
              dopoi
            </div>
          </div>

        </div>
      </section>
      
    </div>
  )
}

export default Dashbourd
