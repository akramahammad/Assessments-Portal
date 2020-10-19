import React from "react";
import ProblemDiv from "../../Components/ProblemDiv/ProblemDiv.js";
import classes from "./ProblemPage.module.css";
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/TopBar/TopBar";

class ProblemPage extends React.Component{
    render(){
         const prolemSection = JSON.parse(localStorage.getItem("myData")).problems;

        return(
            <>
                <TopBar/>
                <h4>Problems</h4>
                {
                  prolemSection.map(item => {
                    return <ProblemDiv id = {item.id} title ={item.title} status ={item.status} MaxScore = {item.MaxScore} level ={item.level} status ={item.status}/>
                  })   
                }
              
            </>
        )
    }
}
export default ProblemPage