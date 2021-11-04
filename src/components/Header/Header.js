import React from 'react';
import styles from './Header.module.css'
import SeachBar from './Searchbar/Searchbar'

function Header() {
    return (
        <header className={`${styles.header} container`}>
            <SeachBar />
        </header>
    )
}

export default Header;