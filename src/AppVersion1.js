import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
// import data from './data.json';
import Home from './components/Home/Home.jsx';
import Graduate from './components/Body/Graduate/Graduate.jsx';
import ProgramList from './components/Body/ProgramList/ProgramList.jsx';
import ProgramDetails from './components/Body/ProgramList/ProgramCard/ProgramDetails/ProgramDetails.jsx'

export default class App extends Component {
    state = {
        /* pay attention!!! the data should be set as [] at first, 
            otherwise, it would cause error. */
        data: [],
    }


    async componentDidMount() {
        const response = await fetch("https://demo2247515.mockable.io/engineering");
        console.log(response);
        const responseJson = await response.json();
        console.log("responseJson: ", responseJson);
        this.setState({ data: Object.values(responseJson) })
        // this.setState({ data: responseJson })
    }


    click = () => {
        console.log(this.state.data)
        console.log("------------------");
        // console.log(bioe);
        // console.log("another ", this.findProgram("multidisciplinary", "INFO"))
        let department = this.state.data.find(dep => dep.departmentID === "bioengineering");
        console.log("department, ", department);
        let program = Object.values(department.programs).find(prog => {
            return prog.programID === "BIOE";
        });
        console.log("program, ", program);
    }

    findProgram = (departmentID, programID) => {
        console.log("params： ", departmentID, programID);
        console.log(this.state.data);
        const department = this.state.data.find(dep => { return dep.departmentID === departmentID });
        console.log(department);
        const program = Object.values(department.programs).find(prog => {
            return prog.programID === programID;
        })
        return program;
    }

    show = () => {
        console.log(this.findProgram("bioengineering", "BIOE"));
    }

    render() {
        const temp = this.state.data;

        return (
            <div>
                <button onClick={this.click}> in App</button>
                <button onClick={this.show}>in app test</button>
                <Switch>
                    {/* <Link to={`/engineering/${department}/${programID}`}>{programName}</Link> */}
                    <Route
                        path={`/engineering/:department/:programID`}
                        render={({ match }) => {
                            return <ProgramDetails
                                // program={this.state[match.params.department][match.params.id]}
                                program={this.findProgram(match.params.department, match.params.programID)}
                                department={match.params.department}
                            // program={match.params.programID}
                            />
                        }}
                    />

                    {/* <Route path='/engineering'><Home data={this.state} /></Route> */}
                    <Route path='/engineering'><Home data={this.state.data} /></Route>
                </Switch>

                {/* <Home /> */}
            </div >
        )
    }
}
