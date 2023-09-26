import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrolltoTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
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
    <div className="scrollUp">
      {showBtn && (
        <button className="scrollBtn">
          <AiOutlineArrowUp className="icon" onClick={scrollUp} />
        </button>
      )}
    </div>
  );
}

export default ScrolltoTop;
