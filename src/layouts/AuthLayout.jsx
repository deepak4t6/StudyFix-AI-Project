import React from 'react';
import { BrainCircuit, ArrowLeft } from 'lucide-react';
import Badge from '../components/Badge';

/**
 * Centered Auth Layout wrapper for Login & Signup pages
 * Features a clean blue and white theme with StudyFix AI branding
 */
export const AuthLayout = ({ children, title, subtitle, onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-subtle text-dark font-sans flex flex-col justify-between p-4 sm:p-6 lg:p-8 antialiased relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none -z-10 blur-3xl" />

      {/* Top Bar with Brand & Back Link */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-2">
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-dark">
                StudyFix <span className="text-primary">AI</span>
              </span>
              <Badge variant="primary" size="sm">SFAI</Badge>
            </div>
          </div>
        </div>

        {onNavigateHome && (
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        )}
      </header>

      {/* Centered Form Container */}
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-md space-y-6">
          
          {/* Header Title inside Card */}
          {(title || subtitle) && (
            <div className="text-center space-y-2">
              <Badge variant="primary" size="sm" className="mb-1">
                Har galati se seekho. Weak topics fix karo.
              </Badge>
              {title && (
                <h1 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Form Content */}
          <div>{children}</div>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="text-center text-xs text-slate-400 py-4 border-t border-slate-200/60 max-w-md mx-auto w-full">
        © {new Date().getFullYear()} StudyFix AI (SFAI). All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
