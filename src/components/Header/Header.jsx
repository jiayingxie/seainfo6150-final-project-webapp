import React, { Component, Fragment } from 'react'
import styles from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <Fragment >
                <div className={styles.container}>
                    <span className={styles.neu}> Northeastern University </span><hr />
                    <span className={styles.coe}>COLLEGE OF ENGINEERING</span>
                </div>
            </Fragment>
        )
    }
}
