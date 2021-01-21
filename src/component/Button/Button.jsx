import React from 'react';
import styles from '../../component/Button/ButtonStyles.module.css'

const Button = ({onLoadMore}) => {
    return (
        <button className={styles.button} type="button" onClick={onLoadMore}>Load more</button>
    )
}
export default Button;