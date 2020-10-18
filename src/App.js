import React from 'react';
import TopBar from './Components/TopBar/TopBar';
import Footer from './Components/Footer/Footer';
import CurriculumPage from './Container/CurriculumPage/CurriculumPage';
import classes from './App.module.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PlanPage from './Container/PlanPage/PlanPage';
import RecordingPage from './Container/RecordingPage/RecordingPage';

function App() {
  return (
    <div>
        <TopBar/>
         <BrowserRouter>
         <Switch>
            <Route path="/module/plan/:id" component={PlanPage}/>
            <Route path="/module/recording/:id" component={RecordingPage}/>
            <Route path="/" component={CurriculumPage}/>
         </Switch> 
         </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
