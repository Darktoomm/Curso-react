import React from "react";

const Button = ({ color, description, onClick, icon }) => {
    return (
        <button
            onClick={onClick}
            className={`border flex rounded-2xl w-36 p-1 text-${color} font-medium border-${color} text-sm hover:shadow-lg hover:bg-white hover:text-${color}  transition  duration-300 ease-in-out ${
                icon === undefined ? "justify-center" : ""
            }`}
        >
            {icon ? <img src={`/icon_${icon}.svg`} className="w-5 mx-2 " /> : ""}
            {description}
        </button>
    );
};
