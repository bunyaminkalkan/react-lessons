import React from "react";

function Course({ course }) {
  const { id, title, description, price, image } = course;

  return (
    <div className="course">
      <div className="image"><img src={image} alt="image" width={90} height={50} /></div>
      <h4 className="title">{title}</h4>
      <h5 className="description">{description}</h5>
      <h3 className="price">{price} $</h3>
    </div>
  );
}

export default Course;
