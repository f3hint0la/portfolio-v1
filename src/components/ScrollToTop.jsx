import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "../styles/ScrollToTop.css";

function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollUp-btn">
      {showBtn && <FaAngleUp onClick={scrollUp} />}
    </div>
  );
}

export default ScrollToTop;
