import React, {useState} from 'react'
import Styles from './Project.module.css'

function Project() {

  const [active,setActive] = useState(false);

  return (
    <div className={Styles.container} id="portfolio" >
        <p>Portfolio</p>
        <p>LATEST WORKS</p>
        <ul>
            <li onClick={()=>setActive(false)} className={!active?Styles.active:Styles.inactive} >Web</li>
            <li onClick={()=>setActive(true)} className={active?Styles.active:Styles.inactive}>Android</li>
        </ul>
        {!active&&<div>
            <div>
            <a href='https://www.brandlo.in/' target={'_blank'} rel="noreferrer"  >
              <img src="/web1.png"/>
              <p>BRANDLO</p>
              <p>Online Shopping Site </p>
              </a>
            </div>
            <div>
            <a href='https://letswatchbyashish.netlify.app/' target={'_blank'} rel="noreferrer"  ><img src="/web2.png"/>
              <p>LET's WATCH</p>
              <p>Movie Suggestion website </p>
              </a>
            </div>
            <div>
            <a href='https://pakwandbg.com/' target={'_blank'} rel="noreferrer"  ><img src="/web3.png"/>
              <p>PAKWAN</p>
              <p>A Resturant Portfolio</p>
              </a>
            </div>
            <div>
            <a href='https://ethej.in' target={'_blank'} rel="noreferrer"  ><img src="/web4.png"/>
              <p>ETHEJ</p>
              <p>Virtual Tourism Portfolio</p>
              </a>
            </div>
        </div>}
       {active&&<div>
            <div>
            <a href='https://play.google.com/store/apps/details?id=brandlo.app' target={'_blank'} rel="noreferrer"  ><img src="/app1.webp"/>
              <p>BRANDLO</p>
              <p>Online Shopping App </p>
              </a>
            </div>
            <div>
            <a href='https://play.google.com/store/apps/details?id=mrcompounder.app' target={'_blank'} rel="noreferrer"  ><img src="/app2.webp"/>
              <p>MR COMPOUNDER</p>
              <p>Doctor appointment Booking App </p>
</a>            </div>
            <div>
            <a href='https://play.google.com/store/apps/details?id=com.ashish_nitm.explore' target={'_blank'} rel="noreferrer"  >              <img src="/app3.png"/>
              <p>EXPLORE</p>
              <p>An Instagram Clone App</p>
              </a>
            </div>
            <div>
            <a href='https://github.com/Ashish-hacker-0/Cab-Booking-App' target={'_blank'} rel="noreferrer"  ><img src="/app4.jfif"/>
              <p>CAB BOOKING</p>
              <p>A Uber Clone App</p>
              </a>
            </div>
        </div>}
    </div>
  )
}

export default Project