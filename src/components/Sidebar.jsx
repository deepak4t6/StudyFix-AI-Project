import React from 'react';
import { 
  BrainCircuit, 
  LayoutDashboard, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  Calendar, 
  RotateCcw, 
  Briefcase, 
  FileSpreadsheet, 
  BarChart2, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import Badge from './Badge';

/**
 * Desktop Sidebar Navigation Component for StudyFix AI
 */
export const Sidebar = ({ activeTab = 'dashboard', setActiveTab, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ai-tutor', label: 'AI Tutor', icon: Sparkles, badge: 'AI' },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    { id: 'notes-chat', label: 'Notes/PDF Chat', icon: FileText },
    { id: 'semester-planner', label: 'Semester Planner', icon: Calendar },
    { id: 'backlog-recovery', label: 'Backlog Recovery', icon: RotateCcw, badge: '1' },
    { id: 'placement-prep', label: 'Placement Practice', icon: Briefcase },
    { id: 'mistake-report', label: 'Mistake Report', icon: FileSpreadsheet },
    { id: 'progress', label: 'Progress', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between h-screen sticky top-0 z-30 shadow-soft">
      <div className="p-5 space-y-6 overflow-y-auto">
        
        {/* SFAI Logo Header */}
        <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md shadow-blue-200">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-dark">
                StudyFix <span className="text-primary">AI</span>
              </span>
              <Badge variant="primary" size="sm">SFAI</Badge>
            </div>
            <p className="text-[10px] text-slate-500 font-medium truncate">
              Har galati se seekho
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="space-y-1">
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Main Navigation
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-sm shadow-blue-200'
                    : 'text-slate-600 hover:text-dark hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge 
                    variant={isActive ? 'neutral' : item.badge === '1' ? 'wrong' : 'primary'} 
                    size="sm"
                    className={isActive ? 'bg-white/20 text-white border-none' : ''}
                  >
                    {item.badge}
                  </Badge>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Card & Logout */}
      <div className="p-4 border-t border-slate-100 bg-subtle">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center text-sm shadow-sm">
              RS
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold text-dark">Rahul Sharma</h4>
              <p className="text-[10px] text-slate-500 font-medium">B.Tech Sem 4</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            title="Log out"
            className="p-2 text-slate-400 hover:text-wrong rounded-xl hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
