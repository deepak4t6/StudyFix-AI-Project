import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  Menu, 
  X, 
  Calendar, 
  RotateCcw, 
  Briefcase, 
  FileSpreadsheet, 
  BarChart2, 
  Settings 
} from 'lucide-react';
import Badge from './Badge';

/**
 * Mobile Bottom Navigation Bar for StudyFix AI
 */
export const MobileBottomNav = ({ activeTab = 'dashboard', setActiveTab }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const primaryItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ai-tutor', label: 'AI Tutor', icon: Sparkles, badge: 'AI' },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    { id: 'notes-chat', label: 'Notes', icon: FileText },
  ];

  const secondaryItems = [
    { id: 'semester-planner', label: 'Semester Planner', icon: Calendar },
    { id: 'backlog-recovery', label: 'Backlog Recovery', icon: RotateCcw, badge: '1' },
    { id: 'placement-prep', label: 'Placement Practice', icon: Briefcase },
    { id: 'mistake-report', label: 'Mistake Report', icon: FileSpreadsheet },
    { id: 'progress', label: 'Progress', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Drawer Overlay for "More" Menu */}
      {isMoreOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40" onClick={() => setIsMoreOpen(false)}>
          <div 
            className="absolute bottom-16 inset-x-0 bg-white rounded-t-3xl p-5 border-t border-slate-200 space-y-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-dark">More SFAI Features</h3>
              <button onClick={() => setIsMoreOpen(false)} className="text-slate-400 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab && setActiveTab(item.id);
                      setIsMoreOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-2xl text-xs font-semibold border transition-all ${
                      isActive
                        ? 'bg-primary-light border-blue-200 text-primary'
                        : 'bg-subtle border-slate-200/60 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && <Badge variant="weak" size="sm">{item.badge}</Badge>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 px-2 py-1.5 shadow-lg">
        <div className="flex items-center justify-around">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab && setActiveTab(item.id);
                  setIsMoreOpen(false);
                }}
                className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
                  isActive ? 'text-primary font-bold' : 'text-slate-500 font-medium hover:text-dark'
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-[9px] px-1 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-0.5">{item.label}</span>
              </button>
            );
          })}

          {/* More Toggle */}
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
              isMoreOpen ? 'text-primary font-bold' : 'text-slate-500 font-medium'
            }`}
          >
            <Menu className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
