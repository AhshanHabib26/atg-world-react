import React from "react";
import Modal from "react-bootstrap/Modal";
import { ImCross } from "react-icons/im";
import Styles from "../Styles/Signup.module.css";
import BannerImg from "../Images/Signin_Banner.png";

const Signup = ({ showSignup, handleCloseSignup }) => {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showSignup}
        onHide={handleCloseSignup}
      >
        <span className={Styles.handleClBtn} onClick={handleCloseSignup}>
          <ImCross />
        </span>
        <div className={Styles.mainWrapper}>
          <div className={Styles.modalTitle}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className={Styles.loginContainer}>
            <div className={Styles.innerLogin}>
              <h1>Create Account</h1>
              <form>
                <div className={Styles.inputContainer}>
                  <div className={Styles.inutBox}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm Password" />
                  <input type="submit" value="Create Account" />
                </div>
              </form>

              <div className={Styles.socialLogin}>
                <div className="facebook">
                  <button type="submit">Sign Up With Facebook</button>
                </div>
                <div className="google">
                  <button type="submit">Sign Up With Google</button>
                </div>
              </div>
            </div>

            <div className={Styles.bannerLogin}>
              <p>
                Already have an account? <span>Sign In</span>{" "}
              </p>
              <div className="BannerContainer">
                <img src={BannerImg} alt="" />
              </div>
              <p className={Styles.termsText}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
