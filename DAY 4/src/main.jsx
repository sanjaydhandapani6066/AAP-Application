import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './pages/landing.jsx'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
import Login from './pages/login.jsx'

import SignUp from './pages/register.jsx'
import NavBar from './components/UI/NavBar.jsx'
import Dummy from './pages/dummy.jsx'
import Home from './pages/home.jsx'
import Loader from './components/UI/loader.jsx'
import Courses from './pages/courses.jsx'
import Admin from './pages/admin.jsx'
import Users from './pages/users.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/dummy" element={<Dummy/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/users" element={<Users/>}/>
      {/* <Route path="/" element={<Landing/>}/> */}
    </Routes>
  </Suspense>
  </BrowserRouter>
)
