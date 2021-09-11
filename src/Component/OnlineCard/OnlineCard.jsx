import React from 'react';
import "./OnlineCard.css";
function OnlineCard({username,time}) {
    return (
        <div className="con3">
            <img scr="http://pngimg.com/uploads/square/square_PNG19.png" width="50px" height="50px" />
            <div className="user">
            <h6>{username}</h6>
            <p>{time}</p>
            </div>
        </div>
    )
}

export default OnlineCard;
