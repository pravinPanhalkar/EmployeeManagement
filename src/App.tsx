import { EmployeeContextProvider } from "./context/Employee/EmployeeContextProvider";
import { LoginContextProvider } from "./context/Login/LoginContextProvider";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { AppLayout } from "./component/AppLayout";

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
