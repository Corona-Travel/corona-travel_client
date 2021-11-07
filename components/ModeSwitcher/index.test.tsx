/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import ModeSwitcher from "./index";

describe("ModeSwitcher", () => {
  it("renders a button", () => {
    render(<ModeSwitcher />);

    const button = screen.getAllByRole("button");

    expect(button).toBeInTheDocument();
  });
});
