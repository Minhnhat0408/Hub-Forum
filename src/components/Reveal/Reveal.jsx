import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({
  children,
  opacity = 0,
  hiddenY = 0,
  hiddenX = 0,
  duration = 0.8,
  scale = 1,
  delay = 0.25,
  initial = "hidden",
  animate = "visible",
  preanimation = false,
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className || "relative overflow-hidden w-fit"}>
      <motion.div
        variants={{
          hidden: { opacity: opacity, y: hiddenY, x: hiddenX, scale: scale },
          visible: { opacity: 1, y: 0, x: 0, scale: 1 },
        }}
        initial={initial}
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
      {preanimation && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial={initial}
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#8a2be2",
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
}

export default Reveal;
