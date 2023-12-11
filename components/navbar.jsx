import React from 'react'
import styles from "@/styles/components/navbar.module.scss"
import Link from 'next/link'

const Navbar = () => {

  return (
    <section className={styles.navContainer}>
        <h1>CONES</h1>
        <Link href="/add">
            <button className={styles.button}>
              Add Ice-Cream
            </button>
        
        </Link>
    </section>
  )
}

export default Navbar