import { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize user profile in Firestore
  const initUserProfile = async (userAuth, additionalData = {}) => {
    if (!userAuth) return;
    const userRef = doc(db, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
      const { displayName, email, photoURL } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          state: '',
          constituency: '',
          checklistProgress: {},
          quizScores: [],
          badges: ['early_bird'], // Reward for early signup
          ...additionalData
        });
      } catch (error) {
        console.error('Error creating user profile', error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentAuth) => {
      if (currentAuth) {
        // Fetch custom user data from Firestore
        const userRef = doc(db, 'users', currentAuth.uid);
        const snapShot = await getDoc(userRef);
        
        if (snapShot.exists()) {
          setUser({ ...currentAuth, ...snapShot.data() });
        } else {
          setUser(currentAuth);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await initUserProfile(result.user);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, stateData = '') => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name });
      await initUserProfile(result.user, { state: stateData });
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateUserState = async (state) => {
    if (user && user.uid) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, { state }, { merge: true });
        setUser({ ...user, state });
      } catch (error) {
        console.error("Error updating user state:", error);
      }
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
      {!loading && children}
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
