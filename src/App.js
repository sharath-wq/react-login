import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return (
        // if gradient applay this class ====  gradient-pink-orange
        // if Image applay this class's ==== bg-[url('https://www.baronmiedzyzdroje.pl/wp-content/uploads/2019/04/background-1.png')] bg-no-repeat bg-cover
        <div className="w-full min-h-screen justify-center flex items-center gradient-orange-pink">
            <div className="bg-white w-full h-screen md:w-[35vw] md:h-[60vh]">
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default App;

// orange = "rgb(255, 130, 61, 1)"
// purple = "rgb(248, 75, 126, 1)"
