import React from "react";
import { Link } from "react-router-dom";
import "./usersStyles.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              <span>{props.placeCount}</span>{" "}
              {props.placeCount === 1 ? "place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
