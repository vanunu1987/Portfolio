

import React from 'react' 
import classes from './Paging.module.scss'
const Paging = (props) =>{
    let diff = props.height/2-280
    let left= 75+diff+'px'
    const tampletObj = {home:false,about:false,skills:false,portfolio:false,contact:false}
    const navList = []
    for (let cmp in props.components){
    navList.push((<li key={cmp} 
    onClick={()=>props.active({...tampletObj,[cmp]:true})} 
    className={props.components[cmp]?classes['active']:''}>
    </li>))}
    
    return(
        <div className={classes['paging-container']} style={{left: left}}>
        <ul>
            {navList}
        </ul>

        </div>
    )
}
export default Paging 