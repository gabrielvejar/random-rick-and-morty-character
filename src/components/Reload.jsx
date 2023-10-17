"use client"

import styles from "@/styles/Home.module.css"

export default function Refresh () {
    return <button className={`${styles.refresh} ${styles.shadow}`} onClick={()=>location.reload()}>Refresh</button>
}