import React from 'react';
import styles from './styles.module.css'

function ComponentTwo({ title, description, ...props }) {
    return (
        <div className={styles['description-component']}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ComponentTwo;