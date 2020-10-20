import React from 'react'
import classes from './SessionDetails.module.css'
import {Link} from 'react-router-dom'

const SessionDetails=(props)=>{
    return(
        <div className={classes.SessionMainDiv}>
        <div onClick={()=>{props.handleClick(props.session.id)}} className={classes.SessionDiv}>
            <span>{props.session.description}</span>
            <img className={props.active?classes.ActiveArrow:classes.InactiveArrow} src="https://assessments.edyoda.com/static/images/chevron.svg" alt="dropdown arrow"/>
        </div>
        <div className={props.active?classes.Link:classes.None}><Link to={{pathname:`/curriculum/plan/${props.session.id}`, session:{...props.session}}}>Session Plan</Link></div>
        <div className={props.active?classes.Link:classes.None}><Link to={{pathname:`/curriculum/recording/${props.session.id}`,recording:props.session.recording}}>Session Recording</Link></div>
        </div>
    )
}

export default SessionDetails;