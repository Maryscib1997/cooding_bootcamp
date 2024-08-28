import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ postId }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  const { title, body } = post;

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
