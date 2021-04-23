import React from "react";
import ContactUs from "./ContactUs";

describe("ContactUs tests", () => {
    // the method is to get test data
    const fetchData = async () => {
        const response = await fetch(`https://demo2247515.mockable.io/engineering`);
        const responseJson = await response.json();
        return Object.values(responseJson);
    };
    it("renders correctly when passed a data prop", async () => {
        const fetchedData = await fetchData();
        const { container } = render(<ContactUs data={fetchedData} />);
        expect(container).toMatchSnapshot();
    });
});