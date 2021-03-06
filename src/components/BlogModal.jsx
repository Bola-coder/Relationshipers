import React from "react";
import { FaTimes } from "react-icons/fa";
import blogs from "./../utils/blogList";
import style from "./../css/blogModal.module.css";
const BlogModal = ({ handleShowModal }) => {
  return (
    <section className={style.blog__modal}>
      <div className={style.blogs}>
        <div className={style.icon} onClick={handleShowModal}>
          <FaTimes />
        </div>
        {blogs.map((blog, index) => (
          <div key={index} className={style.blog}>
            <img src={blog.image} alt={blog.name} />
            <h5>{blog.name}</h5>
            <p>
              {blog.descr.length > 40 ? blog.descr.split(0, 40) : blog.descr}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogModal;
