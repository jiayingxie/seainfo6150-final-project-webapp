import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProgramCard.module.css';

export default class ProgramCard extends Component {
    render() {
        const { department, programID, programName } = this.props;
        return (
            <li className={styles.container}>
                <div className={styles.card}>
                    <h2>{programID}</h2>
                    <h4 className={styles.link}><Link to={`/engineering/${department}/${programID}`}>{programName}</Link></h4>
                </div>
            </li>
        )
    }
}
