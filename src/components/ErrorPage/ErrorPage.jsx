import React from 'react';
import { Link, Route } from "react-router-dom";
import Home from '../Home/Home.jsx';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <h1>Sorry, could not find the page.</h1>
            <h2>Go back to the <Link to="/">HOME</Link> page.</h2>
            <Route path="/" exact component={Home} />
        </div>
    )
}

export default ErrorPage;