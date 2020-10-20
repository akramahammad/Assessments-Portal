import React from 'react';
import {Link} from 'react-router-dom';

import classes from './ModuleCard.module.css';

const ModuleCard= (props) => {
    return(
        <div className={classes.CardWrapper} >         
        <div className={classes.CardContainer}>
            <div className={classes.ModuleThumbnail}>
                <img src={props.thumbnail} alt="module thumbnail" />
            </div>
            <div className={classes.CardHeading}>{props.CardHeading}</div>
            <div className={classes.ModuleFaculty}>
                <img src={props.avatar} alt="avatar" />
                <div>{props.ModuleFaculty}</div>
            </div>
            <div className={classes.modDuration}>{props.duration}</div>
        </div>
        </div>
    )
}

export default ModuleCard;