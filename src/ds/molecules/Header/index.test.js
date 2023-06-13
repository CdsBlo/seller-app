import { render, screen } from "../../../test-utils";

import Header from ".";

describe("Header", () => {
  it("renders a lickable logo", () => {
    const title = "Test Title";

    render(<Header title={title} />);

    expect(
      screen.getByRole("heading", { name: title, level: 1 })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "logo " + title })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders welcome caption", () => {
    const caption = "Test Caption";

    render(<Header caption={caption} />);

    expect(screen.getByText(caption)).toBeInTheDocument();
  });
});
