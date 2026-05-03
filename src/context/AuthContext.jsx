import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Mock user for development (before Firebase is connected)
const MOCK_USER = {
  uid: 'mock-user-001',
  displayName: 'Demo User',
  email: 'demo@electioniq.in',
  photoURL: null,
  state: 'Maharashtra',
  constituency: 'Mumbai North',
  checklistProgress: {},
  quizScores: [],
  badges: []
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser({ ...MOCK_USER, email });
    setLoading(false);
    return { ...MOCK_USER, email };
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser(MOCK_USER);
    setLoading(false);
    return MOCK_USER;
  };

  const register = async (name, email, password) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const newUser = { ...MOCK_USER, displayName: name, email };
    setUser(newUser);
    setLoading(false);
    return newUser;
  };

  const logout = async () => {
    setUser(null);
  };

  const updateUserState = (state) => {
    if (user) {
      setUser({ ...user, state });
    }
  };

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    register,
    logout,
    updateUserState,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
