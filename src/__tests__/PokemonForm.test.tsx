import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonForm from "../containers/PokemonForm";

test("Should render the Form", () => {
    render(
        <PokemonForm
            pokemon={{
                id: "8080",
                attack: 50,
                defense: 50,
                image: "test",
                name: "Pikachu",
            }}
            handleClose={() => console.log("Close")}
            handleSave={() => console.log("Save")}
        />
    );

    expect(screen.getByLabelText(/Nombre:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Imagen:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ataque:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Defensa:/i)).toBeInTheDocument();
});

