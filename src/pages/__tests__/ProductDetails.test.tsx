import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "@/pages/ProductDetails";
import { useProductStore } from "@/store/productStore";

describe("ProductDetailsPage", () => {
  beforeEach(() => {
    useProductStore.setState({
      products: [
        {
          id: "1",
          name: "Test Product",
          description: "A test product",
          price: 99.99,
          images: ["https://via.placeholder.com/200"],
          stock: 10,
          category: "Laptops",
        },
      ],
    });
  });

  const renderWithRouter = () =>
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>,
    );

  it("renders product name", () => {
    renderWithRouter();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  });

  it("renders product image", () => {
    renderWithRouter();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/200");
  });

  it("renders price", () => {
    renderWithRouter();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  it("renders add to cart button", () => {
    renderWithRouter();
    expect(
      screen.getByRole("button", { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });
});
