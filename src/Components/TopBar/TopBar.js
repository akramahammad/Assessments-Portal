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
                <div className = {classes.infoContainer}>
                    <i class="fas fa-bell"></i>
                    <p>Anmol Tanwer</p>  
                </div>
            </div>
        </>
    )
}

export default TopBar