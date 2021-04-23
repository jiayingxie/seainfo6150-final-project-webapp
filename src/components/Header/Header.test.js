import React from "react";
import Header from "./Header";

describe("Header tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});