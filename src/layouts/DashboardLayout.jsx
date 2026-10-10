import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileBottomNav from '../components/MobileBottomNav';
import Badge from '../components/Badge';
import { Search, Bell, Clock, User } from 'lucide-react';

/**
 * Main Dashboard Layout with Sidebar on Desktop, Mobile Bottom Nav, and Top Bar
 */
export const DashboardLayout = ({ children, activeTab, setActiveTab, onLogout }) => {
  return (
    <div className="min-h-screen bg-subtle text-dark font-sans flex antialiased">
      
      {/* Desktop Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 shadow-xs">
          <div className="flex items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search weak topics, doubts, subjects, or notes..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-2 rounded-xl bg-subtle border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Right Header Actions */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Exam Countdown Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>23 Days to Midterms</span>
              </div>

              {/* Notification Bell */}
              <button 
                className="relative p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Notifications"
                onClick={() => alert('3 SFAI study notifications: 1 weak topic review ready, 1 quiz reminder!')}
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-wrong" />
              </button>

              {/* Profile Avatar */}
              <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                <div className="w-8 h-8 rounded-xl bg-primary text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  RS
                </div>
                <div className="hidden md:block text-left">
                  <span className="block text-xs font-bold text-dark leading-tight">Rahul 👋</span>
                  <span className="block text-[10px] text-slate-400">4th Semester</span>
                </div>
              </div>

            </div>

          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default DashboardLayout;
