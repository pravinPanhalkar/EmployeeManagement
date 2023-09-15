import React from "react";
import { useEmployeeContext } from "../../context/useContext";
import { EmpBtn } from "../../component/Button";

import { EmpModal } from "../../component/EmpModal";
import Box from "@mui/material/Box";

export const EmpList = () => {
  const { emp } = useEmployeeContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderList = () => {
    const temp = emp.map(
      (item: { id: string; name: string; address: string }) => {
        return (
          <tr key={item.id} style={{ width: "50%", textAlign: "left" }}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
          </tr>
        );
      }
    );
    return temp;
  };
  const addNew = () => {
    console.log("add new");
    handleOpen();
  };

  return (
    <>
      <Box className="emp-list" data-testid="list">
        <Box className="btn">
          <EmpBtn onClick={addNew}>Add</EmpBtn>
        </Box>
        <table data-testid="table">
          <thead style={{ width: "auto" }}>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      </Box>
      <EmpModal open={open} handleClose={handleClose} />
    </>
  );
};
