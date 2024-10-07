import Link from 'next/link'
import React from 'react'
import styles from "./contact.module.css"

const ContactPage = () => {
  return (
    <div>
      <h3 className={styles.contact}>Contact</h3>
      <h4 className={styles.us}><Link href="contact/contact-us">Contact Us</Link></h4>
    </div>
  )
}

export default ContactPage
