import { StyleedScrollButton } from "./ScrollToTopButton.styled";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Подписка на событие только при монтировании компонента

  return (
    <>
      {isVisible && (
        <StyleedScrollButton
          title="Вгору"
          onClick={scrollToTop}
          visible={isVisible ? 1 : 0}
        >
          <FaArrowUp />
        </StyleedScrollButton>
      )}
      ;
    </>
  );
};

export default ScrollToTopButton;
