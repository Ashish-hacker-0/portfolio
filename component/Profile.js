import React from 'react'
import Styles from './Profile.module.css'

function Profile() {
  return (
    <div className={Styles.container} id="profile" >
       <p className='text' ><span>P</span><span>r</span><span>o</span><span>f</span><span>i</span><span>l</span><span>e</span><span>s</span></p>
       <p>CP AND DSA</p>
       <div>
           <div>
            <a href='https://www.codechef.com/users/ashish_nitm' target={'_blank'} rel="noreferrer"  >
               <img src='/cc.png'/>
               <p>Code Chef</p>
               <p>A 3* coder at codechef and has participated in more than 10 contests. Solved 100+ problems so far.</p>
            </a>
           </div>
           <div>
           <a href='https://leetcode.com/ashish1222001' target={'_blank'} rel="noreferrer"  >
               <img src="/lc.png"/>
               <p>Leet Code</p>
               <p>Just started practicing DSA problems on leetcode and has solved more than 50 problems so far.</p>
           </a></div>
           <div>
           <a href='https://www.hackerrank.com/ashish1222001?hr_r=1' target={'_blank'} rel="noreferrer">    <img src="/hr.png"/>
               <p>Hackerrank</p>
               <p>Started my programming journey with Hackerrank and has achieved 5* in CPP and JAVA.</p>
           </a></div>
           <div>
           <a href='https://auth.geeksforgeeks.org/user/ashish1222001' target={'_blank'} rel="noreferrer">    <img src="/gfg.png"/>
               <p>GeeksForGeeks</p>
               <p>Solved just 15+ problems till now.</p>
           </a></div>
       
       </div>
    </div>
  )
}

export default Profile