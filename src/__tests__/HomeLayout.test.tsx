import React from "react";
import { render } from "@testing-library/react";
import HomeLayout from "../containers/HomeLayout";

test("Should render the HomeLayout", () => {
    const { container } = render(<HomeLayout />);
    expect(
        container.firstChild?.firstChild?.lastChild?.textContent?.includes(
            "Nuevo"
        )
    ).toBe(true);
});
