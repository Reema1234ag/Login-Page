import React from 'react'
import './formcss.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const icons={fontSize:"50px", margin:"9px 22px"}
function Footer() {
    return (
        <div>
        <div className="form">
            <form className="formstyle">
                <label>Username</label>
                <br></br>
                <input type='text' placeholder='username' name='Username' id='inputs'/>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type='passward' placeholder='passward' name='Password' id='inputs'/>
                <br></br>
                <label>Select Course</label>
                <br></br>
               <select name='Select Course' id='inputs'>
                   <option>Computer Science</option>
                   <option>Electronics</option>
               </select>
            </form>
        </div>
        <div className="main-footer">
            <div className="main-img">
            <div className='div1'>
            <div className='footerlist'>
            <ul className="list">
                <li className="mainheading"><b>ABOUT US</b></li>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <li>Our Team</li>
                <li>What We Do</li>
            </ul>
            </div>
            <div className='footerlist'>
            <ul className="list">
                <li className="mainheading"><b>Important Links</b></li>
                <li>Sell your Scarp</li>
                <li>Join Your Team</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className='footerlist'>
            <ul className="list">
                <li className="mainheading"><b>Contact US</b></li>
                <li><LocationOnIcon style={{fontSize:"28px"}}/> 16, South Arjun Nagar,Agra</li>
                <li><EmailIcon style={{fontSize:"28px"}}/> Info@Kabaditeachno.com</li>
                <li><CallIcon style={{fontSize:"28px"}}/><small> +91 9897063955 ,</small><small>+91 9897063955</small></li>
                
            </ul>
            </div>
            </div>
            <div className="contact">
            <h1>Connect with us</h1>
            <div className="icons">
            <FacebookIcon style={icons}/>
            <InstagramIcon style={icons}/>
            <LinkedInIcon style={icons}/>
            </div>
            <h2 className="lastheading">All Rights Reseverd by Kabadi Techno Private Limited</h2>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
