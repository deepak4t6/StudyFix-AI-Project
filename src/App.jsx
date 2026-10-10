import React, { useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AiTutor from './pages/AiTutor';
import Quiz from './pages/Quiz';
import NotesChat from './pages/NotesChat';
import MistakeReport from './pages/MistakeReport';
import WeeklyProgress from './pages/WeeklyProgress';
import SemesterPlanner from './pages/SemesterPlanner';
import BacklogRecovery from './pages/BacklogRecovery';
import PlacementPractice from './pages/PlacementPractice';
import Badge from './components/Badge';
import { 
  Layout, 
  LogIn, 
  UserPlus, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  FileText,
  FileSpreadsheet,
  BarChart2,
  Calendar,
  RotateCcw,
  Briefcase
} from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userProfile, setUserProfile] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'ai-tutor') {
      setCurrentView('ai-tutor');
    } else if (tab === 'quiz') {
      setCurrentView('quiz');
    } else if (tab === 'notes-chat') {
      setCurrentView('notes-chat');
    } else if (tab === 'mistake-report') {
      setCurrentView('mistake-report');
    } else if (tab === 'progress') {
      setCurrentView('progress');
    } else if (tab === 'semester-planner') {
      setCurrentView('semester-planner');
    } else if (tab === 'backlog-recovery') {
      setCurrentView('backlog-recovery');
    } else if (tab === 'placement-prep') {
      setCurrentView('placement-prep');
    } else if (tab === 'dashboard') {
      setCurrentView('dashboard');
    } else if (tab === 'landing') {
      setCurrentView('landing');
    }
  };

  return (
    <div>
      {/* Top Floating View Switcher Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 flex flex-wrap items-center justify-between text-xs border-b border-slate-800 gap-2 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="sm" className="bg-blue-600 text-white border-none">SFAI Navigation</Badge>
          <span className="text-slate-300 hidden sm:inline">Explore views:</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setCurrentView('landing')}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'landing' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            Landing
          </button>
          
          <button
            onClick={() => setCurrentView('login')}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'login' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            Login
          </button>

          <button
            onClick={() => setCurrentView('signup')}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'signup' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            Signup
          </button>

          <button
            onClick={() => {
              setCurrentView('dashboard');
              setActiveTab('dashboard');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'dashboard' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Dashboard
          </button>

          <button
            onClick={() => {
              setCurrentView('ai-tutor');
              setActiveTab('ai-tutor');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'ai-tutor' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Tutor
          </button>

          <button
            onClick={() => {
              setCurrentView('quiz');
              setActiveTab('quiz');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'quiz' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Quiz
          </button>

          <button
            onClick={() => {
              setCurrentView('notes-chat');
              setActiveTab('notes-chat');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'notes-chat' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Notes Chat
          </button>

          <button
            onClick={() => {
              setCurrentView('semester-planner');
              setActiveTab('semester-planner');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'semester-planner' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Planner
          </button>

          <button
            onClick={() => {
              setCurrentView('backlog-recovery');
              setActiveTab('backlog-recovery');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'backlog-recovery' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Backlog
          </button>

          <button
            onClick={() => {
              setCurrentView('placement-prep');
              setActiveTab('placement-prep');
            }}
            className={`px-2 py-1 rounded-lg transition-colors flex items-center gap-1 font-semibold cursor-pointer ${
              currentView === 'placement-prep' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Placement
          </button>
        </div>
      </div>

      {/* Render Selected View */}
      {currentView === 'landing' && <Landing />}
      {currentView === 'login' && <Login onNavigateSignup={() => setCurrentView('signup')} onNavigateHome={() => setCurrentView('landing')} onLoginSuccess={(data) => { setUserProfile(data); setCurrentView('dashboard'); }} />}
      {currentView === 'signup' && <Signup onNavigateLogin={() => setCurrentView('login')} onNavigateHome={() => setCurrentView('landing')} onSignupSuccess={(data) => { setUserProfile(data); setCurrentView('dashboard'); }} />}
      {currentView === 'dashboard' && <Dashboard setActiveTab={handleTabChange} />}
      {currentView === 'ai-tutor' && <AiTutor setActiveTab={handleTabChange} />}
      {currentView === 'quiz' && <Quiz setActiveTab={handleTabChange} />}
      {currentView === 'notes-chat' && <NotesChat setActiveTab={handleTabChange} />}
      {currentView === 'mistake-report' && <MistakeReport setActiveTab={handleTabChange} />}
      {currentView === 'progress' && <WeeklyProgress setActiveTab={handleTabChange} />}
      {currentView === 'semester-planner' && <SemesterPlanner setActiveTab={handleTabChange} />}
      {currentView === 'backlog-recovery' && <BacklogRecovery setActiveTab={handleTabChange} />}
      {currentView === 'placement-prep' && <PlacementPractice setActiveTab={handleTabChange} />}
    </div>
  );
}

export default App;
