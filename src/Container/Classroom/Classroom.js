import React from 'react';
import axios from 'axios';
import classes from '../Classroom/Classroom.module.css';
import CardSection from '../../Components/CardSection/CardSection';



class Classroom extends React.Component {

    state={
        classData : [],
    }

    componentDidMount(){
        axios.get("https://5efbca1c80d8170016f76869.mockapi.io/shoplaneHome")
        .then(response =>{
            this.setState({classData:[...response.data]});
            console.log(this.state.classData)
        })
        .catch(err=>{
            console.log("API call failed")
        })
    }

    render(){
        return(
            <div className={classes.MainContainer}>
                <p className={classes.Heading}>Classroom</p>
                <p className={classes.SubHeading}>Your Enrolled Courses</p>
                <div className={classes.CoursesSection}>
                    {
                        this.state.classData.map(item =>{
                            return <CardSection key={item.id} 
                            ThumbnailUrl={item.Thumbnail}  
                            CourseName={item.Title}
                            link={item.link}
                            />  
                        })
                    }
                                    
                </div>
            </div>
        )
    }
}

export default Classroom ;