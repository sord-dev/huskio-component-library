import React from 'react';
import styles from './styles.module.css'

import PropTypes from 'prop-types';

function ComponentTwo({ title, description, ...props }) {
    return (
        <div className={styles['description-component']}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

ComponentTwo.defaultProps = {
    title: 'Title goes here',
    description: 'Description goes here'
}

ComponentTwo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ComponentTwo;