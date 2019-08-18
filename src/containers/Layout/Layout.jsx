import React, {Component} from 'react'
import classes from './Layout.module.scss'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'
import Skills from '../../components/Skills/Skills'
import NavBar from '../../components/NavBar/NavBar'
import Paging from '../../components/Paging/Paging'

class Layout  extends Component {
    state = { 
        component: {
            home: Home,
            about: About,
            portfolio: Portfolio,
            contact: Contact,
            skills: Skills
            
        },
        height: 0,
        activeCmp: {home: true,
                    about: false,   
                    skills: false,
                    portfolio: false,
                    contact: false,}
     }

     componentDidMount(){
        this.setState({height: window.innerWidth });
      }

      hendelActiveButtom = (val)=>{
        this.setState({activeCmp:val})

      }
    render() { 
        let activePrm= Object.keys(this.state.activeCmp).filter(obj=>this.state.activeCmp[obj]).toString('')
        const Tagname = this.state.component[activePrm||'home']
        
        return ( 
            <>
            <div className={classes['layout-container']}>
            <NavBar components={this.state.activeCmp} active={(val)=>this.hendelActiveButtom(val)}/>
            <div className={classes['main-container']}>
                    <Tagname height={this.state.height}/>
            </div>
            <Paging height={this.state.height} active={(val)=>this.hendelActiveButtom(val)} components={this.state.activeCmp}/>
            </div>
            </>
         );
    }
}
 
export default Layout;