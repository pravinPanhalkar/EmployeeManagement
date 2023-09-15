import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { EmpBtn } from "./Button";
import { BASE_URL } from "../Utils/constant";
import { useEmployeeContext } from "../context/useContext";

interface EmpModalProps {
  open: boolean;
  handleClose: () => void;
}

export const EmpModal: React.FC<EmpModalProps> = ({ open, handleClose }) => {
  const addRef = useRef(null);
  const { setEmp } = useEmployeeContext();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addRecord = () => {
    const obj = {
      name: name,
      username: "sh010",
      address: address,
      graphkey: 4,
      salary: [
        {
          month: "Jan23",
          amount: Math.floor(Math.random() * 100000) + 5000,
        },
        {
          month: "Feb23",
          amount: Math.floor(Math.random() * 100000) + 5000,
        },
        {
          month: "Mar23",
          amount: Math.floor(Math.random() * 100000) + 5000,
        },
        {
          month: "Apr23",
          amount: Math.floor(Math.random() * 100000) + 5000,
        },
      ],
    };
    if (!name || !address) {
      return;
    }
    fetch(BASE_URL + "/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then(() => {
        fetch(BASE_URL + "/employee")
          .then((resp) => resp.json())
          .then((result) => {
            setEmp(result);
            handleClose();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal">
        <TextField
          label="Name"
          type="text"
          variant="standard"
          style={{ width: "100%" }}
          onChange={nameHandler}
        />
        <TextField
          label="Address"
          type="text"
          variant="standard"
          style={{ width: "100%" }}
          onChange={addressHandler}
        />
        <Box style={{ width: "100%", textAlign: "right" }}>
          <EmpBtn ref={addRef} onClick={addRecord}>
            Add
          </EmpBtn>
        </Box>
      </Box>
    </Modal>
  );
};
