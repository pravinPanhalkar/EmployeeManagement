import AppLayout from "./component/AppLayout";
import { EmployeeContextProvider } from "./context/Employee/EmployeeContextProvider";
import { LoginContextProvider } from "./context/Login/LoginContextProvider";

function App() {
  return (
    <>
      <LoginContextProvider>
        <EmployeeContextProvider>
          <AppLayout />
        </EmployeeContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
