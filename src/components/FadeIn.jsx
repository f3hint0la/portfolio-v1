import { useState, useRef, useEFfect } from "react";
import { motion, useScroll } from "framer-motion";

export default function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const { scrollYProgress } = useViewportScroll({
    target: "",
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div ref={targetRef}>
      {props.children}
      <div></div>
    </div>
  );
}
