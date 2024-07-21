import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

export default function TwoByTwoTitleAndText({
  points,
}) {
  return (
    <section className={styles["two-by-two-title-and-text"]}>
      <ul className={styles['two-by-two-title-and-text-list']}>
        {points.map((p, i) => (
          <li key={i} className={`${styles["two-by-two-title-and-text-point"]}`}>
            <div className={styles["two-by-two-title-and-text-content"]}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

TwoByTwoTitleAndText.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};

TwoByTwoTitleAndText.defaultProps = {
  points: [
    {
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus ad dolorum tenetur aliquam, facilis neque, dolorem totam, modi veniam est. Iste cumque consectetur suscipit sequi ab non molestias quidem?",
    },
    {
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus ad dolorum tenetur aliquam, facilis neque, dolorem totam, modi veniam est. Iste cumque consectetur suscipit sequi ab non molestias quidem?",
    },
    {
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus ad dolorum tenetur aliquam, facilis neque, dolorem totam, modi veniam est. Iste cumque consectetur suscipit sequi ab non molestias quidem?",
    },
    {
      title: "Title goes here",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus ad dolorum tenetur aliquam, facilis neque, dolorem totam, modi veniam est. Iste cumque consectetur suscipit sequi ab non molestias quidem?",
    },
  ],
  _tag: "content-text"
};
