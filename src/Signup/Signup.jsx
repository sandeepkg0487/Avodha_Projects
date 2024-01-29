import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css';
import './Signup.css';


const Signup = () => {

    const nothing = (e) => {
      
    }
    
  return (
    <>
      <div className="container signup">
        <div className="leftContainer bggreen p4" >
            
         <div className="wraper  flexbox colorwhite">
         <h3>Welcome back!</h3>
          <p>
            Welcome back! We are so happy to have you here it's great to see you
            again. We hope you had a safe and enjoyable time away
          </p>
          <Link className='none' to="/"><button className="button  white mt10 mb20 w100 p10 br5">Already have accound ? Signin</button></Link>
          
          
         </div>
        
        </div>

        <div className="rightContainer bgwhite p4">
        <h1>Signup</h1>
         
                <form action="">
                    <input className='w100 mt10 p10 br5'placeholder="&#x1F4E7; Email" type="email" name="email" id="email" />
                    <input className='w100 mt10 p10 br5'placeholder="&#128100; Username" type="text" name="username" id="username" />
                    <input className='w100 mt10 p10 br5' placeholder="&#x25CF;&#x25CF;&#x25CF;&#x25CF;" type="password" name="password" id="password" />
                    <input className='w100 mt10 p10 br5' placeholder="&#9990; mobile" type="password" name="password" id="password" />
                    <button className="button bggreen colorwhite mt10 w100 p10 br5" onClick={nothing}>Signup</button>
                </form>
              
         
            <p>or signin with</p>
            <div className="flexboxrow">
              <div className="icons"><div className="facebook icon m10"></div></div>
              <div className="icons"><div className="google icon m10"></div></div>
              <div className="icons"><div className="linkedin icon m10"></div></div>
            </div>
            </div>
      </div>
    </>
  )
}

export default Signup
