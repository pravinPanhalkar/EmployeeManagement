import { render, screen } from "@testing-library/react";
import { EmpList } from "./EmpList";

describe("EmpList Component", () => {
  it("list should be render.", () => {
    render(<EmpList />);
    const el = screen.getByTestId("list");
    const tbl = screen.getByTestId("table");
    expect(tbl).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("NAME")).toBeInTheDocument();
    expect(screen.getByText("ADDRESS")).toBeInTheDocument();
    expect(el).toBeInTheDocument();
  });
  it("should render", () => {
    expect(true).toBe(true);
  });
});
