import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

const counterValue = () => screen.getByRole("marquee");
const incButton = ({ step = 1 } = { step: 1 }) =>
  screen.getByRole("button", { name: "+" + step });
const decButton = ({ step = 1 } = { step: 1 }) =>
  screen.getByRole("button", { name: "-" + step });

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

    expect(counterValue()).toHaveTextContent(/^0$/);
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("increments and decrements properly the counterValue on click", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^1$/);
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^2$/);

    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument(/^1$/);
    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument(/^0$/);
    userEvent.click(decButton());
    expect(counterValue()).toBeInTheDocument(/^0$/);
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^1$/);
  });

  describe("while startValue === 10", () => {
    it("renders the counter value and the 2 inc/dec buttons", () => {
      render(<Counter startValue={10} />);

      expect(counterValue()).toHaveTextContent(/^10$/);
      expect(incButton()).toBeInTheDocument();
      expect(decButton()).toBeInTheDocument();
    });

    it("increments and decrements properly the counterValue on click", () => {
      render(<Counter startValue={10} />);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^11$/);
      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^12$/);

      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^11$/);
      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^10$/);
      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^10$/);
      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^11$/);
    });
  });

  describe("while startValue === 100", () => {
    it("renders the counter value and the 2 inc/dec buttons", () => {
      render(<Counter startValue={100} />);

      expect(counterValue()).toHaveTextContent(/^100$/);
      expect(incButton()).toBeInTheDocument();
      expect(decButton()).toBeInTheDocument();
    });

    it("increments and decrements properly the counterValue on click", () => {
      render(<Counter startValue={100} />);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^101$/);
      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^102$/);

      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^101$/);
      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^100$/);
      userEvent.click(decButton());
      expect(counterValue()).toBeInTheDocument(/^100$/);
      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^101$/);
    });
  });

  describe("while step 3", () => {
    const step = 3;

    it("renders the counter value and the 2 inc/dec buttons", () => {
      render(<Counter step={step} />);

      expect(counterValue()).toHaveTextContent(/^0$/);
      expect(incButton({ step })).toBeInTheDocument();
      expect(decButton({ step })).toBeInTheDocument();
    });

    it("increments and decrements properly the counterValue on click", () => {
      render(<Counter step={3} />);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^3$/);
      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^6$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toBeInTheDocument(/^3$/);
      userEvent.click(decButton({ step }));
      expect(counterValue()).toBeInTheDocument(/^0$/);
      userEvent.click(decButton({ step }));
      expect(counterValue()).toBeInTheDocument(/^0$/);
      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^3$/);
    });
  });

  xdescribe("Ignore this one because it's an xdescribe", () => {
    it("won't be run because xdescibe", () => {
      expect(true).toBe(true);
    });
  });
});
