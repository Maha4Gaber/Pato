import React from 'react'
import $ from "jquery";
const Back = () => {

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $(".myBtn").css('display','flex');
        } else {
            $(".myBtn").css('display','none');
        }
    });

  $('#myBtnb').on("click",function() {
    $(window).animate({ scrollTop: 0 },500);
    });
  
  
  return (
    <div  >
      <div class="btn-back-to-top bg0-hov myBtn" id="myBtnb">
        <span class="symbol-btn-back-to-top">
          <i class="fa fa-angle-double-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default Back
