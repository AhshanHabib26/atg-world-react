import { useEffect, useState } from "react";

const UsePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);


  return [posts]
};

export default UsePost;
