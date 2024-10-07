import Link from 'next/link'
import React from 'react'
import style from "./service.module.css"

const Service = () => {
  return (
    <div>
      <h1 className={style.ser}>Service</h1>
      <h1 className={style.serv}><Link href="service/service-here">Service Here</Link></h1>
    </div>
  )
}

export default Service
