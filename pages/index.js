import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Home() {
  const ref = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#box", {
        rotation: "+=360",
        repeat: Infinity,
      });

      gsap.to("#box1", {
        y: -100,
        yoyo: true,
        repeat: Infinity,
      });

      gsap.to("#box2", {
        scale: "1.5",
        yoyo: true,
        repeat: Infinity,
      });
    }, ref); //scope

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <main
        ref={ref}
        className="h-screen w-screen flex justify-center items-center gap-10"
      >
        <div id="box" className="w-20 h-20 bg-rose-600"></div>
        <div id="box1" className="w-20 h-20 bg-rose-600"></div>
        <div id="box2" className="w-20 h-20 bg-rose-600"></div>
      </main>
    </>
  );
}
