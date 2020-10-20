import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard.js";
import classes from "./CardWrapper.module.css";
import { Link  } from "react-router-dom";
import axios from 'axios';

class CourseWrapper extends React.Component {
     state={
          CardData:[]
     }
     componentDidMount(){
  
          axios.get("https://5ee248988b27f30016094878.mockapi.io/CourseCard")
            .then(response => {
                window.localStorage.setItem("myData", JSON.stringify(response.data[0]["CourseData"]))
                this.setState({CardData:JSON.parse(localStorage.getItem("myData")).ArenaPage})           
            })
            .catch(err => {
              console.log(err)
            })
          console.log("helloo")
     }
     render() {
          const CardData = localStorage.getItem("myData")!=undefined?JSON.parse(localStorage.getItem("myData")).ArenaPage:[];
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