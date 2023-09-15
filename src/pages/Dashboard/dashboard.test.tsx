import { render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

describe("Dashboard Component", () => {
  it("should component render", () => {
    render(<Dashboard />);
    const el = screen.getByTestId("chart-container");
    expect(el).toBeInTheDocument();
  });
});
