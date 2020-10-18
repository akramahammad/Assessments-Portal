import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return(
        <div className = {classes.MainConatiner}>
            <div>
                <h3 className = {classes.footerHead}>edyoda</h3>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
             </div> 
             <div>
                <h3 className = {classes.footerHead}>Resources</h3>
                <p>Courses</p>
                <p>Learning Videos</p>
                <p>Edyoda Stories</p>
                <p>University</p>
             </div>    
             <div>
                <h3 className = {classes.footerHead}>For Enterprises</h3>
                <p>Hire Edyoda Graduates</p>
                <h3 className = {classes.footerHead}>Quick Links</h3>
                <p>Learn and Earn</p>
                <p>Become a Learning-Enabler</p>
                <p>Tips for Learning-Enabler</p>
                <p>Request New Topic</p>   
             </div> 
             <div>
                <h3 className = {classes.footerHead}>Connect</h3>
                <p>2nd Floor #188, Survey No. - 123/1, Incubes Building Next to McDonalds, ITPL Main Rd, Brookefield, Bengaluru, Karnataka-560037, India</p>
                <div className = {classes.contactDiv}>
                   <p><img className = {classes.ContactIcon} src = "https://assessments.edyoda.com/static/images/Email.svg" atl ="email"/>hello@edyoda.com</p>
                   <p><img className = {classes.ContactIcon} src = "https://assessments.edyoda.com/static/images/Call.svg" alt ="phone" />+91 8971554184</p>
                 </div>  
                <div className ={classes.socialIcon}>
                     <img src ="https://assessments.edyoda.com/static/images/landmark.png" className = {classes.IconImage} atl ="loaction"/>
                     <img src ="https://assessments.edyoda.com/static/images/twitter.svg" className = {classes.IconImage} atl ="twitter"/>
                     <img src ="https://assessments.edyoda.com/static/images/fbimage.png" className = {classes.IconImage}  atl ="facebook"/>
                     <img src ="https://assessments.edyoda.com/static/images/linkden.png" className = {classes.IconImage} atl ="Linkedin"/>
                </div>
                   <div className = {classes.copyrightText} >
                      <p >© 2020</p>               
                      <p >zekeLabs Technologies Private Limited</p>
                   </div>   
             </div>
        </div> 
    )
}
export default Footer
