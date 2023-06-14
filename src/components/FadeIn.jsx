import { useEffect, useRef, useState } from "react";

function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const pageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(pageRef.current);
    return () => observer.unobserve(pageRef.current);
  }, []);

  return (
    <div
      className={`fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={pageRef}
    >
      {props.children}
    </div>
  );
}

export default FadeIn;
