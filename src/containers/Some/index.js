import React from "react"
import { Link } from "react-router"

// need helper for find
export default ({
    ProductPrice,
    ProductName,
    id,
}) => {

    return (
        <div className="product-card">     
                <div className="product-image">
                    <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
                </div>
                <div className="product-info">
                    <h5>{ProductName}</h5>
                    <h6>${ProductPrice}</h6>
                </div>
                <Link to="jackets">Jackets </Link>
        </div>
    )
}