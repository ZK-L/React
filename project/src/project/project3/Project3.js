import React from 'react';
import Review from './Review';
import reviews from './data'
import styles from './Project3.module.css';

function Project3() {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.title}>

        <h2>Our Reviews</h2>
        <div className={styles.underline} />
        </div>
          <Review reviews={reviews} />
      </section>
    </main>
  );
}

export default Project3;
