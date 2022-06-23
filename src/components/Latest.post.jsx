import React from "react";
import style from "./../css/latestPost.module.css";
import posts from "./../utils/posts";
import PostCards from "./PostCards";

const LatestPost = () => {
  return (
    <section className={style.latest__post}>
      <h3>Latest Posts</h3>
      <PostCards posts={posts} />
    </section>
  );
};

export default LatestPost;
