import React from 'react';
import "./ImageCard.css";

function ImageCard({ url, brand, num }) {
    return (
        <div className="containI">
            <img className="image" src={url} />
            <div class="conta">
                <h6><b>{brand}</b></h6>
                <p>{num}</p>
            </div>
        </div>
    )
}

export default ImageCard
