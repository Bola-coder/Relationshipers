import React from "react";
import Image from "../utils/Images";

const About = () => {
  return (
    <section>
      <div>
        <h4>About Us</h4>
        <p>
          Morbi laoreet nisl malesuada nisi condimentum volutpat. Vestibulum
          imperdiet metus ac neque malesuada viverra non non turpis. Aliquam sit
          amet mollis dolor, finibus porta urna. Nulla facilisi. Vivamus laoreet
          risus in libero pellentesque, at imperdiet nunc tincidunt. Vestibulum
        </p>
        <button>Read More.</button>
      </div>
      <div>
        <div>
          <img src={Image.aboutImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
