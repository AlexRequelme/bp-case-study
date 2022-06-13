import { render, waitFor } from "@testing-library/react";
import React from "react";
import PokemonTable from "../containers/PokemonTable";

test("Should render the Table", async () => {
    const { queryByTestId } = render(
        <PokemonTable
            pokemons={[
                {
                    id: "8080",
                    attack: 50,
                    defense: 50,
                    image: "test",
                    name: "Pikachu",
                },
            ]}
            handleDelete={() => console.log("Delete")}
            handleEdit={() => console.log("Edit")}
            filters={null}
        />
    );

    await waitFor(() => {
        expect(
            queryByTestId("table-body")?.childElementCount
        ).toBeGreaterThanOrEqual(1);
        expect(queryByTestId("not-pokemons")).not.toBeInTheDocument();
    });
});
