import React from "react";
import styles from "./index.module.css";

import PropTypes from "prop-types";

export default function TitleWithBannerAndThreePoints({
  title,
  image,
  alt,
  points,
}) {
  return (
    <section className={styles["title-with-banner-and-three-points"]}>
      <h1>{title}</h1>
      <div className={styles["title-with-banner-and-three-points-image"]}>
        <img src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <ul className={styles['title-with-banner-and-three-points-list']}>
        {points.map((p, i) => (
          <li key={i} className={styles['title-with-banner-and-three-points-item']}>
            <h5>{p.title}</h5>
            <p>{p.point}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

TitleWithBannerAndThreePoints.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      point: PropTypes.string,
    })
  ),
};

TitleWithBannerAndThreePoints.defaultProps = {
  title: "Title goes here",
  image: "",
  alt: "",
  points: [
    {
      title: "Point title",
      point:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio, dolore cupiditate accusantium laborum optio consectetur quaerat nobis tenetur vel fugit magni assumenda earum? Placeat est reiciendis accusantium fugiat optio.",
    },
    {
      title: "Point title",
      point:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio, dolore cupiditate accusantium laborum optio consectetur quaerat nobis tenetur vel fugit magni assumenda earum? Placeat est reiciendis accusantium fugiat optio.",
    },
    {
      title: "Point title",
      point:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio, dolore cupiditate accusantium laborum optio consectetur quaerat nobis tenetur vel fugit magni assumenda earum? Placeat est reiciendis accusantium fugiat optio.",
    },
  ],
  _tag: "content"
};
