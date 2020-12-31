import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const useScroll = () => {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () =>
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  useEffect(() => {
    set();
    window.addEventListener("scroll", set);
    return () => window.removeEventListener("scroll", set);
  }, []);

  return [bbox, ref];
};

export default useScroll;
