import { useState } from "react";
import './change.css';

function Changecolors() {
    const [bgColor, setBgColor] = useState("grey");

    const changeMode = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        setBgColor(randomColor);
    };

    return (
        <div className="container" style={{ backgroundColor: bgColor }}>
            <button onClick={changeMode} className="change">Change Color</button>
        </div>
    );
}

export default Changecolors;
