import React from 'react';
import ProblemPage from "./Container/ProblemPage/ProblemPage";
import SectionStatus from './Components/SectionStatus/SectionStatus';
import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/Footer/Footer";
import CourseCard from "./Components/CourseCard/CourseCard";
import CourseInfoPage from "./Container/CourseInfoPage/CourseInfoPage";
import CardWrapper from "./Container/CardWrapper/CardWrapper";
import CurriculumPage from './Container/CurriculumPage/CurriculumPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PlanPage from './Container/PlanPage/PlanPage';
import RecordingPage from './Container/RecordingPage/RecordingPage';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulePage';
import Dsa from './Components/Dsa/Dsa';



class App extends React.Component {

  render(){
  return (

      <div>   
          <BrowserRouter>        
          <TopBar/>

         <Switch>
               <Route exact path = "/" component ={CardWrapper} />
               <Route exact path = "/CourseStatus" component ={CourseInfoPage} />
               <Route exact path = "/problem" component ={ProblemPage} />
                <Route exact path="/classroom" component={Classroom} />
                <Route exact path="/modules/RB-020420" component={ModulesPage} />
                <Route exact path="/modules/DSA-130720" component={Dsa} />        
                <Route exact path="/curriculum/plan/:id" component={PlanPage}/>
               <Route exact path="/curriculum/recording/:id" component={RecordingPage}/>
                <Route exact path="/curriculum" component={CurriculumPage}/>
                </Switch>
            
         </BrowserRouter> 
         <Footer/>
      </div>
    
  );
  }
}

export default App;
