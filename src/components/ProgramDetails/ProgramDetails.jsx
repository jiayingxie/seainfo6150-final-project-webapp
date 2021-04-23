import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './ProgramDetails.module.css';

export default class ProgramDetails extends Component {
    render() {
        const { department } = this.props;
        const { programName, programOverview } = this.props.program;
        return (
            <div className={styles.container}>
                <Link to={`/engineering/${department.departmentID}`} className={styles.back}>Back to {department.departmentID} page</Link>
                <h1>{programName} </h1>
                <h2>{department.departmentID} department</h2>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: programOverview }} />
            </div>
        )
    }
}
