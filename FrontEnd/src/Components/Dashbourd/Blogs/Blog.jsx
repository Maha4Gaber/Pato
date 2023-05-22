import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  console.log(props.blogs);
  
  return (
    <div>
      {22222222222
      //   filterblog.map(blog => {
      //     return (
      //       <tr key={blog.id}>
      //         <th scope="row">{blog.id}</th>
      //         <td>{blog.name}</td>
      //         <td>{blog.star}</td>
      //         <td>{blog.created_at.slice(0,10)}</td>
      //         <td>{blog.Comments_num}</td>
      //         <td className='d-flex justify-content-center    '>
      //           <Link to={'/'}
      //             className="btn4 flex-c-m p-l-20 p-r-20 m-l-10 p-t-8 p-b-8 txt3 trans-0-4"
      //           >
      //           Upbate
      //           </Link>
      //           <button
      //             className="btn4 flex-c-m p-l-20 p-r-20 m-l-10 p-t-8 p-b-8 txt3 trans-0-4"
      //           >
      //           Delete
      //         </button>
      //         </td>
      //       </tr>
      //   )
      // })
    }
    </div>
  )
}

export default Blog
