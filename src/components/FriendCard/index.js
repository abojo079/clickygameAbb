import React from "react";
import "./style.css";

const FriendCard = (props) => {

    return (
    <div className="card">
      <div className="img-container" onClick={()=>props.counterCheck(props.friend)}>
      <img alt={props.name} src={props.image} />
    </div>
    </div>
    );

}

export default FriendCard;
