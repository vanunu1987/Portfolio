import React, {useState} from 'react' 
import classes from './Contact.module.scss'
const Contact = (props) =>{

   const [data,setData] = useState({name:'',mail:'test@test.com',body:''})
    return(
        <div className={classes['contact-container']}>
            <p className={classes['sub-title']} ><span>Yair Vanunu</span> full stack web developer</p>
            <h1 className={classes['title']}>CONTACT</h1>
            <div className={classes['img-container']}></div>
            <form className={classes['form-container']} onSubmit={(ev)=>{
                ev.preventDefault()
                let str=`https://mail.google.com/mail/?view=cm&fs=1&to=vanunu24@gmail.com&su=${data.name}&body=${data.body}`
                window.open(str)
                }}>
                <div className={classes['img-container-1']} placeholder=" Name">
                    <input type="text" placeholder=" Name" 
                    onChange={(ev)=>setData({...data,name:ev.target.value})}/>
                </div>
                <div className={classes['img-container-2']} >
                    <input type="email" placeholder=" Email Address" />
                </div>
                <div className={classes['img-container-3']} >
                    <textarea rows="5" cols="57" type="text" placeholder=" Your Message" 
                    onChange={(ev)=>setData({...data,body:ev.target.value})}/>
                </div>
                <button className={classes['send-btn']}>Send</button>
            </form>
            <div className={classes['details']}>
               <div> 
                   <span className={classes['prop']}>PHONE: </span> <span className={classes['val']}> 052-5223290</span> 
               </div>
               <div>
                    <span className={classes['prop']}>EMAIL: </span> <span className={classes['val']}> vanunu24@gmail.com</span> 
               </div>
            </div>
            <div className={classes['sotial-net']}>
                <a href="https://www.linkedin.com/in/yair-vanunu"><div className="net fab fa-linkedin"></div></a> 
                <a href="https://github.com/vanunu1987"><div className="net fab fa-github"></div></a>
                <a href="https://www.facebook.com/yair.vanunu"><div className="net fab fa-facebook"></div></a>
            </div>
        </div>
    )
}
export default Contact 