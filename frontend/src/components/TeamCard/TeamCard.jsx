import React from "react";

export default function TeamCard (props) {
    return (
        <div className="team-card">
            <h4>{props.fullName}</h4>
            <img src={props.src} title={props.fullName} />
            <p>{props.description}</p>
        </div>
    )
}