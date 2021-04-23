import React, { Component } from 'react';
import ProgramCard from '../ProgramCard/ProgramCard.jsx';
import styles from './ProgramList.module.css';

export default class ProgramList extends Component {
    render() {
        const { department } = this.props;
        let programs = Object.values(department.programs);
        let displayContent = (
            <ul className={styles.container} >
                {programs.map(program => <ProgramCard key={program.programID} {...program} department={this.props.department.departmentID} />)}
            </ul>
        )

        return (
            <div>
                {displayContent}
            </div>
        )
    }
}
