import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Styles from "../../Styles/Post.module.css";
import { GiShare } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";

const Post = ({ post }) => {
  const { Image, Category, Title, User, Views, Description, BtnText } = post;

  return (
    <div className="container mb-3">
      <Col>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <h5 className={Styles.PostCategory}>{Category}</h5>
            <h3 className={Styles.PostTitle}>{Title}</h3>
            <p className={Styles.PostDescription}>
              {Description ? (
                Description
              ) : (
                <button className={Styles.btnContainer}>{BtnText}</button>
              )}
            </p>

            <div className={Styles.footer_wrapper}>
              <div className={Styles.user_wrapper}>
                <div className="profile">
                  <img src={User.UserProfile} alt="" />
                </div>
                <div className={Styles.name}>
                  <h5>{User.UserName}</h5>
                </div>
              </div>
              <div className={Styles.share_wrapper}>
                <div className={Styles.view_area}>
                  <span>
                    <AiOutlineEye size='20' />
                  </span>
                  <p>{Views} Views</p>
                </div>
                <div className={Styles.share_area}>
                  <span>
                    <GiShare size='20' />
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Post;
