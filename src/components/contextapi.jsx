import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("NA");
  const [youtube, setYoutube] = useState("NA");
  const [showBottomRight2, setShowBottomRight2] = useState(false);

  return (
    <AppContext.Provider
      value={{
        name,
        email,
        phone,
        insta,
        youtube,
        showBottomRight2,
        setName,
        setEmail,
        setPhone,
        setInsta,
        setYoutube,
        setShowBottomRight2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
