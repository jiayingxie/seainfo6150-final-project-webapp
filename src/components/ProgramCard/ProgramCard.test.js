import React from "react";
import ProgramCard from "./ProgramCard";

describe("ProgramCard tests", () => {
    let department;
    let program;

    // the method is to get test data
    const fetchData = async () => {
        const mul = "multidisciplinary";
        const CSECS = "CSECS";
        const response = await fetch(`https://demo2247515.mockable.io/engineering`);
        const responseJson = await response.json();
        department = await responseJson[mul];
        program = await Object.values(department.programs).find(prog => { return prog.programID === CSECS });
    };
    it("renders correctly when passed a department prop and program props", async () => {
        await fetchData();
        const { container } = render(<ProgramCard department={department} {...program} />);
        expect(container).toMatchSnapshot();
    });
});