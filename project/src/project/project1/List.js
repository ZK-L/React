import React from 'react';
import styles from './Project1.module.css';

const List = ({people}) => {
  return (
    <div>
      {people.map((person)=>{
          const{id,name,age,image}= person;
          return (
          <article key={id} className={styles.person}>

          <img src={image} alt={name} />
          <div>
              <h4>{name}</h4>
              <p>{age}</p>
          </div>
          </article>
          )})}
    </div>
  );
};

export default List;