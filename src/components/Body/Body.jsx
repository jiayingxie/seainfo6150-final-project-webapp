import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Body.module.css';
import ProgramList from '../ProgramList/ProgramList.jsx';

export default class Body extends Component {
    render() {
        const departmetnts = this.props.data;
        let navContent = (
            <div className={styles.navBar}>
                {
                    departmetnts.map(dep => <Link to={`/engineering/${dep.departmentID}`} key={dep.departmentID}>{dep.departmentName}</Link>)
                }
            </div>
        )
        let displayContent = (
            <div className={styles.displayShow}>
                {
                    departmetnts.map(dep => <Route path={`/engineering/${dep.departmentID}`} key={dep.departmentID}><ProgramList department={dep} /></Route>)
                }
            </div>
        )

        return (
            <>
                <header>
                    <nav>
                        {navContent}
                    </nav>
                </header>
                <div>
                    {displayContent}
                </div>
            </>
        )
    }
}
