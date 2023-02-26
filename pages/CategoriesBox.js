import React from 'react'
import styles from '../styles/categories.module.scss'

const data = [
    "Sports","Science","Business","Health","Politics","Entertainment","technology","World"
]

const CategoriesBox = () => {
    return (
        <div className={styles.CategoriesBoxContainer}>
            {data.map((cat,index)=>{
                return (
                    <div key={index} className={styles.categories}>{cat}</div>
                )
            })}
        </div>
    )
}

export default CategoriesBox
