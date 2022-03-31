import React from 'react'
import styles from './Contact.module.css';
import Link from 'next/link';
function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.container} >
                <p>{`<h2>`}</p>
                <div><span>C</span><span>o</span> <span> n</span><span>t</span><span>a</span><span>c</span><span>t</span><span style={{marginLeft:10}} >M</span><span>e</span></div>
                <p>{`</h2>`}</p>
                {/* <p>{`<p>`}</p>
                <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
                <p>{`</p>`}</p> */}
                <p>{`<form>`}</p>
                <div><input placeholder='Name' /><input placeholder='Email' /></div>
                <div><input placeholder='Subject' /></div>
                <div><textarea placeholder='Message'></textarea></div>
                <div><button>Send Message</button></div>
                <p>{`</form>`}</p>
                <p>{`</body>`}</p>
                <p>{`</html>`}</p>
            </div>
            <div>
               <div>
                   <p>Darbhanga, Bihar - 846004</p>
                   <Link href={'mailto:ashish1222001@gmail.com'} ><p style={{cursor:'pointer'}} ><span>@</span> :- ashish1222001@gmail.com </p></Link>
               </div>
           </div>
        </div>
    )
}

export default Contact
