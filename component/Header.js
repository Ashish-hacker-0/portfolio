import React, { useEffect, useRef, useState } from 'react'
import styles from './Navigation.module.css';
import {BsMusicNote, BsMusicNoteList} from 'react-icons/bs';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineClose} from 'react-icons/ai'
import {SiCodechef,SiHackerrank,SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';
import { useRouter } from 'next/router';
import Link from 'next/link';
function Header() {
    const ref = useRef();
    const [color,setColor] = useState('#08FDD8');
    const [colorp, setColorp] = useColor("hex", "#121212");
    const [set,setSet] = useState(false);
    const [sound,setSound]  = useState(false);
    const audio = useRef();
    const router = useRouter();
    console.log(router);
    useEffect(()=>{
        const colorupdate= ()=> setTimeout(()=>{
            if(color=='#FD2155'){
               setColor('#08FDD8')
            }
            if(color=='#08FDD8'){
                setColor('#FD2155')
            }
        },5000);
        const colorId =colorupdate();
        return()=>clearTimeout(colorId);
    })
    function animate(event){
        var element  = document.createElement('div');
        element.className = 'Circle';
        element.style.top = event.clientY+'px';
        element.style.left = event.clientX + 'px';
        element.style.border=`1px solid ${color}`
        ref.current.appendChild(element);
    }
  return (
    <div ref={ref}  className={styles.container}  onMouseMove={(event)=>{animate(event)}}>
       <div>
       <p><Link href={'/'}>FP</Link></p>
           <div >
                <div style={{backgroundColor:set?'white':color}} onClick={()=>{if(router.pathname=='/')setSet(!set)}} >
                    {set&&<AiOutlineClose/>}
                </div>
               {set&&<ColorPicker width={456} height={228} color={colorp} onChange={setColorp} onChangeComplete={(e)=>{console.log(colorp);setColor(colorp.hex);}}  hideHSV dark />}
           </div>
           <div><div onClick={()=>{if(!sound){audio.current.play();}else{audio.current.pause();audio.current.currentTime=0;}}} >{sound?<BsMusicNoteList color='#08FDD8' />:<BsMusicNote color='#FD2155' />}Sound  <span style={{color:sound?'#08FDD8':'#FD2155'}} > {sound?`ON`:`OFF`}</span></div>
           </div>
           <audio src='/tone.mp3' ref={audio} onPlay={()=>setSound(true)} onPause={()=>setSound(false)} />
           
       </div>
       <div><Link href={'/work'}>{router.pathname=='/'?`Work`:``}</Link></div>
       <div><Link href={'/contact'}>{router.pathname=='/'?`Contact`:``}</Link></div>
       <div><p><Link href={'/about'}>{router.pathname=='/'?`About`:``}</Link></p><p><Link href={'/skill'}>{router.pathname=='/'?`My Skill`:``}</Link></p></div>
       <div>
          <a href="https://github.com/ashish-hacker-0" target={'_blank'} rel="norefer" > <AiFillGithub/> </a>
           <a href="https://linkedin.com/in/ashish-kumar-8ba5961b0" target={'_blank'} rel="norefer"><AiFillLinkedin/></a>
           <a href='https://www.instagram.com/its_me_ashish__' target={'_blank'} rel="norefer"> <AiFillInstagram/> </a>
           <a href='https://www.facebook.com/profile.php?id=100006700786768' target={'_blank'} rel="norefer"> <AiFillFacebook/> </a>
           <div>

           </div>
       </div>
       <div>
          <a href="https://www.codechef.com/users/ashish_nitm" target={'_blank'} rel="norefer" > <SiCodechef/> </a>
           <a href="https://www.hackerrank.com/ashish1222001?hr_r=1" target={'_blank'} rel="norefer"><SiHackerrank/></a>
           <a href='https://leetcode.com/ashish1222001' target={'_blank'} rel="norefer"><SiLeetcode/></a>
           <div>

           </div>
       </div>
    </div>
  )
}

export default Header