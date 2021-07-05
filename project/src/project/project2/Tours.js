import React from 'react';
import Tour from './Tour';
import styles from './Project2.module.css'
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={styles.title}>
        <h2>ours tours</h2>
        <div className={styles.underline}></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (<Tour key={tour.id}{...tour} removeTour={removeTour}/>)
        })}
      </div>
    </section>
  );
};

export default Tours;
