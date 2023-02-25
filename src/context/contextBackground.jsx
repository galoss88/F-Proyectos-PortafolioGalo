import { createContext, useState } from "react";

export const ContextBackground = createContext();

import React from "react";

const ContextProvider = (props) => {
    const [background, setBackground] = useState("principal")
  return (
    <ContextBackground.Provider value={{background,setBackground}}>
      {props.children}
    </ContextBackground.Provider>
  );
};
export default ContextProvider;
