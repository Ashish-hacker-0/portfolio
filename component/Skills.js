import React from 'react'
import Styles from './Skills.module.css'

function Skills() {
  return (
    <div className={Styles.container} id="skill" >
       <p>Coding Skills</p>
       <p>DEVELOPING ON</p>
       <div>
           <div>
               <p>80%</p>
               <p>C++</p>
           </div>
           <div>
               <p>60%</p>
               <p>JavaScript</p>
           </div>
           <div>
               <p>90%</p>
               <p>HTML</p>
           </div>
           <div>
               <p>80%</p>
               <p>CSS</p>
           </div>
           <div>
               <p>70%</p>
               <p>React JS</p>
           </div>
           <div>
               <p>70%</p>
               <p>Node JS</p>
           </div>
       </div>
    </div>
  )
}

export default Skills