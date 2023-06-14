import { product } from "../../../fixtures";
import ProductRoute from ".";
import { render, screen } from "../../../test-utils";

const productId = 12;
const myProduct = product(productId);

describe("ProductRoute", () => {
  it("renders a progress while loading data", async () => {
    render(<ProductRoute />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders a back button, a title and an image when data loaded", async () => {
    render(<ProductRoute />, {
      path: "/products/:productId",
      initialEntries: [`/products/${productId}`],
    });

    await screen.findByRole("heading", {
      level: 4,
      name: myProduct.name,
    });

    expect(
      screen.getByRole("img", { name: myProduct.name })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "back" })).toBeInTheDocument();
  });
});
