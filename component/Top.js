import React, { useEffect, useRef, useState } from 'react'
import styles from './Top.module.css';
import Typing from 'react-typing-animation';
import { createElement } from 'react';

function Top() {

  

    return (
        <div className={styles.top} >
        <div className={styles.container}>
            <p>{`<html>`}</p>
            <p>{`<body>`}</p>
            <p>{`<h1>`}</p>
            <div><span>H</span><span>i</span><span>,</span></div>
            <div><span>I</span><span>'</span><span>m</span> <span>A</span><span>s</span><span>h</span><span>i</span><span>s</span><span>h</span><span>,</span></div>
            <div><span>M</span><span>E</span><span>R</span><span>N</span> <span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span><p>{`</h1>`}</p></div>
            <p>{`<p>`}</p>
            <p style={{color:'gray',fontSize:20,marginLeft:20,fontFamily:'sans-serif'}}>MERN Web and App developer</p>
            <p>{`</p>`}</p>
            
        </div>
        <div >
            <img src="/profile.png"/>
        </div>
        </div>
    )
}

export default Top
