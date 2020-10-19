import React from "react";
import classes from "./SectionStatus.module.css";
import { Link  } from "react-router-dom";

const SectionStatus = (props) => {
    return( 
       <>
        
            <div className = {classes.innerDiv}>
            <Link to = "problem" className = {classes.linkDesign}>
                <div  className ={classes.statusDiv}>
                     <div>
                        <p className = {classes.TopicName}>{props.id}.)</p>
                        <p className = {classes.TopicName}>{props.title}</p>
                       </div> 
                     <p className = {classes.showStatus}>{props.status}</p>
                  </div>  
                </Link>   
            </div>
       
       </>
    )
}

export default SectionStatus