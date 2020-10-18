import React from 'react';
import classes from './TopBar.module.css'

const TopBar = () => {
    return(
        <>
            <div className = {classes.TopContainer}>
                <div className = {classes.innerContainer}>
                    <h3>Edyoda</h3>
                    <nav>
                        <p>Practice Arena</p>
                        <p>Classroom</p>
                        <p>View Jobs</p>
                    </nav>
                </div>
                <div className = {classes.dropdown}>
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
        </>
    )
}

export default TopBar