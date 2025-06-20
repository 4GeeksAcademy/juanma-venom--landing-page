import React from "react";

const Card = () => (
  <div className="col-md-3">
    <div className="card h-100">
      <img src="https://picsum.photos/200" className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta
          quia laboriosam et fuga!
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Find out More!</a>
      </div>
    </div>
  </div>
);

export default Card;
