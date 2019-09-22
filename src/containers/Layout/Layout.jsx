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
import Swipe from 'react-easy-swipe';

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
        isShow: false,
        activeArr: ['home','about','portfolio','skills','contact'],
        pageNum: 0
     }

    

      handleActiveButtom = (val)=>{
          this.setState({animation:true})
          setTimeout(()=>{
              this.setState({activeCmp:val,animation:false})
          },1150)
          if (this.state.isShow) this.handleClick()
      }

      handleClick = ()=>{
          this.setState(prevState=>{
              let {isShow} = prevState
              let newIsShow = !isShow
              return{
                isShow: newIsShow
              }
          })
      }

    

      onSwipeLeft(){
          this.this.setState(prevState=>{
              if (prevState.pageNum===4)return
              let newPage = prevState.pageNum + 1
              let activeCmp = this.state.activeArr[newPage]
              this.this.handleActiveButtom(activeCmp)
              return{
                  pageNum: newPage
                }
            })
            
        
          
      }
      onSwipeRight(){
        this.this.setState(prevState=>{
            if (prevState.pageNum===0)return
            let newPage = prevState.pageNum - 1
            let activeCmp = this.state.activeArr[newPage]
            this.this.handleActiveButtom(activeCmp)
            return{
                pageNum: newPage
              }
          })
      }
    
    render() { 
        const Tagname = this.state.component[this.state.activeCmp||'home']
        
        return ( 
            <>
            <Swipe
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            state={this.state}
            this={this}>
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
            </Swipe>
            </>
         );
    }
}
 
export default Layout;