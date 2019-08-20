import React from 'react' 
import classes from './About.module.scss'
const about = (props) =>{
    
    return(
        <div>
            <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} >ABOUT</h1>
            <p className={classes['paragraph']} > 
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
            <div className={classes['img-container-4']} ></div>
            <div className={classes['img-container-3']} ></div>
            <div className={classes['img-container-2']} ></div>
            <div className={classes['img-container-1']} ></div>
        </div>
    )
}
export default about 