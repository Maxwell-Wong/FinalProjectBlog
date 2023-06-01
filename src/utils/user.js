import React from 'react';

const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const session = {
    user,
    login,
    logout,
    
  };

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const session = React.useContext(SessionContext);
  if (!session) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return session;
};

export { SessionProvider, useSession };