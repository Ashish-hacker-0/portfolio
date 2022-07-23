import React from 'react'
import Styles from './Contact.module.css'
import {BsChevronCompactRight} from 'react-icons/bs'
function Contact() {
  return (
    <div className={Styles.container} id="contact" >
       <p className='text' ><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></p>
       <p>LET'S TALK</p>
       <div>
           <div>
               <p>FULL NAME*</p>
               <input placeholder='Ashish Kumar' />
               <p>EMAIL*</p>
               <input placeholder='ashish1222001@gmail.com' />
               <p>MESSAGE*</p>
               <textarea  placeholder='To Write' />
               <p>SEND MESSAGE <BsChevronCompactRight/></p>
           </div>
           <div>
               <p>Ashish Kumar</p>
               <p>Open for SDE roles</p>
               <p><a href='tel: +919308787662' >Phone: 9308787662</a></p>
               <p><a href='mailto: ashish1222001@gmail.com' >Email: ashish1222001@gmail.com</a></p>
           </div>

       </div>
    </div>
  )
}

export default Contact