"use client";
import { useState } from "react";
import { useEffect } from "react";

export const Intro = () => {
  const [count, setCount] = useState(0);
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const jobTitle = roles[count % roles.length];

  return (
    <div>
      <h1>{`Hi I'm Chris I'm a `}</h1>
      <h2 className="text-green-500 --font-source-code-pro min-w-[380px]">
        <span className="">{jobTitle}</span>
      </h2>
    </div>
  );
};
