import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonItem from "../components/PokemonItem";

test("Show render the correct props", () => {
    const tableBody = document.createElement("tbody");
    render(
        <PokemonItem
            name="Pikachu"
            attack={15}
            defense={20}
            image={"test"}
            onDelete={() => console.log("Delete")}
            onEdit={() => console.log("Edit")}
        />,
        { container: document.body.appendChild(tableBody) }
    );

    expect(screen.getByTestId("pokemon-name")).toHaveTextContent("Pikachu");
    expect(screen.getByTestId("pokemon-img")).toHaveAttribute("src", "test");
});
