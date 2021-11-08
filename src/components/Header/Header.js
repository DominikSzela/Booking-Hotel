import React from 'react';
import styles from './Header.module.css'
import SeachBar from './Searchbar/Searchbar'

function Header(props) {
    return (
        <header className={`${styles.header} container`}>
            <SeachBar onSearch={props.onSearch}/>
        </header>
    )
}

export default Header;