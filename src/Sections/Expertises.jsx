import React from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Expertises() {

    useGSAP(()=>{
        gsap.to('.Projects h3',{
            transform: 'translateX(-100%)',
            duration: 4,
            scrollTrigger:{
                trigger: '.Projects',
                scroller: 'body',
                markers: true,
                start: "top 0%",
                end: "top -100%",
                pin: true,
                scrub: 2,
            }
        })
    })
  return (
    <>
      <div className="Projects h-screen w-screen bg-lime-300 flex items-center mt-10 overflow-hidden">
        <h3 className="text-[700px] font-medium">EXPERTISES</h3>
      </div>
    </>
  );
}

export default Expertises;
