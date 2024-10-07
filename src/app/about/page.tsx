import Link from 'next/link';
import React from 'react'
import style from "./about.module.css"

const About = () => {
  return (
    <div>
      <h2 className={style.text}>i Am About Page</h2>
     <h3 className={style.green}><Link  href="about/about-us"> About us</Link></h3>
    </div>
  )
}

export default About;
