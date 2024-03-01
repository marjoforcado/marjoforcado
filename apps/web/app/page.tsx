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
      <ParallaxLayer offset={0.1} speed={0.5}>
        <div className="px-3 flex flex-col items-center gap-4 max-w-7xl m-auto">
          <p className="text-8xl font-black font-sans text-white">
            &lt;MRJFRCDO/&gt;
          </p>
          <div className="max-w-xl">
            <p className="text-xl font-sans text-slate-100 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias id corrupti laborum fugiat mollitia corporis, odio
              officia quidem in quisquam, quod sed eos doloremque amet possimus
              deleniti quae quas! Deleniti, nam? Delectus atque qui reiciendis
              exercitationem fugiat laborum dolorem minus error amet
              consequatur! Deserunt eveniet laborum, neque delectus distinctio
              itaque?
            </p>
          </div>
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
