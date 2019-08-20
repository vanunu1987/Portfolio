import React from 'react' 
import classes from './Portfolio.module.scss'
const portfolio = (props) =>{
    
   
    return(
        <div>
            <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']} >PORTFOLIO</h1>
            <div className={classes['portfolio-container']} >
                <a href="https://makeappoint.herokuapp.com/">
                <div className={classes['work1']}>
                    <div className={classes['work-hover']}> <span style={{fontWeight:600}}>Makeappoint</span>  <br/> Vue | Node.js | Heroku</div>
                </div>
                </a>
                <div className={classes['work2']}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Meme-Generator</span> <br/> JS | Canvas </div>
                </div>
                <div className={classes['work3']}>
                    <div className={classes['work-hover']}><span style={{fontWeight:600}}>Appsus</span> <br/> Vue | Node.js </div>
                </div>
            </div>
        </div>
    )
}
export default portfolio 