import React from 'react'
import treefrog from "../../images/treefrog.jpg";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to Graduate, College of Engineering</h1> <br />
            <img className={styles.image} src={treefrog} alt="tree frog" />
        </div>
    )
}

export default Home
