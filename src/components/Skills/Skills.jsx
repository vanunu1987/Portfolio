import React from 'react' 
import classes from './Skills.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'

const skills = (props) =>{
    
    return(
        <div>
            <HeadTitle title="SKILLS" activeAnimation={props.activeAnimation}/>
            
        </div>
    )
}
export default skills 