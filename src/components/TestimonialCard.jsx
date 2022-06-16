import React from "react";
import testimonies from "../utils/testimonies";
import style from "./../css/testimonialCard.module.css";

const TestimonialCard = () => {
  return (
    <div className={style.testimonialCard}>
      <div className={style.testimonies}>
        {testimonies?.map((testimony, index) => (
          <div key={index} className={style.testimony}>
            <img src={testimony.image} alt={testimony.name} />
            <h5>{testimony.name}</h5>
            <p>{testimony.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
