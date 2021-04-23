import React, { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Body from './components/Body/Body.jsx';
import ProgramDetails from './components/ProgramDetails/ProgramDetails.jsx';
import Contact from './components/ContactUs/ContactUs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import styles from './App.module.css';

function App() {
    const [fetchedData, setFetchedData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://demo2247515.mockable.io/engineering");
            const responseJson = await response.json();
            setFetchedData(Object.values(responseJson));
        }

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);

    const findDepartment = departmentID => {
        return fetchedData.find(dep => { return dep.departmentID === departmentID });
    }

    const findProgram = (departmentID, programID) => {
        const department = findDepartment(departmentID);
        const program = Object.values(department.programs).find(prog => {
            return prog.programID === programID;
        })
        return program;
    }

    // const findProgram = (departmentID, programID) => {
    //     // first, find the department
    //     const department = fetchedData.find(dep => { return dep.departmentID === departmentID });
    //     // second, I could find the program
    //     const program = Object.values(department.programs).find(prog => {
    //         return prog.programID === programID;
    //     })
    //     return program;
    // }

    return isEmpty(fetchedData) ? null : (
        <>
            <header>
                <Header />
                <nav>
                    <ul>
                        <li>
                            {/* link to home page */}
                            <Link className={styles.link} to="/">Home</Link>
                        </li>
                        <li>
                            {/* link to all departments page */}
                            <Link className={styles.link} to="/engineering">Departments</Link>
                        </li>
                        <li>
                            {/* link to contact us page */}
                            <Link className={styles.link} to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div>
                <Switch>
                    <Route
                        path={`/engineering/:departmentID/:programID`}
                        eaxct
                        render={({ match }) => {
                            return <ProgramDetails
                                department={findDepartment(match.params.departmentID)}
                                program={findProgram(match.params.departmentID, match.params.programID)}
                            />
                        }}
                    />

                    {/* route to all departments page */}
                    <Route eaxct path="/engineering"><Body data={fetchedData} /></Route>

                    {/* route to contact us page */}
                    <Route path="/contactus" exact ><Contact data={fetchedData} /></Route>

                    {/* route to home page */}
                    <Route path="/" exact component={Home} />

                    {/* route to error page */}
                    <Route component={ErrorPage} />
                </Switch>
            </div >
        </>
    )
}

export default App;
