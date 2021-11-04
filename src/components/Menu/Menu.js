import React from 'react';
import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={`container ${styles.menuContainer}`}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Menu</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;