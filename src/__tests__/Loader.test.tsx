import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

test("Should render the loader", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
});
