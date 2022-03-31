import React ,{useEffect,useRef} from 'react'
import styles from './About.module.css';
import TagCloud from 'react-tag-cloud';

function About() {

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
        <div className={styles.about} >
            <div className={styles.container} >
                <p>{`<h2>`}</p>
                <div><span>M</span><span style={{marginRight:10}} >e,</span> <span> M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span><span style={{marginLeft:10}} >a</span><span>n</span><span style={{marginRight:10}} >d</span><span>I</span></div>
                <p>{`</h2>`}</p>
                <p>{`<p>`}</p>
                <p>I am a pre-final year Undergraduate at NIT, manipur, Working as a freelencer since last 2 years and co-founder of Soft-Cell.For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.</p>
                <p>{`</p>`}</p>
            </div>
            <div>
                <img src='/spaceship.png'/>
            </div>
            <div ref={ref} className="back" >
               
            </div>
        </div>
    )
}

export default About
