import React from "react"
import { Link } from "react-router"


export default ({
    ProductPrice,
    ProductName,
    id,
    image
}) => {

    return (
        <div className="product-card">
            
            <Link to={`jackets/${id}`}>
                <div className="product-image">
                    <img src={image} />
                </div>
                <div className="product-info">
                    <h5>{ProductName}</h5>
                    <h6>${ProductPrice}</h6>
                </div>
            </Link>
        </div>
    )
}