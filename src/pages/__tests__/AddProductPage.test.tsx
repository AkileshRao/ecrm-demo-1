import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProductPage from "../AddProductPage";

describe("AddProductPage", () => {
  it("renders the Add Product form", () => {
    render(
      <MemoryRouter>
        <AddProductPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("Add New Product")).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add Product/i }),
    ).toBeInTheDocument();
  });
});