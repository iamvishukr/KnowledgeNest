import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "../src/App.css"
import Home from './components/Home/Home';
import Header from './components/layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import PaymentFail from './components/Payment/PaymentFail';
import Subscribe from './components/Payment/Subscribe';
import NotFound from './components/NotFound/NotFound';
import CoursePage from './components/Course/CoursePage';
import Profile from './components/Profile/Profile';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:id' element={<CoursePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/request' element={<Request />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path='/paymentfail' element={<PaymentFail />} />
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
  )
}
export default App;
