import React from 'react'
import Styles from './Top.module.css'
import {BsChevronCompactDown,BsChevronCompactRight} from 'react-icons/bs';
function Top() {
  return (
    <div className={Styles.container} id="home" >
        <p className='text' ><span>A</span><span>S</span><span>H</span><span>I</span><span>S</span><span>H</span> <span>K</span><span>U</span><span>M</span><span>A</span><span>R</span></p>
        <p>WEB DEVELOPER | ANDROID DEVELOPER | COMPETITIVE PROGRAMER</p>
        <p>Hello! I am Web Developer from Bihar, India. I have some experience in web site design and building, also I am good at Android. I love to talk with you about our unique.</p>
        <div><p><a href='#contact' >CONTACT ME <BsChevronCompactRight/></a></p><a href='#about' ><BsChevronCompactDown/></a></div>
    </div>
  )
}

export default Top