import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";

test("Should render the child", () => {
    render(
        <Modal
            handleClose={() => console.log("Cerrando")}
            title="Test"
            show={true}
            children={<span>Este es el componente hijo</span>}
        />
    );

    expect(screen.getByTestId("modal-parent")).toBeInTheDocument();
});
