import React from 'react' 
import classes from './Portfolio.module.scss'
const portfolio = (props) =>{
    let diff = props.height/2-280
    let leftSub= 75+diff+'px'
    let left= 35+diff+'px'
    let leftWork= -18+diff+'px'
   
    return(
        <div>
            <p className={classes['sub-title']} style={{left: leftSub}}><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} style={{left: left}}>PORTFOLIO</h1>
            <div className={classes['portfolio-container']} style={{left: leftWork}}>
                <div className={classes['work1']}>
                    <div className={classes['work-hover']}> <span style={{fontWeight:600}}>Makeappoint</span>  <br/> Vue | Node.js | Heroku</div>
                </div>
                <div className={classes['work1']}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Makeappoint</span> <br/> Vue | Node.js | Heroku</div>
                </div>
                <div className={classes['work1']}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Makeappoint</span> <br/> Vue | Node.js | Heroku</div>
                </div>
            </div>
        </div>
    )
}
export default portfolio 