import React from "react";
import Input from "./Input";

const Body = () => {
    return (
        <div className="w-full h-[85%] flex flex-col justify-center items-start gap-6 p-10">
            <Input text="Username" />
            <Input text="Password" />
            <div className="flex w-full px-8 gap-3">
                <input className="accent-black" type="checkbox" />
                <p className="font-medium">Remember Password</p>
            </div>
            <button className="gradient-orange-pink w-full text-white p-2 font-medium">Login</button>
        </div>
    );
};

export default Body;
