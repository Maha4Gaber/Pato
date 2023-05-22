import React from 'react'
import Footer from '../Footer/Footer'
import Asid from './Asid'
import BlogItems from './BlogItems'

const Blog = () => {
  return (
    <div>
      <section class="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage:' url(images/bg-title-page-03.jpg)'}}>
        <h2 class="tit6 t-center">
          Blog
        </h2>
      </section>
      <div class="bread-crumb bo5-b p-t-17 p-b-17">
        <div class="container">
          <a href="index.html" class="txt27">
            Home
          </a>

          <span class="txt29 m-l-10 m-r-10">/</span>

          <span class="txt29">
            Blog
          </span>
        </div>
      </div>
      <div class="container">
			<div class="row">
				<div class="col-md-8 col-lg-9">
            <div class="p-t-80 p-b-124 bo5-r h-full p-r-50 p-r-0-md bo-none-md">
              
              
						<BlogItems />


              
              

						<div class="pagination flex-l-m flex-w m-l--6 p-t-25">
							<a href="#" class="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
							<a href="#" class="item-pagination flex-c-m trans-0-4">2</a>
						</div>
					</div>
				</div>

		<Asid />
			</div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
