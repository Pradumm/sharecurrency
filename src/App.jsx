import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HedNavbar from './component/navbar/HedNavbar';
import Footer from './component/footer/Footer';
import AboutUs from './component/about/AboutUs';
import Blog from './component/blog/Blog';
import News from './component/news/News';
import FeaturesPage from './component/features/FeaturesPage';
import ContactUs from './component/user/ContactUs';
import Login from './component/user/Login';
import Register from './component/user/Register';
import Services from './component/Services/Services';

function App() {

  return (
    <>
      <Router>
      <div className="app-container">
      <HedNavbar />
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />
            <Route path="/featuresPage" element={<FeaturesPage />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
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
