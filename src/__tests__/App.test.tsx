import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("App render title and search input", () => {
    render(<App />);
    const titleElement = screen.getByText(/listado de pokemon/i);
    expect(titleElement).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText("Buscar");
    expect(searchInput).toBeInTheDocument();
});
