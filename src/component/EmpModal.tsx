import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const EmpModal = (props) => {
  const { open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>Modal</Box>
    </Modal>
  );
};

export default EmpModal;
