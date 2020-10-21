import React from 'react';
import classes from './CourseInfoPage.module.css'
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/TopBar/TopBar";
import SectionStatus from "../../Components/SectionStatus/SectionStatus";


class CourseInfoPage extends React.Component{
   
  render(){
       const topicDiv = JSON.parse(localStorage.getItem("myData")).Topics;

  return(
          <>
        <TopBar/>
        <div className  ={classes.OuterDiv}>
                    <img className = {classes.courseImg} src = {this.props.location.course!=undefined?this.props.location.course.logo:null} alt ={this.props.location.course!=undefined?this.props.location.course.title:null}/>
                    <div className = {classes.info}>
                        <p className = {classes.CardHead}>{this.props.location.course!=undefined?this.props.location.course.title:null}</p>
                        <p className={classes.percent}>0%</p>
                    <p className = {classes.units}>Avg. Score</p>
    
                    </div>  
        {
           topicDiv.map(item => {
            return <SectionStatus id = {item.id} title ={item.title} status ={item.status}/>
           })
           } 
           </div>
           </>
    
      )
    }
}


export default CourseInfoPage