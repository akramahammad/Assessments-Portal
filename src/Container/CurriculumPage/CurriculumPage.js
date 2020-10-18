import React from 'react'
import SessionDetails from '../../Components/SessionDetails/SessionDetails';
import classes from './CurriculumPage.module.css'
import axios from 'axios'

const CurriculumPage=()=>{
    const [state,setState]=React.useState({activePage:"Units",activeSession:null,session:localStorage.getItem("SessionData")==undefined?[]:JSON.parse(localStorage.getItem("SessionData")),course:localStorage.getItem("StudentData")==undefined?{}:JSON.parse(localStorage.getItem("StudentData"))});
    React.useEffect(()=>{
        if(state.session.length==0){
        axios.all([
            axios.get("https://5f89f1c718c33c0016b3146e.mockapi.io/session"),
            axios.get("https://5f89f1c718c33c0016b3146e.mockapi.io/info")
            
        ])    
        .then(resp =>{
            localStorage.setItem("SessionData",JSON.stringify(resp[0].data));
            localStorage.setItem("StudentData",JSON.stringify(resp[1].data[0]));
            setState({...state,session:[...resp[0].data],course:{...resp[1].data[0]}});
            })
        .catch(err =>{
            console.log("Call failed")
        })
        }
    })
        
      

    const handleClick=(id)=>{
        if(state.activeSession==id){
            setState({...state,activeSession:null})
        }
        else{
            setState({...state,activeSession:id})
        }
        
    }
    
    return(
        <div className={classes.Main}>
            <div className={classes.NavigationPanel}>
                <div onClick={()=>{setState({...state,activePage:"Units"})}} className={state.activePage=="Units"?`${classes.NavigationItem} ${classes.Active}`:classes.NavigationItem}>Units</div>
                <div onClick={()=>{setState({...state,activePage:"Grades"})}} className={state.activePage=="Grades"?`${classes.NavigationItem} ${classes.Active}`:classes.NavigationItem}>Grades</div>
            </div>
            <div className={state.activePage=="Units"?(state.session.length>0?classes.UnitsMainDiv:classes.None):classes.None}>
                <div className={classes.LeftSection}>
                    <div className={classes.CourseDetailsDiv}>
                        <div className={classes.CourseImageDiv}>
                        <img src={state.course.module!=undefined?state.course.module.image:null}/> 
                        <p>{state.course.module!=undefined?state.course.module.desc:null}</p>
                        </div>
                        <div className={classes.StudentSummary}><span>Grades :</span><span>{state.course.module!=undefined?state.course.studentInfo.grade:null}</span></div>
                        <div className={classes.StudentSummary}><span>Total Attendance :</span><span> {state.course.module!=undefined?state.course.studentInfo.totalAttendance:null}</span></div>
                        <div className={classes.StudentSummary}><span>Last week Attendance :</span><span> {state.course.module!=undefined?state.course.studentInfo.weekAttendance:null}</span></div>
                    </div>
                    <div className={classes.ModuleSection}>
                        <p>Module Plan</p>
                        {state.course.module!=undefined?state.course.week.map(item=>{
                            return <p>{item}</p>
                        }):null}
                    </div>
                </div>
                <div className={classes.RightSection}>
                    {
                        state.session.map(item=>{
                            return <SessionDetails handleClick={handleClick} key={item.id} session={item} active={state.activeSession==item.id?true:false}/>
                        })
                    }

                </div>
            </div>
            <div className={state.activePage=="Grades"?classes.GradesMainDiv:classes.None}>
                <div className={classes.ContentDiv}>
                    <div>
                        <img src={state.course.module!=undefined?state.course.module.image:null} alt="course_img"/>
                    </div>
                    <div>
                        <h3 className={classes.CourseHeading}>{state.course.module!=undefined?state.course.module.desc:null}</h3>
                        <div className={classes.StudentInfoDiv}>
                            <div className={classes.StudentInfo}>
                                <p>{state.course.module!=undefined?state.course.studentInfo.rank:null}</p>
                                <p>Class Rank</p>
                            </div>
                            <div className={classes.StudentInfo}>
                                <p>{state.course.module!=undefined?state.course.studentInfo.score:null}</p>
                                <p>Avg. Score</p>
                            </div>
                            <div className={classes.StudentInfo}>
                                <p>{state.course.module!=undefined?state.course.studentInfo.shs:null}</p>
                                <p>SHS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={classes.NoTopic}>No Topics Available</p>
            </div>
        </div>
    )
}

export default CurriculumPage;