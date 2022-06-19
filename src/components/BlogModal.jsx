import React from "react";
import blogs from "./../utils/blogList";
import style from "./../css/blogModal.module.css";
const BlogModal = ({showModal}) => {
  return (
    <section className={style.blog__modal}>
      <div className={style.blogs}>
        {blogs.map((blog, index) => (
          <div key={index} className={style.blog}>
            <img src={blog.image} alt={blog.name} />
            <h5>{blog.name}</h5>
            <p>{blog.descr}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogModal;
