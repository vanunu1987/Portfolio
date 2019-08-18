import React from 'react' 
import classes from './Contact.module.scss'
const contact = (props) =>{
    let diff = props.height/2-280
    let leftSub= 75+diff+'px'
    let left= 35+diff+'px'
   
    return(
        <div>
            <p className={classes['sub-title']} style={{left: leftSub}}><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} style={{left: left}}>CONTACT</h1>
            
        </div>
    )
}
export default contact 