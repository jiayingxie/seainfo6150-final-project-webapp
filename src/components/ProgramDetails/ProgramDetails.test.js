import React from "react";
import ProgramDetails from "./ProgramDetails";

describe("ProgramDetails tests", () => {
    let department;
    let program;
    // the method is to get test data
    const fetchDepartment = async () => {
        const mul = "multidisciplinary";
        const CSECS = "CSECS";
        const response = await fetch(`https://demo2247515.mockable.io/engineering`);
        const responseJson = await response.json();
        department = await responseJson[mul];
        program = await Object.values(department.programs).find(prog => { return prog.programID === CSECS });
        return program;
    };
    it("renders correctly when passed a program prop", async () => {
        const programData = await fetchDepartment();
        const { container } = await render(<ProgramDetails department={department} program={programData} />);
        expect(container).toMatchSnapshot();
    });
});