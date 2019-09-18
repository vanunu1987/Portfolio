import React,{useEffect,useState} from 'react' 
import classes from './About.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'
const About = (props) =>{
    let [aboutClass,setMainClass]= useState('')
    if (props.activeAnimation && aboutClass===` ${classes['init']}`) setMainClass(` ${classes['active']}`)
    useEffect(() => {
        setMainClass(` ${classes['init']}`) 
      },[]);
    return(
        <div className={classes['about-container']}>
            <HeadTitle title="ABOUT" activeAnimation={props.activeAnimation}/>
            <div className={classes['content-about']}>
                <p className={classes['paragraph']+aboutClass} > 
                Full Stack developer with hands-on <br/>
                experience in developing Progressive <br/>
                Web Applications & Single-Page <br/>
                Applications using advanced web <br/> 
                technologies such as VUE, React, <br/> 
                Node. Recently changed path of <br/>
                career due to passion to code. <br/>
                Holds <br/>
                Industrial Eng degree ,3 years <br/>
                experience as Data Analyst.
                </p>
                <div className={classes['img-contant']}>
                    <div className={classes['img-container-1']+aboutClass} ></div>
                    <div className={classes['img-container-2']+aboutClass} ></div>
                    <div className={classes['img-container-3']+aboutClass} ></div>
                    <div className={classes['img-container-4']+aboutClass} ></div>
                </div>
            </div>
        </div>
    )
}
export default About 