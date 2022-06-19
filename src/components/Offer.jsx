import React, { useState } from "react";
import BlogModal from "./BlogModal";
import style from "./../css/offer.module.css";

const Offer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  console.log(showModal);
  return (
    <section className={`${style.offer} ${showModal ? style.overlay : ""}`}>
      <div className={style.offer__content}>
        <h3>What we offer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          malesuada elit quis arcu sollicitudin, eu bibendum urna tristique.{" "}
        </p>
        <button onClick={handleShowModal}>Read More </button>
      </div>
      <div style={{ position: "fixed" }} onClick={(e) => e.stopPropagation()}>
        {showModal && <BlogModal handleShowModal={handleShowModal} />}
      </div>
    </section>
  );
};

export default Offer;
