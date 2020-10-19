import React from 'react';
import classes from "./App.module.css";
import { BrowserRouter ,Route, Switch  } from "react-router-dom";
import ProblemPage from "./Container/ProblemPage/ProblemPage";
import SectionStatus from './Components/SectionStatus/SectionStatus';
import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/Footer/Footer";
import CourseCard from "./Components/CourseCard/CourseCard";
import CourseInfoPage from "./Container/CourseInfoPage/CourseInfoPage";
import CardWrapper from "./Container/CardWrapper/CardWrapper";
import axios from 'axios';

class App extends React.Component {
  state = {
        cardGrid: [],
    }
 componentDidMount() {
 
  
      axios.get("https://5ee248988b27f30016094878.mockapi.io/CourseCard")
        .then(response => {
            window.localStorage.setItem("myData", JSON.stringify(response.data[0]["CourseData"]))
       
        })
        .catch(err => {
          console.log(err)
        })
    
  }
  render(){
  return (
      <div>   
      <BrowserRouter>  
          <TopBar/>
         
               <Route exact path = "/" component ={CardWrapper} />
               <Route exact path = "/CourseStatus" component ={CourseInfoPage} />
               <Route exact path = "/problem" component ={ProblemPage} />
            <Footer/>
         </BrowserRouter> 
      </div>
    
  );
  }
}

export default App;
