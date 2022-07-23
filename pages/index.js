
import { useState,useRef } from 'react';
import Header from '../component/Header';
import styles from '../styles/Home.module.css';
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import Top from '../component/Top';
import About from '../component/About';
import Profile from '../component/Profile';
import Project from '../component/Project';
import Education from '../component/Education';
import Skills from '../component/Skills';
import Contact from '../component/Contact';
export default function Home() {
  const [color,setColor] = useState('#08FDD8');
  const ref = useRef();
  const [active,setActive] = useState(1);

  function animate(event){
    const colors = ["red","blue","yellow","green","white","black","violet","pink"];
    var element  = document.createElement('div');
    element.className = 'Circle';
    element.style.top = event.clientY+'px';
    element.style.left = event.clientX + 'px';
    
    element.style.border=`1px solid ${colors[Math.floor(Math.random()*colors.length)]}`
    ref.current.appendChild(element);
}

const emoji = (event) => {
  const emojis = ["😀", "😂", "😆", "😊"];
    var element  = document.createElement("p");
    element.innerText=emojis[Math.floor(Math.random()*emojis.length)];
    element.className = 'Circle';
    element.style.top = event.clientY+'px';
    element.style.left = event.clientX + 'px';
    
    ref.current.appendChild(element);
}

const mouseHover = (event) => {
   if(active==2){
     animate(event);
   }
   if(active==3){
     emoji(event);
   }
}

  return (
    <div className={styles.container} ref={ref}  >
      <Header
        active={active}
        setActive={setActive}
      />
      <div className={styles.body} >
        <div>
          <img src="/ashish8.png"/>
        </div>
        <div>
           <Top

           />
           <About/>
           <Profile/>
           <Project/>
           <Education/>
           <Skills/>
           <Contact/>
        </div>
        <div>
          <ul>
            <li> <a href='https://linkedin.com/in/ashish-kumar-8ba5961b0' target={'_blank'} rel="noreferrer"  ><FaLinkedinIn/></a></li>
            <li> <a href='https://github.com/ashish-hacker-0' target={'_blank'} rel="noreferrer"  ><FiGithub/></a></li>
            <li> <a href='https://www.instagram.com/its_me_ashish__' target={'_blank'} rel="noreferrer"  ><AiOutlineInstagram/></a></li>
            <li> <a href='https://www.facebook.com/profile.php?id=100006700786768' target={'_blank'} rel="noreferrer"  ><FaFacebookF/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
