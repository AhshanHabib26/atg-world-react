import React from "react";
import UsePost from "../../CustomHooks/UsePost";
import Post from "./Post";
import Styles from "../../Styles/Posts.module.css";
import {VscLocation} from 'react-icons/vsc'
import {FaPen} from 'react-icons/fa'

const Posts = () => {
  const [posts] = UsePost();

  return (
    <div className="container main_container mt-4">
      <div className={Styles.postsContainer}>
        <div className={Styles.innerPostsWrapper}>
          {posts?.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
        <div className={Styles.innerAside}>
          <div className={Styles.innerDisplay}>
            <div className={Styles.text}>
              <p><VscLocation/></p>
              <p>Noida, India</p>
            </div>
            <div className="icon">
              <span><FaPen/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
