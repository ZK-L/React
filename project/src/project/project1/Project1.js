import React, { useState } from 'react';
import data from './data';
import List from './List';
import styles from './Project1.module.css';


function Project1() {
  const [people, setpeople] = useState(data);
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=>setpeople([])}>
          clear all
        </button>

      </section>
    </main>
  )
}

export default Project1;