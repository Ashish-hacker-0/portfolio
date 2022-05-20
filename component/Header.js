import React from 'react'
import Styles from './Header.module.css'
import {BsDownload} from 'react-icons/bs';
import Link from 'next/link'
function Header() {

  

  return (
    <div className={Styles.container} >
        <div className={Styles.header}>
            <div>
                <img src="/a.png"/>
                <p>Ashish <br/> Kumar</p>
            </div>
            <ul>
                <li><Link href={'#home'} >HOME</Link></li>
                <li><Link 
                  activeClass="active"
                 href={'#about'}
                >ABOUT</Link></li>
                <li><Link href='#profile' scroll={true} >PROFILES</Link></li>
                <li><Link href='#portfolio' scroll={true} >PORTFOLIO</Link></li>
                <li><Link href={'#education'} scroll={true} >EDUCATION</Link></li>
                <li><Link href={'#skill'} >SKILLS</Link></li>
                <li><Link href={'#contact'} >CONTACT</Link></li>
           </ul>
           <button><a href='/Ashish Resume.pdf' download={'Ashish Resume.pdf'} >RESUME <BsDownload/></a> </button>
        </div>
     </div>
  )
}

export default Header