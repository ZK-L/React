import React from 'react'
import questions from './data'
import Question from './Question'
import styles from './Project4.module.css'

function Project4() {
  return (
    <main>
      <div className={styles.container}>
        <h2>Questions And Answers About Login</h2>
        <section className={styles.info}>
          {questions.map((question) => {
            const { id, title, info } = question;
            return (
              <Question key={id} title={title} info={info} />
            );
          })}
        </section>
      </div>
    </main>
  )

}

export default Project4;