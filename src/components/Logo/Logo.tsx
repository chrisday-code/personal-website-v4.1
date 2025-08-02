"use client";
import { CompactDiskIcon } from "./CompactDiskIcon";
import { animate, createScope, createSpring } from "animejs";
import { useEffect, useRef, useState } from "react";
//todo rename root to something else
export const Logo = () => {
  const root = useRef(null);
  const scope = useRef(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate(".logo", {
        scale: [
          { to: 1.1, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 250,
      });

      // Register function methods to be used outside the useEffect
      scope.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    // Animate logo rotation on click using the method declared inside the scope
    scope.current.methods.rotateLogo(i);
  };

  return (
    <div ref={root} className="flex flex-row items-center gap-x-2">
      <button className="logo" onClick={handleClick}>
        <CompactDiskIcon height={50} />
      </button>
      <div className="flex-col justify-start">
        <h3>{`Chris Day`}</h3>
        <h4>{`Software Engineer`}</h4>
      </div>
    </div>
  );
};
