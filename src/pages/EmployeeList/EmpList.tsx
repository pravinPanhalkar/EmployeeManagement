import React, { useRef } from "react";
import { useEmployeeContext } from "../../context/useContext";
import EmpBtn from "../../component/Button";
import FormInput from "../../component/Input";

const EmpList = () => {
  const { emp } = useEmployeeContext();
  const btnRef = useRef();

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
  };
  return (
    <div className="emp-list">
      <div className="btn">
        <EmpBtn ref={btnRef} onClick={addNew}>
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
  );
};

export default EmpList;
