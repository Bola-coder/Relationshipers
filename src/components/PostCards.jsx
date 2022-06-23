import React from "react";
import style from "./../css/postCards.module.css";

const PostCards = ({ posts }) => {
  return (
    <div className={style.posts}>
      {posts.map((post, index) => (
        <div key={index} className={style.post}>
          <img src={post.image} alt="" />
          <h4>{post.name}</h4>
          <p>{post.descr}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default PostCards;
