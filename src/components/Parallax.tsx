import { ReactNode, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IParallax {
  className: string;
  children: ReactNode;
  speed?: number;
  id?: string;
}

const Parallax = ({ className, children, speed = 1, id = "parallax" }: IParallax) => {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);  
  const timeline = useRef<gsap.core.Timeline>(); 
  const {width: windowWidth} = useWindowSize();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const y = windowWidth * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true, 
        start: "top bottom",  
        end: "bottom top", 
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline?.current?.kill(); 
    };
  }, [id, speed, windowWidth]);


  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
};

export default Parallax;


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}