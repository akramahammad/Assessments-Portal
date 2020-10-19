import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard.js";
import classes from "./CardWrapper.module.css";
import { Link  } from "react-router-dom";
import axios from 'axios';
//import TopBar from "../../Components/TopBar/TopBar.js";
// import Footer from "../../Components/Footer/Footer.js";

class CourseWrapper extends React.Component {

     render() {
          const CardData = JSON.parse(localStorage.getItem("myData")).ArenaPage;
        console.log(CardData)
        return (
            <div className = {classes.Container}>
            <h3 className = {classes.mainHead}>Practice Arena</h3>
            <h5 className = {classes.skills}>All Skills</h5>
            <div className = {classes.flexDiv}>
                 {
                 CardData.map(item => {
                  return <CourseCard id = {item.id} logo ={item.logo} title ={item.title} units = {item.units}/>
                 })
                 } 
             </div> 
        </div>
        )
     }     
}

export default CourseWrapper 