import React from 'react' 
import classes from './Home.module.scss'

const home = (props) =>{

        let diff = props.height/2-280
        let left= 35+diff+'px'
        let left1= 52+diff+'px'
        let left2= 197+diff+'px'
        let left3= 52+diff+'px'
        let left4= 8+diff+'px'
        let leftSub= 75+diff+'px'

return(
    <div className={classes['main-container']}>
            <p className={classes['sub-title']} style={{left: leftSub}}><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} style={{left: left}}>HOME</h1>
            <div className={classes['img-container-4']} style={{left: left4}}></div>
            <div className={classes['img-container-3']} style={{left: left3}}></div>
            <div className={classes['img-container-2']} style={{left: left2}}></div>
            <div className={classes['img-container-1']} style={{left: left1}}></div>>
    </div>
)
}
export default home 