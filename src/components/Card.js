import React from 'react';



const Card = (props) => {
    return (
        <div className="card" style={{ width: 18 + "rem" }}>
            <img src = {props.imagepath} className="card-img-top" alt="first_image" />
            <div className="card-body">
                <h5 className="card-title">{props.cardtitle}</h5>
                <p className="card-text">{props.moreinfo}</p>
            </div>
        </div>
    );
};

export default Card;