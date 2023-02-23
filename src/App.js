import './App.css';
import { BrowserRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import { Children } from 'react';

const isAuth = true

function App() {
  return <BrowserRouter>
    <Navigation />
    <Routes>
      
     <Route path="/" element={<Home />} />
     {/* <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} /> */}
     <GuestRoute path='/authenticate'>
       <Authenticate />
     </GuestRoute>


    </Routes>
  </BrowserRouter>
}

const GuestRoute = ({children, ...rest}) =>{
  return(
    <Route 
    {...rest}
    render={({ location }) =>{
     return isAuth ? (
      <Navigate 
       to={{
        pathname: '/rooms',
        state: { from: location},
       }} />
     ): (
      children
     )
    } }
    >
    
    </Route>
  )
}

export default App;
