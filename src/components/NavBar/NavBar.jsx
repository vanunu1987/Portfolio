import React from 'react' 
import classes from './NavBar.module.scss'
const NavBar = (props) =>{
    
   let navList = Object.keys(props.components).map((cmp)=>(<li key={cmp} 
    onClick={()=>props.active(cmp)} 
    className={props.activeCmp===cmp ? classes['active']:''}>
    {cmp.toUpperCase()}
    </li>))
    
    return(
    <div className={classes['nav-container']}>
        <ul className={classes['ul-container']}>
            {navList}
        </ul>
    </div>
)}
export default NavBar 