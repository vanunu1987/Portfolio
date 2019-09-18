import React,{useEffect,useState} from 'react' 
import classes from './Portfolio.module.scss'
import HeadTitle from '../HeadTitle/HeadTitle'

const Portfolio = (props) =>{
    let [portfolioClass,setMainClass]= useState('')
    if (props.activeAnimation && portfolioClass===` ${classes['init']}`) setMainClass(` ${classes['active']}`)
    useEffect(() => {
        setMainClass(` ${classes['init']}`) 
      },[]);
   
    return(
        <div className={classes['port-container']}>
            <HeadTitle title="PORTFOLIO" activeAnimation={props.activeAnimation}/>
            <div className={classes['portfolio-container']} >
                <a href="https://makeappoint.herokuapp.com/">
                <div className={classes['work1']+portfolioClass}>
                    <div className={classes['work-hover']}> <span style={{fontWeight:600}}>Makeappoint</span>  <br/> Vue | Node.js | Heroku</div>
                </div>
                </a>
                <div className={classes['work2']+portfolioClass}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Meme-Generator</span> <br/> JS | Canvas </div>
                </div>
                <div className={classes['work3']+portfolioClass}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Appsus</span> <br/> Vue | Node.js </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio 