import React, { useRef } from "react";
import { useEmployeeContext } from "../../context/useContext";
import EmpBtn from "../../component/Button";

import EmpModal from "../../component/EmpModal";
import { BASE_URL } from "../../Utils/constant";

const EmpList = () => {
  const { emp, setEmp } = useEmployeeContext();
  const btnRef = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderList = () => {
    const temp = emp.map(
      (item: { id: string; name: string; address: string }, index) => {
        return (
          <tr key={index} style={{ width: "50%", textAlign: "left" }}>
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
      <div className="emp-list">
        <div className="btn">
          <EmpBtn btnRef={btnRef} onClick={addNew}>
            Add
          </EmpBtn>
        </div>
        <table>
          <thead style={{ width: "auto" }}>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      </div>
      <EmpModal open={open} handleClose={handleClose} />
    </>
  );
};

export default EmpList;
