import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <h1
      className={`${
        animate
          ? "animate-pulse delay-2"
          : "opacity-0 pointer-events-none"
      } text-white text-3xl font-extrabold sm:text-5xl`}
    >
      Hello, I'm Jānis Ruduks
      <span className="sm:block"> I build things for web </span>
    </h1>
  );
};

export default AnimatedText;