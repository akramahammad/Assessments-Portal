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
        {
           topicDiv.map(item => {
            return <SectionStatus id = {item.id} title ={item.title} status ={item.status}/>
           })
           } 
           </div>
          <Footer/> 
           </>
    
      )
    }
}


export default CourseInfoPage