import React from "react";
import Image from "../utils/Images";
import style from "./../css/nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={Image.logo} alt="Logo" />
      </div>
      <div className={style.links}>
        <a href="#s">Home</a>
        <a href="#s">About</a>
        <a href="#s">Contact</a>
        <a href="#s">Blog</a>
      </div>
      <div className={style.search}>
        <input type="search" nam="search" placeholder="Search Blog" />
      </div>
    </nav>
  );
};

export default Nav;
