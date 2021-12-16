import React from 'react'
import styles from './About.module.css';
import TagCloud from 'react-tag-cloud';
function About() {
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
                <TagCloud
                   className='tag-cloud'
                    style={{
                    fontFamily: 'sans-serif',
                    //fontSize: () => Math.round(Math.random() * 50) + 16,
                    fontSize: 30,
                    color: '#08FDD8',
                    }}
                >
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>REACT NATIVE</span>
                    <span>ES5/ES6</span>
                    <span>NODEJS</span>
                    <span>EXPRESSJS</span>
                    <span>MONGODB</span>
                    <span>FIREBASE</span>
                    <span>NPM</span>
                    <span>C</span>
                    <span>C++</span>
                    <span>DATA STRUCTURE</span>
                    <span>ALGORITHM</span>
                    <span>GITHUB</span>
                    <span>POSTMAN</span>
               </TagCloud>
            </div>
    )
}

export default About
