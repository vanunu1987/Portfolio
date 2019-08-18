import React from 'react' 
import classes from './NavBar.module.scss'
const NavBar = (props) =>{
    const tampletObj = {home:false,about:false,skills:false,portfolio:false,contact:false}
    const navList = []
    for (let cmp in props.components){
    navList.push((<li key={cmp} 
    onClick={()=>props.active({...tampletObj,[cmp]:true})} 
    className={props.components[cmp]?classes['active']:''}>
    {cmp.toUpperCase()}
    </li>))}
    
    return(
    <div className={classes['nav-container']}>
        <ul className={classes['ul-container']}>
            {navList}
        </ul>
    </div>
)}
export default NavBar 