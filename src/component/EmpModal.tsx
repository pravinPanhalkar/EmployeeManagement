import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import EmpBtn from "./Button";
import { BASE_URL } from "../Utils/constant";
import { useEmployeeContext } from "../context/useContext";

const EmpModal = (props: Props) => {
  const { open, handleClose } = props;
  const addRef = useRef(null);
  const { setEmp } = useEmployeeContext();
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const nameHandler = (e) => {
    setname(e.target.value);
  };

  const addRecord = () => {
    const obj = {
      name: name,
      username: "sh010",
      address: address,
      graphkey: Math.floor(Math.random() * 3) + 1,
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
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (!data) return;
        fetch(BASE_URL + "/employee")
          .then((resp) => {
            return resp.json();
          })
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
        <div style={{ width: "100%", textAlign: "right" }}>
          <EmpBtn btnRef={addRef} onClick={addRecord}>
            Add
          </EmpBtn>
        </div>
      </Box>
    </Modal>
  );
};

export default EmpModal;
