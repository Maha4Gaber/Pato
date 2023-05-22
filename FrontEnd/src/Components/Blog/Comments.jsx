import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogComments } from './CommentsSlice';

const Comments = (props) => {
  let dispatch = useDispatch();

   useEffect(() => {
			dispatch(fetchBlogComments(props.blog_id))    
		},[5])
  const comments = useSelector((state) => state.comments);

  return (
    <div>
      {
        comments.map(comment => {
          return (
            <div key={comment.id}>
            <div  className="size29 position-relative d-flex flex-wrap bo1red bo-rad-10 m-t-5 p-l-20 p-t-10 m-b-20">
                <span className='m-b-30 d-block'>{comment.comment}</span>
                <p className=' fs-13 m-0 ab-b-r10 '>{comment.name}</p>
              </div>
            </div>
        )
        })
      }
      {props.comment}
    </div>
  )
}

export default Comments
