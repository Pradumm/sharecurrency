import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './component/footer/Footer';
import AboutUs from './component/about/AboutUs';
import Blog from './component/blog/Blog';
import Login from './component/user/Login';
import ContactUs from './component/user/ContactUs';

function App() {

  return (
    <>
      <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/login' element={<Login />}></Route>
            <Route path='/contactus' element={<ContactUs />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
