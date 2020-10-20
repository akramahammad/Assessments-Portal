import React from 'react';
import ProblemPage from "./Container/ProblemPage/ProblemPage";
import SectionStatus from './Components/SectionStatus/SectionStatus';
import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/Footer/Footer";
import CourseCard from "./Components/CourseCard/CourseCard";
import CourseInfoPage from "./Container/CourseInfoPage/CourseInfoPage";
import CardWrapper from "./Container/CardWrapper/CardWrapper";
import axios from 'axios';
import CurriculumPage from './Container/CurriculumPage/CurriculumPage';
import classes from './App.module.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PlanPage from './Container/PlanPage/PlanPage';
import RecordingPage from './Container/RecordingPage/RecordingPage';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulePage';
import Dsa from './Components/Dsa/Dsa';



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
         <Switch>
               <Route exact path = "/" component ={CardWrapper} />
               <Route exact path = "/CourseStatus" component ={CourseInfoPage} />
               <Route exact path = "/problem" component ={ProblemPage} />
                 <Route exact path="/Classroom" component={Classroom} />
     <Route exact path="/modules/RB-020420" component={ModulesPage} />
    <Route exact path="/modules/DSA-130720" component={Dsa} />        
       <Route excat path="/module/plan/:id" component={PlanPage}/>
               <Route exact path="/module/recording/:id" component={RecordingPage}/>
                <Route exact path="/curriculam" component={CurriculumPage}/>
                </Switch>
            <Footer/>
         </BrowserRouter> 
      </div>
    
  );
  }
}

export default App;
