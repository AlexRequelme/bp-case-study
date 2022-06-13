import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

test("Show render the search and cancel icons", () => {
    render(
        <SearchForm
            handleReset={() => console.log("Reset")}
            handleSearch={() => console.log("Search")}
        />
    );

    expect(screen.queryByTestId("search-icon")).not.toBeNull();
    expect(screen.queryByTestId("reset-icon")).toBeNull();
});
