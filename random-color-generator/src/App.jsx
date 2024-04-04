// import './App.css'

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [bg, setBg] = useState("#32a852");

  const generateHexColor = () => {
    const letters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * letters.length)];
    }
    setBg(hex);
    setTypeOfColor("hex");
  };
  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setBg(rgbColor);
    setTypeOfColor("rgb");
    // console.log(rgbColor);
  };

  useEffect(() => {
    generateHexColor();
  }, []);

  return (
    <div
      className=""
      style={{
        background: bg,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex justify-center p-3">
        <button
          onClick={generateHexColor}
          className="bg-black rounded-md text-white m-3 p-2"
        >
          Create Hex Color
        </button>
        <button
          onClick={generateRgbColor}
          className="bg-black rounded-md text-white m-3 p-2"
        >
          Create RGB Color
        </button>
        <button
          onClick={typeOfColor === "hex" ? generateRgbColor : generateHexColor}
          className="bg-black rounded-md text-white m-3 p-2"
        >
          Generate Random Color
        </button>
      </div>
      <h2 className="text-center text-7xl">{typeOfColor} Color</h2>
      <h3 className="text-center mt-60 text-6xl">{bg}</h3>
    </div>
  );
}

export default App;
