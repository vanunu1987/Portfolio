

import React from 'react' 
import classes from './HeadTitle.module.scss'

const headTitle = (props) =>{
    let animationNum;
     switch(props.title){
         case 'HOME': animationNum = "active1"
         break;
         case 'ABOUT': animationNum = "active2"
         break;
         case 'PORTFOLIO': animationNum = "active3"
         break;
         case 'SKILLS': animationNum = "active4"
         break;
         case 'CONTACT': animationNum = "active5"
         break;


    }
    let titleClass = (props.activeAnimation)? `${classes['title']} ${classes[animationNum]}`: classes['title']
    let subTitleClass = (props.activeAnimation)? `${classes['sub-title']} ${classes['active']}`: classes['sub-title']
    
    return(
         <div>
                <p className={subTitleClass} ><span>Yair Vanunu</span> full stack web developer</p>
                <h1 className={titleClass} >{props.title}</h1>
        </div>
    )
}
export default headTitle 