import React,{useEffect,useState} from 'react' 
import classes from './Skills.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'

const Skills = (props) =>{
    let [skillsClass,setMainClass]= useState('')
    if (props.activeAnimation && skillsClass===` ${classes['init']}`) setMainClass(` ${classes['active']}`)
    useEffect(() => {
        setMainClass(` ${classes['init']}`) 
      },[]);
    return(
        <div className={classes['skills-container']}>
            <HeadTitle title="SKILLS" activeAnimation={props.activeAnimation}/>
            <div className={classes['content']}>
                <div><h1 className={classes['weak']+skillsClass}>Mongo DB</h1><h1 className={classes['strong']+skillsClass}>CSS/Scss </h1> </div> 
                <div><h1 className={classes['strong']+skillsClass}>JavaScript</h1> <h1 className={classes['small']+skillsClass}>Exspress.js </h1></div>
                <div><h1 className={classes['small']+skillsClass}>GitHub</h1> <h1 className={classes['strong']+skillsClass}>Vue</h1><h1 className={classes['weak']+skillsClass}>Vuex</h1><h1 className={classes['strong']+skillsClass}>Node.js</h1></div>
                <div><h1 className={classes['strong']+skillsClass}>HTML</h1><h1 className={classes['weak']+skillsClass}>Redux</h1><h1 className={classes['strong']+skillsClass}>React</h1></div>
            </div>
        </div>
    )
}
export default Skills 