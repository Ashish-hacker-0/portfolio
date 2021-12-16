import React from 'react'
import Port from './Port';
import styles from './Portfolio.module.css';
import p1 from '../public/p1.png';
import p2 from '../public/p2.png';
import p3 from '../public/p3.png';
import p4 from '../public/p4.png';
import p5 from '../public/p5.png';
import p6 from '../public/p6.png';
import p7 from '../public/p7.png';
import p8 from '../public/p8.png';
import p9 from '../public/p9.png';
import dbglogo from '../public/logo.png';
import radlogo from '../public/logo.jpeg';
import paklogo from '../public/logop.png';

function Portfolio() {
    return (
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
                   name={'Scholars IIT'}
                   link={'https://www.scholarsiit.co.in/'}
                   bcolor={'#FFFF00'}
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
              
            </div>
            <div>
                <Port
                   img={radlogo}
                   link={'https://radianceclasses.co.in/'}
                   bcolor={'#FDF9DE'}
                   tcolor={'#111'}
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
    )
}

export default Portfolio
