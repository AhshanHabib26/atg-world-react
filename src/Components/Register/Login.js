import React from "react";
import Modal from "react-bootstrap/Modal";
import { ImCross } from "react-icons/im";
import Styles from "../Styles/Login.module.css";
import BannerImg from "../Images/Signin_Banner.png";
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

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
          <div className={Styles.modalTitle}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className={Styles.loginContainer}>
            <div className={Styles.innerLogin}>
              <h1>Sign In</h1>
              <form>
                <div className={Styles.inputContainer}>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="submit" value="Sign In" />
                </div>
              </form>

              <div className={Styles.socialLogin}>
                <div className="facebook">
                  <button type="submit"> <BsFacebook color="#2F6CE5" /> Sign Up With Facebook</button>
                </div>
                <div className="google">
                  <button type="submit"> <FcGoogle/> Sign Up With Google</button>
                </div>
                <p className={Styles.ForgetText}>Forgot Password?</p>
              </div>
            </div>

            <div className={Styles.bannerLogin}>
              <p>
                Don't have an account Yet? <span>Create new for me!</span>{" "}
              </p>
              <div className="BannerContainer">
                <img src={BannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
