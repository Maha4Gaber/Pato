import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { saveBlogid } from './SaveBlog_id';
import { fetchSingleBlog, postComment } from './SingleBlog';
import { useNavigate } from "react-router-dom";


const Detail = () => {
  const blog_id = useSelector((state) => state.blog_id.id);
  const blog  = useSelector((state) => state.SingleBlog);
	const navigate = useNavigate();
    useEffect(() => {
			dispatch(fetchSingleBlog(blog_id))    
		},[5])
	
let img = blog.img < 10 ? '0' : '';
  const dispatch = useDispatch()
  let name,email,comment='';

	let submetH = (e) => {
		e.preventDefault()
		dispatch(postComment({comment,name,email}))
		dispatch(saveBlogid(blog.id))
		dispatch(fetchSingleBlog(blog.id))
		localStorage.setItem('blog_id',blog.id)
		setTimeout(() => {
		navigate("/blog_detail");
		}, 1000);
		
	}
  return (
    <Fragment>
  
			{
				
        <div class="p-t-80 p-b-124 bo5-r p-r-50 h-full p-r-0-md bo-none-md">
						<div class="blo4 p-b-63">
							<div class="pic-blo4 hov-img-zoom bo-rad-10 pos-relative">
									<Link to={'/blog_detail'} onClick={() =>
										dispatch(saveBlogid(blog.id))
									// localStorage.setItem('blog_id',blog.id)
								}>
									<img src={"images/blog-"+img+ blog.img +".jpg"} alt="IMG-BLOG" />
								</Link>

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
										<Link to={'/blog_detail'} onClick={() =>
											dispatch(saveBlogid(blog.id))
									// localStorage.setItem('blog_id',blog.id)
								} class="tit9">{blog.name}</Link>
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

								<a href="blog-detail.html" class="dis-block txt4 m-t-30">
									Continue Reading
									<i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
								</a>
							</div>
						</div>

							<form class="leave-comment p-t-10"
								onSubmit={submetH}							>
								<h4 class="txt33 p-b-14">
									Leave a Comment
								</h4>
								<p>
									Your email address will not be published. Required fields are marked *
								</p>
								<textarea class="bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40"
									onChange={(e)=>  comment=e.target.value}
									name="commentent" placeholder="Comment..."></textarea>
								<div class="size30 bo2 bo-rad-10 m-t-3 m-b-20">
										<input class="bo-rad-10 sizefull txt10 p-l-20"
											onChange={(e) => {
												name = e.target.value
											}}
											type="text" name="name" placeholder="Name *" />
								</div>
								<div class="size30 bo2 bo-rad-10 m-t-3 m-b-20">
										<input class="bo-rad-10 sizefull txt10 p-l-20"
											onChange={(e)=>  email=e.target.value}
											type="text" name="email" placeholder="Email *" />
								</div>
								<button type="submit" class="btn3 flex-c-m size31 txt11 trans-0-4">
									Post Comment
								</button>
							</form>

							<div class="m-t-20 ">
							</div>
                <Comments blog_id={blog_id} />							
      		</div>
      }
						
				
    </Fragment>
  )
}

export default Detail
