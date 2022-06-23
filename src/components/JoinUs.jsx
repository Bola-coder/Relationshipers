import React from "react";
import style from "./../css/joinUs.module.css";

const JoinUs = () => {
  return (
    <section className={style.joinUs}>
      <div className={style.joinUs__text}>
        <h3>Join Us</h3>
        <p>Be the first to geet the latest update as it comes</p>
        <input type="email" placeholder="example@example.com" />
        <button>Sign Up</button>
      </div>
    </section>
  );
};

export default JoinUs;
