import React from "react";
import style from "./../css/offer.module.css";

const Offer = () => {
  return (
    <section className={style.offer}>
      <div className={style.offer__content}>
        <h3>What we offer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          malesuada elit quis arcu sollicitudin, eu bibendum urna tristique.{" "}
        </p>
        <button>Read More </button>
      </div>
    </section>
  );
};

export default Offer;
