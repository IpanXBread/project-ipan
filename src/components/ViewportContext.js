import { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ viewportWidth }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const { viewportWidth } = useContext(ViewportContext);
  return viewportWidth;
};