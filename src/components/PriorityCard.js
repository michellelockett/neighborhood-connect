import React from "react";
import { Link } from "react-router-dom";

const PriorityCard = ({ type, rank, description }) => {
  return (
    <Link to="/priorityDetails">
      <div className="priorityCard">
        <div className="priorityCard__banner">
          <p>#{rank} Priority</p>
          <p>{type}</p>
        </div>
        <div className="priorityCard__overview">
          <h2 className="heading-secondary">{type}</h2>
          <p className="descriptions">{description}</p>
        </div>
      </div>
    </Link>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
