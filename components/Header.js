import React from 'react'
import styles from '../styles/Header.module.scss'
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    
			<div className={styles.mainHeader}>
            <div className={styles.headerLogo}>News Recommend</div>
            <div className={styles.headerSearchContainer}>
                <SearchIcon/>
            </div>
        </div>
        
  )
}

export default Header