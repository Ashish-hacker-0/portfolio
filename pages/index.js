import Head from 'next/head'
import Image from 'next/image'
import Top from '../component/Top'
import styles from '../styles/Home.module.css';
import AnimatedCursor from "react-animated-cursor"
import Portfolio from '../component/Portfolio';
import About from '../component/About';
import Contact from '../component/Contact';
import { useEffect, useState } from 'react';


export default function Home() {

 

  return (
    <div className={styles.container}>
      
      <Top
      />
      <Portfolio/>
      <About/>
      <Contact/>
    </div>
  )
}
