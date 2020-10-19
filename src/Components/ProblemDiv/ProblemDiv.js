import React from "react";
import classes from "./ProblemDiv.module.css";

const ProblemDiv = (props) => {
    return(
     <div className = {classes.ContainerDiv}>
         <div className = {classes.ProblemInfo}>
           <p className ={classes.probNum}>Problem {props.id}</p>
            <div className = {classes.innerDiv}>
                <p>{props.title}</p>
                <div className = {classes.FlexDiv} >
                    <p>Max Score: {props.MaxScore}, </p>
                    <p>Level: {props.level}</p>
                </div>
            </div>
            <button className = {classes.probStatus}>{props.status}</button>    
         </div>
     </div>
        
    )
}

export default ProblemDiv