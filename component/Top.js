import React, { useRef } from 'react'
import styles from './Top.module.css';
import Typing from 'react-typing-animation';
import { createElement } from 'react';

function Top() {

    const ref = useRef();

    function animate(event){
        console.log('Event',event);
        console.log('animate');
        var element  = document.createElement('div');
        element.className = 'Circle';
        element.style.top = event.clientY+'px';
        element.style.left = event.clientX + 'px';
        ref.current.appendChild(element);
    }

    return (
        <div ref={ref} className={styles.container} onMouseMove={(event)=>animate(event)} >
            <p>{`<html>`}</p>
            <p>{`<body>`}</p>
            <p>{`<h1>`}</p>
            <div><Typing speed={100} ><span>H</span><span>i</span><span>,</span></Typing></div>
            <div><Typing speed={100} startDelay={300} ><span>I</span><span>'</span><span>m</span> <span>A</span><span>s</span><span>h</span><span>i</span><span>s</span><span>h</span><span>,</span></Typing></div>
            <div><Typing speed={100} startDelay={1600}><span>M</span><span>E</span><span>R</span><span>N</span> <span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span><p>{`</h1>`}</p></Typing></div>
            <p>{`<p>`}</p>
            <p style={{color:'gray',fontSize:20,marginLeft:20,fontFamily:'sans-serif'}}>MERN Web and App developer</p>
            <p>{`</p>`}</p>
            <button onClick={()=>window.scrollTo({
                'top':document.documentElement.scrollHeight,
                'behavior':'smooth'
            })} >Contact me!</button>
        </div>
    )
}

export default Top
