import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import styles from './Project2.module.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function Project2() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours)
    } catch (error) { 
      setLoading(false)
      console.log(error);
  }
}

useEffect(() => {
  fetchTours();
}, []);

if (loading) {
  return (
    <main className={styles.main}>
      <Loading />
    </main>
  );
}
else if (tours.length===0){
  return(
    <main className={styles.main}>
      <div className={styles.title}>
        <h2>No tours left</h2>
        <button className={styles.btn} onClick={fetchTours}>Refresh</button>
        </div>
    </main>
  )
}
else {
  return (
    <main className={styles.main}>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );

}}

export default Project2;
