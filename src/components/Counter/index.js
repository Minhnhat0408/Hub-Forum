import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to, duration = 1, className }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div ref={nodeRef} className={className} />;
}

export default Counter;
