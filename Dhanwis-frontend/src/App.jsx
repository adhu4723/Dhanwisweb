import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import OurWork from './pages/OurWork'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop'
import ContactUs from './pages/ContactUs'
import AdminLayout from './layout/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import Layout from './layout/Layout'
import Careers from './pages/Careers'
import Blogs from './pages/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' '>
  
    <ScrollToTop/>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/ourworks' element={<OurWork/>}></Route>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/aboutus' element={<AboutUs/>}></Route>
    <Route path='/contactus' element={<ContactUs/>}></Route>
    <Route path='/careers' element={<Careers/>}></Route>
    <Route path='/blog' element={<Blogs/>}></Route>

    </Route>
    <Route path="/admin" element={<AdminLayout />}>
     <Route path='dashboard' element={<Dashboard/>}></Route>
    </Route>

   </Routes>
   </div>
    </>
  )
}

export default App
