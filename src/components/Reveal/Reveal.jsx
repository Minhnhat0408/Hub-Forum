import { motion,useInView,useAnimation,useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({children, hiddenY = 0, hiddenX = 0, duration = 0.8,scale = 1, delay = 0.25, initial = "hidden", animate = "visible",className}) {
    const ref = useRef(null)
    const isInView = useInView(ref,{once: true})
    const mainControls = useAnimation()
    useEffect(()=>{
        if(isInView) {
            mainControls.start('visible')
        }
    },[isInView])   

    return ( 
        <div ref={ref} className={className || "relative overflow-hidden w-fit"}>
            <motion.div
                variants={{
                    hidden: {opacity:0,y:hiddenY, x: hiddenX,scale:scale},
                    visible:{opacity:1,y:0,x:0,scale:1}
                }
                }
                initial= {initial}
                animate= {mainControls}
                transition={{duration:duration,delay:delay }}
            >
                {children}
            </motion.div>
        </div>
     );
}

export default Reveal;