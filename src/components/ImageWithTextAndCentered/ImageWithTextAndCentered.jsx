import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function ImageWithTextAndCentered({ title, image, description, alt, reverse }) {
  return (
    <section className={styles["image-with-text-and-centered"]}>
      <h1 className={styles["image-with-text-and-centered-title"]}>{title}</h1>
      <div
        className={`${styles["image-with-text-and-centered-container"]} ${
          reverse ? styles["reversed"] : ""
        }`}
      >
        <div className={styles["image-with-text-and-centered-image"]}>
          <img src={image} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <div className={styles["image-with-text-and-centered-content"]}>
          <p
            className={styles["image-with-text-and-centered-description"]}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
}

ImageWithTextAndCentered.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
  reverse: PropTypes.bool,
};

ImageWithTextAndCentered.defaultProps = {
  title: "Title goes here",
  image: "",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores, nobis nulla, quis atque minus non, soluta vitae eligendi iure nemo totam sequi. Consequuntur ut neque quis! Aspernatur, tempora qui.",
  alt: "",
  reverse: false,
  _tag: "content-image"
};

