import { createContext, useState } from "react";

export const TitleContext = createContext();

const TitleContextProvider = ({ children }) => {
  const [contextTitle, setContextTitle] = useState("");

  return (
    <TitleContext.Provider value={{ contextTitle, setContextTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;
