

import React from 'react' 
import classes from './Paging.module.scss'
const Paging = (props) =>{
   
    let navList = Object.keys(props.components).map((cmp)=>(<li key={cmp} 
    onClick={()=>props.active(cmp)} 
    className={props.activeCmp===cmp ?classes['active']:''}>
    </li>))
    
    return(
        <div className={classes['paging-container']} >
        <ul>
            {navList}
        </ul>

        </div>
    )
}
export default Paging 