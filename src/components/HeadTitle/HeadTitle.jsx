

import React from 'react' 
import classes from './HeadTitle.module.scss'

const headTitle = (props) =>{
    let titleClass = (props.activeAnimation)? `${classes['title']} ${classes['active']}`: classes['title']
    
    return(
         <div>
                <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
                <h1 className={titleClass} >{props.title}</h1>
        </div>
    )
}
export default headTitle 