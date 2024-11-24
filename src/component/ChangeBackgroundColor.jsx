import { useState, useEffect } from "react";
const Random = () => {
  const [warna, setWarna] = useState("rgb(0, 0, 0)");
  useEffect(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setWarna(`rgb(${r}, ${g}, ${b})`);
  });

  return (
    <div>
      <button
        onClick={() => {
          document.body.style.backgroundColor = warna;
        }}
      >
        Ganti Warna
      </button>
    </div>
  );
};
export default Random;
