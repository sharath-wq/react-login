import React from "react";

const Input = ({ text }) => {
    return <input className="px-3 py-2 w-full border-2 rounded bg-gray-50  outline-black" type="text" placeholder={text} />;
};

export default Input;
