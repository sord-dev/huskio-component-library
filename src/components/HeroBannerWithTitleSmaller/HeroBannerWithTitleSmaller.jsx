import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function HeroBannerWithTitleSmaller({
  image,
  title,
  alt,
}) {
  return (
    <section className={styles["hero"]}>
      <img
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div>
        <h1 className={styles["title"]}>{title}</h1>
      </div>
    </section>
  );
}

HeroBannerWithTitleSmaller.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};

HeroBannerWithTitleSmaller.defaultProps = {
  image: "",
  title: "Title goes here",
  alt: "Hero Banner Image",
  _tag: "heading"
};
