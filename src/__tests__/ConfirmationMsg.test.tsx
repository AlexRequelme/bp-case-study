import React from "react";
import { render, screen } from "@testing-library/react";
import ConfirmationMsg from "../components/ConfirmationMsg";

test("Should render message and buttons", () => {
    render(
        <ConfirmationMsg
            msg="Este es un mensaje de prueba."
            handleCancel={() => console.log("Cancel")}
            handleConfirm={() => console.log("Confirm")}
        />
    );

    expect(
        screen.getByText(/Este es un mensaje de prueba./i)
    ).toBeInTheDocument();
});
