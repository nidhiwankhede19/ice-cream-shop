"use client"
import supabase from "@/supabase/config"
import React, { useState } from 'react'
import styles from "@/styles/components/add/add.module.scss"
import Link from "next/link"


const Update = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const updateData = async () => {
    
const { error } = await supabase.from('countries').update({ name: 'Australia' }).eq('id', 1)
    if (error) {
      alert("Error in submitting data");
      console.log(error);
    } else {
      alert("Data submitted successfully!");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    submitData();
  };

  return (
    <section className={styles.addContainer}>
      <form>
        <div className={styles.name}>
          <label>Name: </label>
          <select>
            <option>
                
            </option>
          </select>
        </div>
        <div className={styles.description}>
          <label>Description:</label>
          <textarea
            id="description" // Add a unique identifier for the textarea
            cols="28"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.price}>
          <label>Price: </label>
          <input
            type="text"
            id="price" // Add a unique identifier for the input field
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.addButton}></div>
        <button className={styles.button} onClick={handleClick}>
          Add Ice-Cream
        </button>
      </form>
      <Link href="/">
        <button className={styles.homeButton}>Return to Home...</button>
      </Link>
    </section>
  );
};

export default Update;
