import React from 'react'
import classes from './RecordingPage.module.css'
import axios from 'axios'

const RecordingPage=(props)=>{

    const [state,setState]=React.useState({})
    React.useEffect(()=>{
        if(props.location.session==undefined && Object.keys(state)==0){
            axios.get("https://5f89f1c718c33c0016b3146e.mockapi.io/session")
            .then(resp =>{
                resp.data.map(item=>{
                    if(item.id==props.match.params.id){
                        console.log(item.id)
                        setState({recording:item.recording})
                        
                    }
                })
            })
            .catch(err =>{
                console.log("Call Failed");
            })
        }
    })

    return(
        <div className={classes.RecordingDiv}>
            <iframe className={classes.RecordingPlayer} src={props.location.recording!=undefined?props.location.recording:state.recording}></iframe>
        </div>
    )
}

export default RecordingPage;