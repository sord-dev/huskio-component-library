import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function TextWithImageWithReverse({
  sections,
}) {
  return (
    <section className={styles["text-with-and-image-with-reverse"]}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles["text-with-and-image-with-reverse-container"]} ${
            index % 2 === 1 ? styles["reversed"] : ""
          }`}
        >
          <div className={styles["text-with-and-image-with-reverse-content"]}>
            <h1 className={styles["text-with-and-image-with-reverse-title"]}>
              {section.title}
            </h1>
            <p
              className={styles["text-with-and-image-with-reverse-description"]}
              dangerouslySetInnerHTML={{ __html: section.description }}
            ></p>
          </div>
          <div className={styles["text-with-and-image-with-reverse-image"]}>
            <img
              src={section.image}
              alt={section.alt || ''}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

TextWithImageWithReverse.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

TextWithImageWithReverse.defaultProps = {
  sections: [
    {
      title: "First Title",
      subtitle: "First Subtitle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "",
      alt: "First Image Alt Text",
    },
    {
      title: "Second Title",
      subtitle: "Second Subtitle",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
      alt: "Second Image Alt Text",
    },
  ],
  _tag: "content-image"
};
