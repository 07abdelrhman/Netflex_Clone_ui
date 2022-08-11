import "./home.scss";
import React from 'react'

import Featured from "../../components/featured/Featured";
import List from '../../components/list/List';
import Navbar from './../../components/Navbar/Navbar';
import Watch from './../watch/Watch';
import Register from "../register/Register";
import Login from './../login/Login';


const Home = () => {
  return (<>
    <div className='home'>
       <Navbar/>
      <Featured type="genre"/>
      <List/>
      <List/>
      <List/>
      <List/>
  
   
    </div>
    {/* <Watch/>
    <Register/> */}
    </>

    
  )
}

export default Home;
