import React from 'react'
import Styles from './Education.module.css'

function Education() {
  return (
    <div className={Styles.container} id="education" >
        <p>Education</p>
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