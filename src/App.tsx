import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TierListProvider } from './context/TierListContext';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';

// Main App wrapper that uses the contexts
const AppContent: React.FC = () => {
  const { authState } = useAuth();

  // Show loading state while checking authentication
  if (authState.isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!authState.isAuthenticated) {
    return <LoginForm />;
  }

  // Show dashboard if authenticated
  return <Dashboard />;
};

// Main App component
const App: React.FC = () => {
  return (
    <AuthProvider>
      <TierListProvider>
        <AppContent />
      </TierListProvider>
    </AuthProvider>
  );
};

export default App;