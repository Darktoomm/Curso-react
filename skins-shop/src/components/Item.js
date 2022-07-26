import React from 'react';
import {Link} from "react-router-dom";

function Item({product, id}) {
    return (
        <div key={product.id} className="group relative">
            <div
                className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-50 lg:aspect-none">
                <img
                    src={product.picture}
                    alt={product.picture}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/item/${product.id}`} className=" m-auto">
                                <span aria-hidden="true" className="absolute inset-0"/>
                                {product.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    );
}

export default Item;