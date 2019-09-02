import React from 'react' 
import classes from './Home.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'


const home = (props) =>{

return(
    <div className={classes['main-container']}>
            <HeadTitle title="HOME" activeAnimation={props.activeAnimation} />
            <div className={classes['img-container-4']} ></div>
            <div className={classes['img-container-3']} ></div>
            <div className={classes['img-container-2']} ></div>
            <div className={classes['img-container-1']} ></div>>
    </div>
)
}
export default home 