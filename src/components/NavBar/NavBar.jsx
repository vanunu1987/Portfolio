import React from 'react' 
import classes from './NavBar.module.scss'
const NavBar = (props) =>{
   let animationClass = (props.activeAnimation)? classes['active-animation']:classes['active']
   let navList = Object.keys(props.components).map((cmp)=>(<li key={cmp} 
    onClick={()=>props.active(cmp)} 
    className={props.activeCmp===cmp ? animationClass:''}>
    {cmp.toUpperCase()}
    </li>))
    let dropClass = (props.isShow)? ` ${classes['show']}`: ''
    return(
    <div className={classes['nav-container']}>
        <ul className={classes['ul-container']+dropClass}>
            {navList}
        </ul>
    </div>
)}
export default NavBar 