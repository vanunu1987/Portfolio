import React,{useEffect,useState} from 'react' 
import classes from './Home.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'


const Home = (props) =>{
    let [mainClass,setMainClass]= useState('')
    if (props.activeAnimation && mainClass===` ${classes['init']}`) setMainClass(` ${classes['active']}`)
    useEffect(() => {
        setMainClass(` ${classes['init']}`) 
      },[]);

return(
    <div className={classes['main-container']}>
            <HeadTitle title="HOME" activeAnimation={props.activeAnimation} />
            <div className={classes['img-container-4']+mainClass} ></div>
            <div className={classes['img-container-3']+mainClass} ></div>
            <div className={classes['img-container-2']+mainClass} ></div>
            <div className={classes['img-container-1']+mainClass} ></div>
    </div>
)
}
export default Home 