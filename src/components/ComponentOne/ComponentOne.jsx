import React from 'react';
import styles from './styles.module.css'

function ComponentOne({ label, value, ...props }) {
    return (
        <div className={styles.component}>
            <label>{label}</label>
            <input type="text" value={value} />
        </div>
    )
}

export default ComponentOne;