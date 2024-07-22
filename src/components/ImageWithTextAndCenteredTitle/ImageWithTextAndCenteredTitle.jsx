import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function ImageWithTextAndCenteredTitle({
  title,
  image,
  description,
  alt,
}) {
  return (
    <section className={styles["image-with-text-and-centered-title"]}>
      <h1 className={styles["image-with-text-and-centered-title-title"]}>
        {title}
      </h1>
      <div className={styles["image-with-text-and-centered-title-container"]}>
        <div className={styles["image-with-text-and-centered-title-image"]}>
          <img
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["image-with-text-and-centered-title-content"]}>
          <p
            className={styles["image-with-text-and-centered-title-description"]}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
}

ImageWithTextAndCenteredTitle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
};

ImageWithTextAndCenteredTitle.defaultProps = {
  title: "Title goes here",
  image: "",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores, nobis nulla, quis atque minus non, soluta vitae eligendi iure nemo totam sequi. Consequuntur ut neque quis! Aspernatur, tempora qui.",
  alt: "Background Image",
  _tag: "content-image"
};
