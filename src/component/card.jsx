import React from "react";

const Card = ({ title, text, image, button }) => (
  <div className="col-md-3">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{button}</a>
      </div>
    </div>
  </div>
);

export default Card;
