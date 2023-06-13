import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

const counterValue = () => screen.getByRole("marquee");
const incButton = () => screen.getByRole("button", { name: "+1" });
const decButton = () => screen.getByRole("button", { name: "-1" });

// Test suite
describe("Counter", () => {
  // Same test but prefer "it" for the naming convention : it does someting
  // Test
  it("does that", () => {
    // Assertion
    expect(true).toBe(true);
  });

  // Test
  test("that true is true", () => {
    // Assertion
    expect(true).toBe(true);
  });

  it("renders counter value", () => {
    render(<Counter />);

    expect(screen.getByRole("marquee")).toHaveTextContent("0");
  });

  it("renders plus and minus buttons", () => {
    render(<Counter />);

    expect(screen.getByRole("button", { name: "+1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-1" })).toBeInTheDocument();
  });

  it("increments while clicking on + button", () => {
    render(<Counter />);

    userEvent.click(screen.getByRole("button", { name: "+1" }));

    expect(screen.getByRole("marquee")).toHaveTextContent("1");
  });

  it("increments while clicking on - button", () => {
    render(<Counter />);

    userEvent.click(screen.getByRole("button", { name: "-1" }));

    expect(screen.getByRole("marquee")).toBeInTheDocument("0");
  });

  // Refacto :
  it("renders the counter value and the 2 inc/dec buttons", () => {
    render(<Counter />);

    expect(counterValue()).toHaveTextContent("0");
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("increments and decrements properly the counterValue on click", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("1");
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("2");

    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument("1");
    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument("0");
    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument("0");
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("1");
  });
});
