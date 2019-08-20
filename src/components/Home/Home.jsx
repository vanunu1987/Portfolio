import React from 'react' 
import classes from './Home.module.scss'

const home = (props) =>{

return(
    <div className={classes['main-container']}>
            <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} >HOME</h1>
            <div className={classes['img-container-4']} ></div>
            <div className={classes['img-container-3']} ></div>
            <div className={classes['img-container-2']} ></div>
            <div className={classes['img-container-1']} ></div>>
    </div>
)
}
export default home 