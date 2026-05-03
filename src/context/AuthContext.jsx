import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Mock user for development (before Firebase is connected)
const MOCK_USER = {
  uid: 'mock-user-001',
  displayName: 'Demo User',
  email: 'demo@electioniq.com',
  photoURL: null,
  state: 'California',
  checklistProgress: {},
  quizScores: [],
  badges: []
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock login function
  const login = async (email, password) => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser({ ...MOCK_USER, email });
    setLoading(false);
    return { ...MOCK_USER, email };
  };

  // Mock Google login
  const loginWithGoogle = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser(MOCK_USER);
    setLoading(false);
    return MOCK_USER;
  };

  // Mock register
  const register = async (name, email, password) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const newUser = { ...MOCK_USER, displayName: name, email };
    setUser(newUser);
    setLoading(false);
    return newUser;
  };

  // Logout
  const logout = async () => {
    setUser(null);
  };

  // Update user state (location)
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
