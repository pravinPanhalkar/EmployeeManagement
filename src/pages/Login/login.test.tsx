import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { useLoginContext } from "../../context/useContext";

jest.mock("../../context/useContext", () => ({
  useLoginContext: jest.fn(),
}));

describe("Login Component", () => {
  const setLogMock = jest.fn();
  beforeEach(() => {
    (useLoginContext as jest.Mock).mockReturnValue({ setIsLogged: setLogMock });
  });

  it("should render all element.", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText("User Name");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByText("Login");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("on successful setIsLogged should be true.", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText("User Name");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "pravin" } });
    fireEvent.change(passwordInput, { target: { value: "abc" } });

    fireEvent.click(loginButton);

    expect(setLogMock).toHaveBeenCalledWith(true);
  });

  it("setIsLogged should be false on unsuccess attemp", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText("User Name");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "falseUser" } });
    fireEvent.change(passwordInput, { target: { value: "falsePwd" } });

    fireEvent.click(loginButton);
    expect(setLogMock).toHaveBeenCalledWith(false);
  });
});
