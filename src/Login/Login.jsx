import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const nothing =(event) => {
    
  }
  
  return (
    <>
      <div className="container">
        <div className="leftContainer p4">
            <h1>Signin</h1>
            <div className="inputelement flexbox">
              <input className='w100 m10 p10 br5'placeholder="&#128100; Username" type="text" name="username" id="username" />
              <input className='w100 m10 p10 br5' placeholder="&#x25CF;&#x25CF;&#x25CF;&#x25CF;" type="password" name="password" id="password" />
              <button className="button bggreen colorwhite m10 w100 p10 br5" onClick={nothing}>Signin</button>
            </div>
            <p>or signin with</p>
            <div className="flexboxrow">
              <div className="icons"><div className="facebook icon m10"></div></div>
              <div className="icons"><div className="google icon m10"></div></div>
              <div className="icons"><div className="linkedin icon m10"></div></div>
            </div>
        </div>

        <div className="rightContainer bggreen p4">
         <div className="wraper  flexbox colorwhite">
         <h3>Welcome back!</h3>
          <p>
            Welcome back! We are so happy to have you here it's great to see you
            again. We hope you had a safe and enjoyable time away
          </p>
          <Link className="none" to="/Signup"><button className="button  white mt10 mb20 w100 p10 br5">No accound yet? Signup</button></Link>       
         </div>
        </div>
      </div>
    </>
  );
};

export default Login;
