import { animate,useInView,useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to, duration = 1, className, text = "" }) {
  const nodeRef = useRef();
  const ref = useRef();
  const inView = useInView(ref,{
    once: true, // Only trigger once when the element comes into view
  });

  useEffect(() => {
    const node = nodeRef.current;

    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  }, [from, to, inView]);

  return (
    <div ref={ref} className="text-[30px] font-bold flex items-center justify-center flex-col">
      <div className="flex ">
        <span ref={nodeRef} className={className} />
        <span className="light-purple font-bold"> +</span>
      </div>
      <div>{text}</div>
    </div>
  );
}

export default Counter;
