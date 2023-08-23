import React from "react";
import { useParams } from "react-router-dom";

const PortfolioItemPage = () => {
    let { id } = useParams();

    return (
        <div>
            <h1>A thing I've done</h1>
            <p>This page is for the item with the id of {id}</p>
        </div>
    );
};
    
export default PortfolioItemPage;