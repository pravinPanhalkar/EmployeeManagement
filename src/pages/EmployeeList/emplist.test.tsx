import { render, screen } from "@testing-library/react";
import { EmpList } from "./EmpList";

// Mock useEmployeeContext to provide sample data
jest.mock("../../context/useContext", () => ({
  useEmployeeContext: jest.fn(() => ({
    emp: [
      { id: "1", name: "pravin", address: "123 mumbai east " },
      { id: "2", name: "suhas", address: "456 Goa" },
    ],
  })),
}));

describe("EmpList Component", () => {
  it('opens the modal when the "Add" button is clicked.', () => {
    render(<EmpList />);
    const el = screen.getByTestId("list");
    expect(el).toBeInTheDocument();
  });
  it("table should be in the docuemnt.", () => {
    render(<EmpList />);
    const tbl = screen.getByTestId("table");
    expect(tbl).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("NAME")).toBeInTheDocument();
    expect(screen.getByText("ADDRESS")).toBeInTheDocument();
  });
});
