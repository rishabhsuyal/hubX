import React from 'react'
import "./NewUser.css";
import OnlineCard from "../OnlineCard/OnlineCard";
function NewUser() {
    return (
        <div className="NewUser">
            <h6>New User <a className="seeall">see all</a></h6>
            <OnlineCard username="hul" time="24 min" />
        </div>
    )
}

export default NewUser
