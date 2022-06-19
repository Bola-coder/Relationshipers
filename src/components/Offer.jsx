import React, { useState } from "react";
import BlogModal from "./BlogModal";
import style from "./../css/offer.module.css";

const Offer = () => {
  const [showModal, setSHowModal] = useState(false);

  const handleShowModal = () => {
    setSHowModal((prev) => !prev);
  };
  return (
    <section
      className={`${style.offer} ${showModal ? style.overlay : ""}`}
      onClick={showModal ? handleShowModal : ""}>
      <div className={style.offer__content}>
        <h3>What we offer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          malesuada elit quis arcu sollicitudin, eu bibendum urna tristique.{" "}
        </p>
        <button onClick={handleShowModal}>Read More </button>
      </div>
      {showModal && <BlogModal />}
    </section>
  );
};

export default Offer;
