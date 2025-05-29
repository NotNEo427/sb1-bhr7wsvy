import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AdminCredentials, AuthState } from '../types';
import { createSession, isAuthenticated, logAuthAttempt, logout, validateCredentials } from '../utils/auth';

// Define the auth context type
type AuthContextType = {
  authState: AuthState;
  login: (credentials: AdminCredentials) => void;
  logout: () => void;
};

// Initial auth state
const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  error: null
};

// Create the auth context
const AuthContext = createContext<AuthContextType>({
  authState: initialState,
  login: () => {},
  logout: () => {}
});

// Auth reducer
type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CHECK_AUTH'; payload: boolean };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    case 'CHECK_AUTH':
      return {
        ...state,
        isAuthenticated: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      dispatch({ type: 'CHECK_AUTH', payload: authenticated });
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = (credentials: AdminCredentials) => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API request
    setTimeout(() => {
      const isValid = validateCredentials(credentials);
      
      if (isValid) {
        createSession();
        logAuthAttempt(credentials.username, true);
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        logAuthAttempt(credentials.username, false);
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
      }
    }, 500);
  };

  // Logout function
  const handleLogout = () => {
    logout();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);