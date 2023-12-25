"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

const Page = () => {
  const parallaxRef = useRef<IParallax>(null);

  return (
    <Parallax
      ref={parallaxRef}
      style={{ height: "calc(100vh - 4rem)", background: "#253237" }}
      pages={3}
    >
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#805E73" }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#87BCDE" }}
      />
    </Parallax>
  );
};

export default Page;
