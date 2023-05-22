import React from 'react'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Asid from './Asid';
import Comments from './Comments';
import Detail from './Detail';
import { saveBlogid } from './SaveBlog_id';
import { fetchSingleBlog, postComment } from './SingleBlog';


const BlogDetail = (props) => {
	// useEffect(() => {
	// 		dispatch(fetchSingleBlog())    
	// 	},[5])
	// const { blog } = useSelector((state) => state.singleblog.data);
	// console.log(blog);
		const dispatch = useDispatch();
		
		


	
	
	
  return (
    <div>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage:' url(images/bg-title-page-03.jpg)'}}>
        <h2 className="tit6 t-center">
          Blog
        </h2>
      </section>
        <div className="bread-crumb bo5-b p-t-17 p-b-17">
          <div className="container">
            <a href="index.html" className="txt27">
              Home 
            </a>

            <span className="txt29 m-l-10 m-r-10">/</span>

            <a href="blog.html" className="txt27">
              Blog
            </a>

            <span className="txt29 m-l-10 m-r-10">/</span>

            <span className="txt29">
						{
							// blog.name
						}
            </span>
          </div>
      </div>
			<div class="container">
			<div class="row ">
					<div class="col-md-8 col-lg-9">
						<Detail />
						</div>
				<Asid />
			</div>
		</div>
    </div>
  )
}

export default BlogDetail
