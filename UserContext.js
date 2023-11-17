import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState(0); // 0: Principio, 1: Farmacia, 2: Usuario, 3: Medico

  const login = (userData, selectedRol) => {
    setUser(userData);
    setRol(selectedRol);
  };

  const logout = () => {
    setUser(null);
    setRol(0);
  };

  return (
    <UserContext.Provider value={{ user, rol, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);