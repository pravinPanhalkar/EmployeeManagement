import {
  render,
  screen,
  cleanup,
  renderHook,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./Login";

describe("login test Suite", () => {
  test("should render login", () => {
    render(<Login />);
    const loginEl = screen.getByTestId("login-cont");
    const loginFrm = screen.getByTestId("login-form");
    const userinput = screen.getByTestId("username");
    const password = screen.getByTestId("password");
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
    // expect(loginEl).toMatchSnapshot();
    expect(loginFrm).toBeInTheDocument();
    expect(userinput).toBeInTheDocument();
    expect(loginEl).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("submit username and password", () => {
    // ARRANGE
    const username = "pravin";
    const password = "abc";
    const loginHandler = jest.fn();
    // expect(true).toBe(true);
  });
});
