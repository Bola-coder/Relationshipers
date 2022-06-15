import React from "react";
import Image from "../utils/Images";
import style from "./../css/banner.module.css";
const Banner = () => {
  return (
    <section className={style.banner}>
      <div className={style.banner__content}>
        <div className={style.text}>
          <h1>Hope To Better Relationship & Lifestyle</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada elit quis arcu sollicitudin, eu bibendum urna tristique.{" "}
          </p>
          <button>Get Started</button>
        </div>
        <div className={style.image}>
          <img src={Image.bannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
