import React from "react";

export const Card = ({image, name, message}) => {

    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={image && image} className="card-img-top" /* style={{height: '70%'}} */alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name && name}</h5>
                <p className="card-text">{message && message}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}