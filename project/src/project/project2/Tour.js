import React, { useState } from 'react';
import styles from './Project2.module.css'

const Tour = ({id,image, info,price,name,removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={styles['single-tour']}>
      <img src={image} alt={name} />
      <footer>
        <div className={styles.tour-info}>
          <h4>{name}</h4>
          <h4 className={styles.tour-price}>{price}</h4>
        </div>
          <p>{readMore?info:`${info.substring(0,200)}...`}<button onClick={()=>setReadMore(!readMore)}>{readMore?'read less':'read more'}</button></p>
        <button className={styles['delete-btn']} onClick={()=>removeTour(id)}>Not Interested</button>
      </footer>
    </article>
    );
};

export default Tour;
