import React from 'react';
import classes from './TopBar.module.css';
import { Link  } from "react-router-dom";

const TopBar = () => {
    return(
        
            <div className = {classes.TopContainer}>
                <div className = {classes.innerContainer}>
                    <h3>Edyoda</h3>
                    <nav>
                        <Link to ="/" className ={classes.linkDesign}>
                            <p>Practice Arena</p> 
                        </Link>
                         <Link to ="/curriculam" className ={classes.linkDesign}>
                            <p>Classroom</p>
                        </Link>
                        <p>View Jobs</p>
                    </nav>
                </div>
                <div className = {classes.dropdown}>

                    <Link to = "/"><img className  ={classes.MenuBar} src ="https://assessments.edyoda.com/static/images/burger-svg-icon.svg" alt="menubar"/>
                   </Link>

                    <img className  ={classes.MenuBar} src ="https://assessments.edyoda.com/static/images/burger-svg-icon.svg" alt="menubar"/>
                   

                </div>
                <div className = {classes.infoContainer}>
                   <i class="fa fa-bell-o fa-lg">
    
                        <span className ={classes.notifyNum}>5</span>
                    </i>
                    <div className = {classes.dropdown}>
                    <p className = {classes.AdminName}>Anmol Tanwer</p> 
                        <div className = {classes.AdminDropDown}>
                        <p>Profile</p>
                        <p>Update Job Profile</p>
                        <hr/>
                        <p>Logout</p>
                        <p>Change Password</p>   
                    </div>
                    </div> 
                   <i class="fas fa-caret-down"></i>
                     
                </div>
            </div>
           
      
    )
}

export default TopBar;
