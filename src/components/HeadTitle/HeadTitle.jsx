

import React from 'react' 
import classes from './HeadTitle.module.scss'

const headTitle = (props) =>{
    let animationNum;
     switch(props.title){
         case 'HOME': animationNum = ` ${classes['active1']}`
         break;
         case 'ABOUT': animationNum = ` ${classes['active2']}`
         break;
         case 'PORTFOLIO': animationNum = ` ${classes['active3']}`
         break;
         case 'SKILLS': animationNum = ` ${classes['active4']}`
         break;
         case 'CONTACT': animationNum = ` ${classes['active5']}`
         break;
         default:  animationNum = ''

    }
    let titleClass = (props.activeAnimation)? `${classes['title']} ${classes['activeSub']}`: classes['title']
    let subTitleClass = (props.activeAnimation)? `${classes['sub-title']} ${classes['active']}`: classes['sub-title']
    
    return(
         <div className={classes['main-container']}>
                <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
                <h1 className={titleClass + animationNum} >{props.title}</h1>
        </div>
    )
}
export default headTitle 