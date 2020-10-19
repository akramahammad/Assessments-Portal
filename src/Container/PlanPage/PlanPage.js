import React from 'react'
import classes from './PlanPage.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PlanPage=(props)=>{

    const [state,setState]=React.useState({})
    React.useEffect(()=>{
        if(props.location.session==undefined && Object.keys(state)==0){
            axios.get("https://5f89f1c718c33c0016b3146e.mockapi.io/session")
            .then(resp =>{
                console.log(resp.data)
                resp.data.map(item=>{
                    if(item.id==props.match.params.id){
                        console.log(item.id)
                        setState({...item})
                        
                    }
                })
            })
            .catch(err =>{
                console.log("Call Failed");
            })
        }
    })

    return(
        <div className={classes.MainDiv}>
            <h1>Session Plan</h1>
            <h3 className={classes.PlanHeading}>Topics:</h3>
            {
                props.location.session!=undefined?props.location.session.topics.map(item=>{
                    return <p>{`- ${item}`}</p>
                }):
                state.topics!=undefined?state.topics.map(item=>{
                    return <p>{`- ${item}`}</p>
                }):null
            }
            <h3 className={classes.PlanHeading}>Session Link:</h3>
            <p>{props.location.session!=undefined?props.location.session.link:state.link!=undefined?state.link:null}</p>
            <h3 className={classes.PlanHeading}>Meeting Password</h3>
            <p>{props.location.session!=undefined?props.location.session.password:state.password!=undefined?state.password:null}</p>
        </div>
    )
}

export default PlanPage;