import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'


function Home() {
  return(
    <div>

    <header>
      <h1>React basic project</h1>
    </header>
      
      <ul>
        <li><Link to='/project1'>project 1: Birthday reminder</Link></li>
        <li><Link to='/project2'>project 2: Tours</Link></li>
        <li><Link to='/project3'>project 3: Reviews</Link></li>
        <li><Link to='/project4'>project 4: Questions and Answers</Link></li>

      </ul>
    </div>

  )
}

export default Home;