import { createContext, useState } from "react";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = ({ children }) => {
  const [activeUserData, setActiveUserData] = useState({
    _id: null,
    groupName: null,
    color: null,
  });
  const updateValue = (opt) => {
    setActiveUserData((prev) => {
      const prevVal = { ...prev };
      prevVal._id = opt._id;
      prevVal.groupName = opt.groupName;
      prevVal.color = opt.color;
      return prevVal;
    });
    console.log(activeUserData);
  };

  return (
    <ActiveUserContext.Provider value={{ activeUserData, updateValue }}>
      {children}
    </ActiveUserContext.Provider>
  );
};
