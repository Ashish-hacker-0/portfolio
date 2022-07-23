import React from 'react'
import Styles from './Education.module.css'

function Education() {
  return (
    <div className={Styles.container} id="education" >
       <p className='text' ><span>E</span><span>d</span><span>u</span><span>c</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span></p>
        <p>STUDIED AT</p>
        <div>
            <div>
                <p>2019-2023</p>
                <p>National Institute of Technology, Manipur</p>

            </div>
            <p>Bachleor of Technology</p>
            <p>Electronics and Communication Engineering</p>
            <p>Current GPA: 8.39</p>
        </div>
    </div>
  )
}

export default Education