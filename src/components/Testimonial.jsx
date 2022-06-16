import React from "react";
import TestimonialCard from "./TestimonialCard";
import style from "./../css/testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={style.testimonial}>
      <h3>What People Say</h3>
      <TestimonialCard />
    </section>
  );
};

export default Testimonial;
