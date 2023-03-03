import React, { useState } from 'react'
import styles from '../styles/header.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoriesBox from './CategoriesBox';
import { useRouter } from 'next/router'

const Header = () => {

    const [ focus, setFocus ] = useState(false)

    const focusHandler = (value) => {
        setFocus(value)
    } 

    const router = useRouter()



    return (
        <>
        <div className={styles.mainHeaderContainer}>
        <div className={styles.mainHeader}>
        <div style={{cursor:"pointer"}} onClick={()=>router.push('/')} className={styles.headerLogo}>News Recommend</div>
        <div className={`${styles.headerSearchContainer} ${focus?styles.focusheaderSearchContainer:""} `}>
            <SearchIcon/>
            <input  onFocus={()=>focusHandler(true)} onBlur={()=>focusHandler(false)} type="text" className={styles.searchText} placeholder="Search for news" />
        </div>
        <div  style={{cursor:"pointer"}} className={styles.userContainer}>
            <AccountCircleIcon onClick={()=>router.push('/register')} style={{fontSize:30, color:"#5f6368"}}/>
        </div>
    </div>
        <div className={`${styles.mobileheaderSearchContainer} ${focus?styles.focusheaderSearchContainer:""} `}>
            <SearchIcon/>
            <input  onFocus={()=>focusHandler(true)} onBlur={()=>focusHandler(false)} type="text" className={styles.searchText} placeholder="Search for news" />
        </div>
      <CategoriesBox/>
      </div>
    </>
    )
}

export default Header
