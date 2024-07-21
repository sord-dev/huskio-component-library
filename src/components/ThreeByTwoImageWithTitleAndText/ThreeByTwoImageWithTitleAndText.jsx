import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function ThreeByTwoImageWithTitleAndText({
  cards,
}) {
  return (
    <section className={styles["three-by-two-image-with-title-and-text"]}>
      <ul className={styles['three-by-two-image-with-title-and-text-list']}>
        {cards.map((c, i) => (
          <li key={i} className={`${styles['three-by-two-image-with-title-and-text-item']} ${styles[c.background]}`}>
            {c.background == null ? (
              <img src={c.image} alt={c.alt} layout="fill" objectFit="cover" />
            ) : (
              <div className={styles["three-by-two-image-with-title-and-text-item-content"]}>
                <h1>{c.title}</h1>
                <p>{c.desc}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

ThreeByTwoImageWithTitleAndText.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      background: PropTypes.oneOf([null, "primary", "white"]),
      title: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

ThreeByTwoImageWithTitleAndText.defaultProps = {
  cards: [
    {
      background: "primary",
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
    {
      background: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
    {
      background: "white",
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
    {
      background: null,
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
    {
      background: "white",
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
    {
      background: "primary",
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis unde ad, atque labore tenetur vero veniam soluta illo, blanditiis repudiandae officia praesentium optio beatae odit cum sequi eum! Repellendus!",
      image: "",
      alt: "",
    },
  ],
  _tag: "content"
};
