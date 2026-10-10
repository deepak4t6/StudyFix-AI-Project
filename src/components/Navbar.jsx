import React, { useState } from 'react';
import { BrainCircuit, Menu, X, Sparkles, User, BookOpen, Target, BarChart2 } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

/**
 * Responsive Navbar component for StudyFix AI (SFAI)
 */
export const Navbar = ({ activeTab = 'dashboard', setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'weak-topics', label: 'Weak Topics', icon: Target, badge: '3' },
    { id: 'practice', label: 'AI Practice', icon: Sparkles },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md shadow-blue-200">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-dark">
                  StudyFix <span className="text-primary">AI</span>
                </span>
                <span className="hidden sm:inline-block">
                  <Badge variant="primary" size="sm">SFAI</Badge>
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 hidden md:block">
                Har galati se seekho. Weak topics fix karo.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-subtle px-3 py-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab && setActiveTab(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-primary shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-dark hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <Badge variant={isActive ? 'weak' : 'neutral'} size="sm">
                      {link.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" size="sm" leftIcon={User}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" rightIcon={Sparkles}>
              Start Fixing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          <div className="py-2 px-3 bg-blue-50 rounded-xl mb-2">
            <p className="text-xs text-primary font-medium text-center">
              "Har galati se seekho. Weak topics fix karo."
            </p>
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab && setActiveTab(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <Badge variant="weak" size="sm">
                      {link.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Button variant="primary" size="md" className="w-full" rightIcon={Sparkles}>
              Start Fixing Now
            </Button>
            <Button variant="outline" size="md" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
