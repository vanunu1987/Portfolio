import React, {Component} from 'react'
import classes from './Layout.module.scss'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'
import Skills from '../../components/Skills/Skills'
import NavBar from '../../components/NavBar/NavBar'
import Paging from '../../components/Paging/Paging'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

class Layout  extends Component {
    state = { 
        component: {
            home: Home,
            about: About,
            portfolio: Portfolio,
            skills: Skills,
            contact: Contact
            
        },
       
        activeCmp: 'home',
        animation: false,
        isShow: false
     }

    

      handleActiveButtom = (val)=>{
          this.setState({animation:true})
          setTimeout(()=>{
              this.setState({activeCmp:val,animation:false})
          },1150)
          this.handleClick()
      }

      handleClick = ()=>{
          this.setState(prevState=>{
              let {isShow} = prevState
              let newIsShow = !isShow
              console.log(newIsShow);
              
              return{
                isShow: newIsShow
              }
          })
      }
    render() { 
        const Tagname = this.state.component[this.state.activeCmp||'home']
        
        return ( 
            <>
            <div className={classes['layout-container']}>
                <Backdrop show={this.state.isShow} clicked={this.handleClick}/>
                <button className={`fas fa-bars ${classes['hamburger-btn']}`}
                onClick={this.handleClick}></button>
                <NavBar components={this.state.component} 
                active={(val)=>this.handleActiveButtom(val)}
                activeCmp={this.state.activeCmp}
                activeAnimation={this.state.animation}
                isShow={this.state.isShow}/>
                <div className={classes['main-container']}>
                        <Tagname activeAnimation={this.state.animation}/>
                </div>
                <Paging height={this.state.height} 
                active={(val)=>this.handleActiveButtom(val)} 
                components={this.state.component}
                activeCmp={this.state.activeCmp}
                />
            </div>
            </>
         );
    }
}
 
export default Layout;