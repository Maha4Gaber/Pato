
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRest } from './Slices/Restslice';

const Rests = (props) => {

  const rests = useSelector((state) => state.rest);
  // console.log(rests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRest(props.id))    
  },[5])

  return (
    <div>
      {
        rests.map(rest => {
          return (
            <div key={rest.id} >
              <div className="item-mainmenu m-b-36">
                <div className="flex-w flex-b m-b-3">
                  <a href="#" className="name-item-mainmenu txt21">
                    {rest.name} {rest.id}
                  </a>

                  <div className="line-item-mainmenu bg3-pattern"></div>

                  <div className="price-item-mainmenu txt22">
                    ${rest.price}
                  </div>
                </div>

                <span className="info-item-mainmenu txt23">
                  {rest.decs}
                </span>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Rests
