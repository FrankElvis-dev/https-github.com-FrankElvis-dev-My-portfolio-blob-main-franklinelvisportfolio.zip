import React, { useState, useEffect } from 'react';
import { AuthState, User, DashboardView } from './types';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import AgentSidebar from './components/AgentSidebar';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const [currentDashboardView, setCurrentDashboardView] = useState<DashboardView>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for session
    const storedAuth = localStorage.getItem('linaris-auth');
    if (storedAuth) {
      let role: User['role'] = 'guest';
      let displayName = 'Guest';

      if (storedAuth === 'admin') {
        role = 'admin';
        displayName = 'Admin User';
      } else if (storedAuth === 'user') {
        role = 'user';
        displayName = 'Standard User';
      } else if (storedAuth === 'google') {
        role = 'user';
        displayName = 'Google User';
      } else if (storedAuth === 'meta') {
        role = 'user';
        displayName = 'Meta User';
      }

      setAuth({
        isAuthenticated: true,
        user: {
          username: storedAuth,
          role,
          displayName,
        },
      });
    }

    // Check for theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handleLogin = (user: User) => {
    setAuth({ isAuthenticated: true, user });
    localStorage.setItem('linaris-auth', user.username);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, user: null });
    localStorage.removeItem('linaris-auth');
  };

  const handleDashboardViewChange = (view: DashboardView) => {
    setCurrentDashboardView(view);
  };

  return (
    <div className="w-full max-w-[96rem] min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] relative flex flex-col">
      {/* Background Ambience */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0 rounded-[3rem]"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col flex-1 bg-[#EAEAEA] dark:bg-neutral-900 xl:rounded-[3rem] shadow-2xl overflow-hidden transition-colors duration-300">
        {auth.isAuthenticated && auth.user ? (
          <Dashboard 
            user={auth.user} 
            onLogout={handleLogout} 
            currentView={currentDashboardView}
            onViewChange={handleDashboardViewChange}
            onAgentToggle={() => setIsAgentOpen(!isAgentOpen)}
            isDarkMode={isDarkMode}
            onThemeToggle={toggleTheme}
          />
        ) : (
          <LandingPage 
            onLoginClick={() => setIsLoginOpen(true)}
            onAgentToggle={() => setIsAgentOpen(!isAgentOpen)}
            isDarkMode={isDarkMode}
            onThemeToggle={toggleTheme}
          />
        )}
      </div>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />

      <AgentSidebar 
        isOpen={isAgentOpen} 
        onToggle={() => setIsAgentOpen(!isAgentOpen)}
        context={auth.isAuthenticated ? currentDashboardView : 'landing'}
      />
    </div>
  );
};

export default App;