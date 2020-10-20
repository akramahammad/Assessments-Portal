import React from 'react';
import {Link} from 'react-router-dom';
import classes from '../CardSection/CardSection.module.css';

const CardSection = (props) => {
    return (
        <Link to={`/modules/${props.link}`}>
        <div className={classes.CourseCard}>
            <div className={classes.Thumbnail}>
                <img src={props.ThumbnailUrl} alt="Course Thumbnail"/>
            </div>
            <div className={classes.CourseData}>
                <div className={classes.CourseName}>
                    {props.CourseName}                                    
                </div>
                <div className={classes.CourseUnits}>
                9 Units
                </div>
                                    
            </div>
        </div>
        </Link>
    )
}

export default CardSection;