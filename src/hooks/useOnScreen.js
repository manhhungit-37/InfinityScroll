import { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const observe = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        }, {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0
        }
      )
      observe.observe(el);

      return () => {
        observe.disconnect();
      }
    };
  }, [ref])

  return isVisible;
}

export default useOnScreen;