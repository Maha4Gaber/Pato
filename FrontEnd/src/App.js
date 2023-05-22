import React from 'react';
import { Route,Routes } from 'react-router-dom';


  //  ----------------Style ---------
import './App.css';
import './assets/css/util.css';
import './assets/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/themify/themify-icons.css'
import './assets/animate/animate.css'
import './assets/css-hamburgers/hamburgers.min.css'
import './assets/animsition/css/animsition.min.css'
import './assets/select2/select2.min.css'
import './assets/daterangepicker/daterangepicker.css'
import './assets/slick/slick.css'
import './assets/lightbox2/css/lightbox.min.css'
import './assets/css/animate.css'



  // ---------------Component---------


import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Reservation from './Components/Reservation/Reservation';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import BlogDetail from './Components/Blog/BlogDetail';
import Dashbourd from './Components/Dashbourd/Dashbourd.jsx';
import AddUser from './Components/Dashbourd/Users/AddUser';
import ShowUsers from './Components/Dashbourd/Users/ShowUsers';
import Addrest from './Components/Dashbourd/Rests/Addrest';
import ShowRests from './Components/Dashbourd/Rests/ShowRests';
import Addblog from './Components/Dashbourd/Blogs/AddBlog';
import Showblogs from './Components/Dashbourd/Blogs/ShowBlogs';
import UpdateRest from './Components/Dashbourd/Rests/UpdateRest';
import NaveBar from './Components/Navebar/NaveBar';
import UpdateBlog from './Components/Dashbourd/Blogs/UpdateBlog';

function App() {

  return (
    <div className="App">
      <NaveBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog_detail'  element={<BlogDetail />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashbourd' element={<Dashbourd />} />
        <Route path='/dashbourd/adduser' element={<AddUser />} />
        <Route path='/dashbourd/showusers' element={<ShowUsers />} />
        <Route path='/dashbourd/addrest' element={<Addrest />} />
        <Route path='/dashbourd/showrests' element={<ShowRests />} />
        <Route path='/dashbourd/addblog' element={<Addblog />} />
        <Route path='/dashbourd/showblogs' element={<Showblogs />} />
        <Route path='/dashbourd/updaterest' element={<UpdateRest />} />
        <Route path='/dashbourd/updateblog' element={<UpdateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
        // <Counter />
