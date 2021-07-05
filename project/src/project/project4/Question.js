import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import styles from './Project4.module.css'

export default function Question({title,info}) {
    const [status, setStatus] = useState(false)
    return(
        <div className={styles.question}>
            <header>
            <h4>{title}</h4>
            <button className={styles.btn} onClick={()=>setStatus(!status)}>
                {status?<AiOutlineMinus/>:<AiOutlinePlus/>}
            </button>
            </header>
            {status?<p>{info}</p>:null} 
            {/* above is equal to {status&&<p>{info}</p>} */}
        </div>
    );
};
