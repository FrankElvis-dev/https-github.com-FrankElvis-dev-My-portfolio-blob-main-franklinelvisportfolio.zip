import React, { useState } from 'react';
import { X, User as UserIcon, AlertCircle } from 'lucide-react';
import { User } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication
    if (username === 'admin' && password === 'admin') {
      onLogin({ username: 'admin', role: 'admin', displayName: 'Admin User' });
      setError(false);
    } else if (username === 'user' && password === 'user') {
      onLogin({ username: 'user', role: 'user', displayName: 'Standard User' });
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSocial = (provider: string) => {
     onLogin({ 
       username: provider.toLowerCase(), 
       role: 'user', 
       displayName: `${provider} User` 
     });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>

      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10 animate-fade-in-up border border-white/20 dark:border-neutral-800 transition-colors">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 mb-4 shadow-lg shadow-neutral-900/20">
            <UserIcon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-oswald font-medium text-neutral-900 dark:text-white tracking-tight">
            Welcome to LINARIS
          </h3>
          <p className="text-base text-neutral-500 dark:text-neutral-400 mt-2">
            Enter your credentials to access the OS
          </p>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400 justify-center">
              <AlertCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">
                Invalid credentials. Try user/user or admin/admin
              </span>
            </div>
          )}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-widest mb-1.5">
              User / Email
            </label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all placeholder:text-neutral-400 dark:text-white" 
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-widest mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all placeholder:text-neutral-400 dark:text-white" 
              placeholder="••••••••"
            />
            <div className="mt-2 text-right">
              <button type="button" onClick={() => alert('Password recovery flow coming soon.')} className="text-[0.7rem] text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 underline underline-offset-2">
                Forgot your password?
              </button>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-wider">
            <span className="bg-white dark:bg-neutral-900 px-2 text-neutral-400 font-medium">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => handleSocial('Google')} className="flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group active:scale-95">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white">
              Google
            </span>
          </button>

          <button onClick={() => handleSocial('Meta')} className="flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group active:scale-95">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="#0668E1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.66c-1.33 0-1.92-.61-2.45-1.69l-.16-.36c-.53-1.15-1.07-2.3-2.03-2.3s-1.5.89-2.03 2.3l-.16.36c-.52 1.09-1.12 1.69-2.45 1.69-1.53 0-2.37-1.12-2.37-2.45 0-1.92 1.65-3.65 3.65-3.65.65 0 1.25.17 1.76.5.34.22.69.49 1.01.76l.09.07c.45.39.9.78 1.5.78.6 0 1.05-.39 1.5-.78l.09-.07c.32-.27.67-.54 1.01-.76.51-.33 1.11-.5 1.76-.5 2 0 3.65 1.73 3.65 3.65 0 1.33-.84 2.45-2.37 2.45z"></path>
            </svg>
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white">
              Meta
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;