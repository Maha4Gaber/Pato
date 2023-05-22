import React from 'react'
import Signup from '../Footer/Signup'
import Dinner from './Dinner'
import Lunch from './Lunch'
import Main_menu from './Main_menu'
import Footer from '../Footer/Footer'
const Menu = () => {
  return (
    <div>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{backgroundImage: 'url(images/bg-title-page-01.jpg)'}}>
        <h2 className="tit6 t-center">
          Pato Menu
        </h2>
      </section>
      <Main_menu />
      <Lunch />
      <Dinner />
      <Signup />
      <Footer />
      
      
    </div>
  )
}

export default Menu
