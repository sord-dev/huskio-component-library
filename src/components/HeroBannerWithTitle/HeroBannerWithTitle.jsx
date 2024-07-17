import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function HeroBannerWithTitle({ image, title }) {
  return (
    <section className={styles["hero"]}>
      <img
        src={image}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles['text']}>
        <h1 className={styles["title"]}>{title}</h1>
      </div>
    </section>
  );
}

HeroBannerWithTitle.defaultProps = {
  image: 'https://i.pinimg.com/originals/98/8a/f0/988af0368404ceb08d69f60295065f2c.jpg',
  title: 'Title goes here'
};

HeroBannerWithTitle.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};