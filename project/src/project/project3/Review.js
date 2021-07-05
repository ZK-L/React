import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from './Project3.module.css'

const Review = ({ reviews }) => {
  const [currentId, setCurrentId] = useState(0)
  const { name, job, image, text } = reviews[currentId]
  const total = reviews.length

  const nextReview = () => {
    setCurrentId((currentId + 1) % total)
  }

  const prevReview = () => {
    const newId = currentId - 1
    if (newId >= 0) {
      setCurrentId(newId)
    }
    else {
      setCurrentId(total - 1)
    }
  }

  const randomReview = () => {
    const randomNumber = Math.floor(Math.random() * total)
    if (randomNumber === currentId) {
      setCurrentId((currentId + 1) % total)
    }
    else {
      setCurrentId(randomNumber)
    }
  }
  return (
    <div className={styles.review}>
      <div className={styles['img-container']}>
        <img src={image} alt={name} className={styles['person-img']} />
        <span className={styles['quote-icon']}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <p className={styles.info}>{text}</p>
      <button onClick={prevReview} className={styles['prev-btn']}>
        <FaChevronLeft /></button>
      <button onClick={nextReview} className={styles['next-btn']}>
        <FaChevronRight /></button>
      <div>
        <button onClick={randomReview} className={styles['random-btn']}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Review;
