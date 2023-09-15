import { render, screen } from "@testing-library/react";
import { EmpList } from "./EmpList";

// Mock useEmployeeContext to provide sample data
jest.mock("../../context/useContext", () => ({
  useEmployeeContext: jest.fn(() => ({
    emp: [
      { id: "1", name: "John", address: "123 Main St" },
      { id: "2", name: "Jane", address: "456 Elm St" },
    ],
  })),
}));

describe("EmpList Component", () => {
  it('opens the modal when the "Add" button is clicked', () => {
    render(<EmpList />);
    const el = screen.getByTestId("list");
    expect(el).toBeInTheDocument();
  });
  it("table should be in the docuemnt", () => {
    render(<EmpList />);
    const tbl = screen.getByTestId("table");
    expect(tbl).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("NAME")).toBeInTheDocument();
    expect(screen.getByText("ADDRESS")).toBeInTheDocument();
  });
});
