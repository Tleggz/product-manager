import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ShowAll from "../components/ShowAll";


const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
            {}
            <CreateProduct 
                productList={productList} 
                setProductList={setProductList} 
            />
            
            <ShowAll 
                productList={productList} 
                setProductList={setProductList} 
            />
        </div>
    );
};

export default Main;