import React from 'react'
import "./CourseBlog.css";
function CourseBlog() {
    return (
        <div className="CourseBlog">
            <h4 className="heading" >How to sell course blog <a className="seeall">see all</a></h4>
            <ul className="blog" >
                <li >Blended Learning  <a className="days">7days</a></li>
                <li >Join the couse sales bootcamp   <a className="days">7days</a></li>
                <li >12 steps to create  <a className="days">7days</a></li>
            </ul>
        </div>
    )
}

export default CourseBlog;
