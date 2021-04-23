import React from "react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ErrorPage />);
        expect(container).toMatchSnapshot();
    });
});
