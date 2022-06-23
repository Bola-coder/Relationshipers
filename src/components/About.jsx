import React from "react";
import Image from "../utils/Images";
import style from "./../css/about.module.css";

const About = () => {
  return (
    <section>
      <div className={style.about}>
        <div className={style.about__text}>
          <h4>About Us</h4>
          <p>
            Morbi laoreet nisl malesuada nisi condimentum volutpat. Vestibulum
            imperdiet metus ac neque malesuada viverra non non turpis. <br />{" "}
            <br />
            Aliquam sit amet mollis dolor, finibus porta urna. Nulla facilisi.
            Vivamus laoreet risus in libero pellentesque, at imperdiet nunc
            tincidunt. Vestibulum
          </p>
          <button>Read More.</button>
        </div>
        <div className={style.about__image}>
          <img src={Image.aboutImage} alt="" />
        </div>
      </div>
      <div className={style.about__foot}></div>
    </section>
  );
};

export default About;
