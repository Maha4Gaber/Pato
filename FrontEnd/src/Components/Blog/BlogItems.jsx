import React from 'react'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import { fetchBlog } from './blogSlice';
import  { saveBlogid } from './SaveBlog_id';
import { fetchSingleBlog } from './SingleBlog';
import { useNavigate } from "react-router-dom";


const BlogItems = () => {
	
  const blogs = useSelector((state) => state.blog);
	const dispatch = useDispatch();
	const navigate = useNavigate();
		useEffect(() => {
			dispatch(fetchBlog())    
		},[5])

  return (
    <div>
      {
        blogs.map(blog => {
          let img = blog.img < 10 ? '0' : '';
          return (
            <div key={blog.id} class="blo4 p-b-63">
							<div class="pic-blo4 hov-img-zoom bo-rad-10 pos-relative">
								<div  onClick={() =>
									{
									dispatch(saveBlogid(blog.id))
									dispatch(fetchSingleBlog(blog.id))
									localStorage.setItem('blog_id',blog.id)
									setTimeout(() => {
										navigate("/blog_detail");
									}, 1000);

									}
								}>
									<img src={"images/blog-" +img+ blog.img +".jpg"} alt="IMG-BLOG" />
								</div>

								<div class="date-blo4 flex-col-c-m">
									<span class="txt30 m-b-4">
										{blog.created_at.slice(8,10)}
									</span>

									<span class="txt31">
										Apr, {blog.created_at.slice(0,4)}
									</span>
								</div>
							</div>

							<div class="text-blo4 p-t-33">
								<h4 class="p-b-16">
									<div   onClick={() =>
									{
										dispatch(saveBlogid(blog.id))
										dispatch(fetchSingleBlog(blog.id))
										localStorage.setItem('blog_id',blog.id)
										setTimeout(() => {
										navigate("/blog_detail");
									}, 1000);
									}
								} class="tit9">{blog.name}</div>
								</h4>

								<div class="txt32 flex-w p-b-24">
									<span>
										by Maha
										<span class="m-r-6 m-l-4">|</span>
									</span>

									<span>
										{blog.created_at.slice(8,10)} Apr, {blog.created_at.slice(0,4)}
										<span class="m-r-6 m-l-4">|</span>
									</span>

									<span>
										Cooking, Food
										<span class="m-r-6 m-l-4">|</span>
									</span>

									<span>
										{blog.Comments_num} Comments
									</span>
								</div>

								<p>
									{blog.decs}
								</p>

								<div
									onClick={() => {
											dispatch(saveBlogid(blog.id))
											dispatch(fetchSingleBlog(blog.id))
											localStorage.setItem('blog_id',blog.id)
											setTimeout(() => {
												navigate("/blog_detail");
											}, 1000);
										}
									}
									class="dis-block txt4 m-t-30">
									Continue Reading
									<i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
								</div>
							</div>
						</div>
          )
        })
      }
    </div>
  )
}

export default BlogItems
