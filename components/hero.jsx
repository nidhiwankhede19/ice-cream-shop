"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/styles/components/hero.module.scss"
import supabase from '@/supabase/config';

const Hero = () => {

  const [iceCreamData, setIceCreamData] = useState([])

  const fetchData = async () => {
    const { data, error } = await supabase.from("ice_cream_logs").select();
    if (error) {
      alert("error in fetching data!");
      console.log(error);
    }
    if (data) {
      alert("data fetched successfully");
      console.log(data);
      setIceCreamData(data);
    }
  };

  const deleteData = async (id) => {
    const { error } = await supabase.from("ice_cream_logs").delete().eq('id',id)
    if (error) {
      alert("Error in deleting data!");
      console.error(error);
    } else {
      alert("Data deleted successfully!");
      // Refresh the data after deletion
      fetchData();
    }
  }

  



  useEffect(() => {
    fetchData()
  }, []);

  return (
    <section className={styles.heroContainer}>
      {iceCreamData.map((iceCream)=>(
        <div className={styles.card} key={iceCream.id}>
          <div className={styles.heroText}>
            <p className={styles.heading}>{iceCream.name} </p>
            <p className={styles.text}>{iceCream.description}</p>
            <p className={styles.price}>${iceCream.price}</p>
          </div>
          <div className={styles.heroButton}>
            <button>Update</button>
            <button onClick={()=>deleteData(iceCream.id)}>Delete</button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero