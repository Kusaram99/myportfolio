import React, { useEffect, useState } from "react";
import "./MouseGlow.css";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseGlowHandler = (e) => {
      console.log(e);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", mouseGlowHandler);
    return () => {
      document.removeEventListener("mousemove", mouseGlowHandler);
    };
  }, []);

  return (
    <div
      id="glowing"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default MouseGlow;
