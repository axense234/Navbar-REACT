// React
import { useEffect, useState } from "react";
// Components
import Navbar from "./components/Navbar";

const Main = () => {
  const showMenu = useCheckWindowWidth(1100);

  return <Navbar showMenu={showMenu} />;
};

const useCheckWindowWidth = (size) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= size) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        // Removed event
      });
    };
  }, [size]);

  return show;
};

export default Main;
