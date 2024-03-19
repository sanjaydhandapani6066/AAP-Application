import React, { Suspense } from 'react'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
const SignUp = lazy(() => import('./pages/register.jsx'))
const Landing = lazy(() => import('./pages/landing.jsx'))
const Login = lazy(() => import('./pages/login.jsx'))
const NavBar = lazy(() => import('./components/UI/NavBar.jsx'))
const Dummy = lazy(() => import('./pages/dummy.jsx'))
const Home = lazy(() => import('./pages/home.jsx'))
const Loader = lazy(() => import('./components/UI/loader.jsx'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dummy" element={<Dummy/>}/>
        {/* <Route path="/" element={<Landing/>}/> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
  )
}

export default App