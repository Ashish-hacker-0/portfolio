import React, { useEffect, useRef } from 'react'
import Port from './Port';
import styles from './Portfolio.module.css';

import dbglogo from '../public/logo.png';
import brandlologo from '../public/brandlo.png';
import paklogo from '../public/logop.png';

function Portfolio() {
    const ref = useRef();

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log('timeout');
            const element = document.createElement('div');
            element.style.marginLeft = Math.floor(Math.random() * (1001))+'px';
            element.style.marginTop = Math.floor(Math.random() * (1001))+'px';
            ref.current.appendChild(element);
        },10);
        // const clearId= timeout();

        return()=>clearInterval(interval);
        
    })

    return (
        <div>
        <div className={styles.container} >
            <p>{`<h2>`}</p>
            <div><span>M</span><span style={{marginRight:10}} >y</span> <span> P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span></div>
            <p>{`</h2>`}</p>
            <p>{`<p>`}</p>
            <p>A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.</p>
            <p>{`</p>`}</p>
            <p>{`<section>`}</p>
            <div>
            <Port
                   img={brandlologo}
                   link={'https://www.brandlo.in/'}
                   bcolor={'#FFFFFF'}
                   tcolor={'#B90000'}
               />
               <Port
                    name={'SPARC'}
                    link={'https://sparcdbg.co.in/'}
                    bcolor={'#FFFFFF'}
                   tcolor={'#1F7B76'}
               />
               <Port
                   img={dbglogo}
                   link={'https://www.darbhangabiryani.co.in/'}
                   bcolor={'#FFFFFF'}
                   tcolor={'#111'}
               />
               <Port
                   name={'Ethej'}
                   link={'ethej.in'}
                   bcolor={'#000'}
                   tcolor={'#FFFFFF'}
               />
                <Port
                   name={'Scholars IIT'}
                   link={'https://www.scholarsiit.co.in/'}
                   bcolor={'#FFFF00'}
                   tcolor={'#B90000'}
               />
               <Port
                   img={paklogo}
                   link={'https://pakwandbg.com/'}
                   bcolor={'#FFF4F2'}
                   tcolor={'#111'}
               />
               <Port
                   name={`Let's Shop`}
                   link={'https://letsshop.vercel.app/'}
                   bcolor={'#000'}
                   tcolor={'#FFFFF'}
               />
               <Port
                   name={`Let's Watch`}
                   link={'https://letswatchbyashish.netlify.app/'}
                   bcolor={'#000'}
                   tcolor={'red'}
               />
               
            </div>
            <p>{`</section>`}</p>
            </div>
            <div ref={ref} className="back" >
               
            </div>
        </div>
    )
}

export default Portfolio
