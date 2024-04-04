import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [input, setInput] = useState("");
  const [qrCode, setqrCode] = useState("");

  const generateQrCode = () => {
    setqrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          name="qr-code"
          placeholder="Değer girin."
        />
        <button onClick={generateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#ffff" />
      </div>
    </div>
  );
}

export default App;
