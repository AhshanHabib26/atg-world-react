import React from "react";
import Modal from "react-bootstrap/Modal";
import { ImCross } from "react-icons/im";
import Styles from "../Styles/Login.module.css";

const Login = ({ show, handleClose }) => {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <span className={Styles.handleClBtn} onClick={handleClose}>
          <ImCross />
        </span>
        <div className={Styles.mainWrapper}>
          <div>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
