import React from 'react'
import Navbar from './Navbar';
import './signup.css';
import { Link } from 'react-router-dom';




export const Signup = () => {
  return (
    <>
    <Navbar/>
    <br /> <br />
    <div className="box">
    <div className="noi">
    <soi>Crisis Aid 360 </soi>
    {/* <toi>360</toi> */}
    <br/><br/>
<coo>Be a part of greater<br/></coo>
<poo>good</poo>

    </div>
    <div className="koi">
      <div className="woi">
      Signup
      </div>
     
      <br/>
      <div className="input">
        <input type="text" placeholder="Name" /><br/>
        <input type="password" placeholder="Password" /><br/>
        <input type="password" placeholder=" Re-enter Password" /><br/>
        <input type="number" placeholder="Mobile number" /><br/>
        <input type="text" placeholder="Location" /><br/>
        <input type="number" placeholder="Unique ID" /><br/>
        <input type="link" placeholder="Photo" /><br/>
        <select>
            <option value="indian">Type</option>
        
            <option value="nepali">Fire Brigade</option>
    

            <option value="others">Hospital</option>
            <option value="others">Police</option>

        </select>

      </div>
      <div className="R">
      <button2><Link to="/" style={{ textDecoration: "none", color:"White" }} >Sign-up</Link></button2>

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />


      </div>
    </div>
    </div>
    <br /> <br />



    </>
  )
}
export default Signup