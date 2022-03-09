import { useCallback, useEffect, useState } from "react"

const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset <= 0) {
      setIsScroll(false);
      return;
    };
    setIsScroll(true);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScroll;
}

export default useIsScroll;