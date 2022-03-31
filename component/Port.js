import Link from 'next/link';
import React from 'react'
import styles from './Port.module.css';
function Port({link,name,tcolor,bcolor,img}) {
    console.log(link,img);
    return (
        <div className={styles.container} style={{backgroundColor:bcolor,color:tcolor}}>
          
           {!img&&<p  className={styles.para} style={{color:tcolor,fontSize:30,fontFamily:'sans-serif',textAlign:'center'}} >{name}</p>}
           {img&&<img src={img.src}/>}
            <div className={styles.absolute}>
               <a href={link} target="_blank" ><p>View</p><p> Project</p></a>
            </div>
        </div>
    )
}

export default Port
