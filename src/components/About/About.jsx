import React from 'react' 
import classes from './About.module.scss'
const about = (props) =>{
    let diff = props.height/2-280
    let leftSub= 75+diff+'px'
    let left= 35+diff+'px'
    let left1= 350+diff+'px'
    let left2= 392+diff+'px'
    let left3= 427+diff+'px'
    let left4= 406+diff+'px'
    let leftP= 50+diff+'px'
    return(
        <div>
            <p className={classes['sub-title']} style={{left: leftSub}}><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} style={{left: left}}>ABOUT</h1>
            <p className={classes['paragraph']} style={{left: leftP}}> 
            Full Stack developer with hands-on <br/>
            experience in developing Progressive <br/>
            Web Applications & Single-Page <br/>
            Applications using advanced web <br/> 
            technologies such as VUE, React, <br/> 
            Node. Recently changed path of <br/>
            career due to passion to code. <br/>
            Holds <br/>
            Industrial Eng degree ,3 years <br/>
            experience as Data Analyst.
            </p>
            <div className={classes['img-container-4']} style={{left: left4}}></div>
            <div className={classes['img-container-3']} style={{left: left3}}></div>
            <div className={classes['img-container-2']} style={{left: left2}}></div>
            <div className={classes['img-container-1']} style={{left: left1}}></div>
        </div>
    )
}
export default about 