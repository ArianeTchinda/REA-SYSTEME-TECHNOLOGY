import React from "react";
import "../../styles/HeadProduit.css"

const HeadProduit = () =>{
    return(
        <div className="HeadP">
            <div className="overlay">
                <div className="HeadP-content">
                    <h2>Produits</h2>
                    <div className="ligneP"></div>
                </div>
            </div>
        </div>
    )
}

export default HeadProduit;