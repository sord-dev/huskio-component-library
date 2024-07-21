import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function TwoByTwoTitleWithImage({
  sections,
}) {
  return (
    <section className={styles["two-by-two-title-with-image"]}>
      <h2>Our Services</h2>
      <div className={styles["two-by-two-title-with-image-grid"]}>
        {sections.map((s, index) => (
          <div
            key={index}
            className={`${styles["two-by-two-title-with-image-item"]} ${
              s.reverse ? styles["reverse"] : ""
            }`}
          >
            {s.link ? (
              <a href={s.link}>
                <h3 className={styles["two-by-two-title-with-image-title"]}>
                    {s.title}
                  </h3>
              </a>
            ) : (
              <h3 className={styles["two-by-two-title-with-image-title"]}>
                {s.title}
              </h3>
            )}
            <div className={styles["two-by-two-title-with-image-content"]}>
              {s.link ? (
                <a href={s.link}>
                  <a>
                    <img
                      src={s.image}
                      alt={s.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </a>
              ) : (
                <img
                  src={s.image}
                  alt={s.alt}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

TwoByTwoTitleWithImage.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      // reverse: PropTypes.bool,
      link: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

TwoByTwoTitleWithImage.defaultProps = {
  sections: [
    {
      title: "Title goes here",
      image: "",
      reverse: false,
      link: null,
      alt: "",
    },
    {
      title: "Title goes here",
      image: "",
      reverse: true,
      link: null,
      alt: "",
    },
    {
      title: "Title goes here",
      image: "",
      reverse: false,
      link: null,
      alt: "",
    },
    {
      title: "Title goes here",
      image: "",
      reverse: true,
      link: null,
      alt: "",
    },
  ],
  _tag: "content",
};
