import React from 'react'
import Styles from './About.module.css'

function About() {
  return (
    <div className={Styles.container} id="about" >
       <p className='text' ><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>M</span><span>e</span></p>
       <p>MY STORY</p>
       <p>I am a pre-final year Undergraduate at NIT, manipur, Working as a freelencer since last 2 years and co-founder of Soft-Cell.For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.</p>
       <div>
           <div>
               <div>
                   <p>AGE :</p>
                   <p>LOOKING FOR :</p>
                   <p>PHONE :</p>
               </div>
               <div>
                   <p>20</p>
                   <p>Internship</p>
                   <p>9308787662</p>
               </div>
           </div>
           <div>
               <div>
                   <p>COLLEGE :</p>
                   <p>YEAR :</p>
                   <p>EMAIL :</p>
               </div>
               <div>
                   <p>NIT, Manipur</p>
                   <p>3</p>
                   <p>ashish1222001@gmail.com</p>
               </div>
           </div>
       </div>
    </div>
  )
}

export default About