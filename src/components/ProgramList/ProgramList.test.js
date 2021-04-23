import React from "react";
import ProgramList from "./ProgramList";

describe("ProgramList tests", () => {
    const mul = "multidisciplinary";
    // the method is to get test data
    const fetchData = async () => {
        const response = await fetch(`https://demo2247515.mockable.io/engineering`);
        const responseJson = await response.json();
        return Object.values(responseJson);
    };
    it("renders correctly when passed a department prop", async () => {
        const fetchedData = await fetchData();
        const department = fetchedData.find(dep => { return dep.departmentID === mul });
        const { container } = render(<ProgramList department={department} />);
        expect(container).toMatchSnapshot();
    });
});