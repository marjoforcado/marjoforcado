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
      <ParallaxLayer offset={0.5} speed={0.5}>
        <div className="px-3">
          <p className="text-8xl font-black font-sans text-white">
            Building the Web
          </p>
          <p className="text-xl font-sans text-slate-100">
            The web is a scary place for businesses who don't know how to
            navigate it. We're here to help. We build websites and web
            applications that do what you need them to do. We'll help you figure
            out what that is you need and how to get it done.
          </p>
        </div>
      </ParallaxLayer>
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
