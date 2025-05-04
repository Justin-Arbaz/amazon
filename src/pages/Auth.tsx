import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Auth: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') !== 'register';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    alert(`Form submitted with email: ${email}`);
    // In a real implementation, this would call the authentication API
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <a href="/" className="text-3xl font-bold inline-flex items-center">
            <span className="text-[#131921]">amazon</span>
            <span className="text-orange-400">Clone</span>
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">
            {isLogin ? 'Sign in' : 'Create account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="First and last name"
                />
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder={isLogin ? "At least 6 characters" : "At least 6 characters"}
              />
              {isLogin && (
                <p className="text-xs mt-1">
                  Passwords are case-sensitive
                </p>
              )}
            </div>
            
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Re-enter password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            )}
            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                {isLogin ? 'Sign in' : 'Create your account'}
              </button>
            </div>
          </form>
          
          {isLogin && (
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New to Amazon?</span>
                </div>
              </div>
              
              <div className="mt-4">
                <a
                  href="/login?mode=register"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                  Create your Amazon account
                </a>
              </div>
            </div>
          )}
          
          {!isLogin && (
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Sign in
              </a>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-600">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-orange-500 transition-colors">Conditions of Use</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Help</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()}, Amazon Clone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;