import { useEffect, useState } from "react";

const useCheckMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setFromEvent = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };
    setFromEvent();
    window.addEventListener("resize", setFromEvent);

    return () => {
      window.removeEventListener("resize", setFromEvent);
    };
  }, []);

  return isMobile;
};

export default useCheckMobile;
