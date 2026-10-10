import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import LineChart from '../components/LineChart';
import { 
  Briefcase, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Target, 
  Code, 
  MessageSquare, 
  Brain, 
  TrendingUp, 
  ArrowRight,
  HelpCircle,
  Play
} from 'lucide-react';

/**
 * Placement Practice Page Component for StudyFix AI (SFAI)
 */
export const PlacementPractice = ({ setActiveTab }) => {
  const [selectedSection, setSelectedSection] = useState('aptitude'); // 'aptitude' | 'reasoning' | 'quant' | 'coding' | 'communication'
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium'); // 'easy' | 'medium' | 'hard'
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);

  const sections = [
    { id: 'aptitude', label: 'General Aptitude', icon: Brain },
    { id: 'reasoning', label: 'Logical Reasoning', icon: Target },
    { id: 'quant', label: 'Quantitative Aptitude', icon: TrendingUp },
    { id: 'coding', label: 'Coding Basics', icon: Code },
    { id: 'communication', label: 'Communication Skills', icon: MessageSquare },
  ];

  const practiceSets = [
    {
      id: 1,
      title: 'TCS & Infosys Aptitude Speed Test',
      questionsCount: 15,
      timeMins: 15,
      difficulty: 'medium',
      accuracyAvg: 74,
      section: 'aptitude',
    },
    {
      id: 2,
      title: 'Wipro & Accenture Logical Reasoning Set',
      questionsCount: 20,
      timeMins: 20,
      difficulty: 'easy',
      accuracyAvg: 82,
      section: 'reasoning',
    },
    {
      id: 3,
      title: 'Data Structures & Algorithmic Problem Solving',
      questionsCount: 10,
      timeMins: 25,
      difficulty: 'hard',
      accuracyAvg: 60,
      section: 'coding',
    },
    {
      id: 4,
      title: 'Corporate Email & Communication MCQs',
      questionsCount: 12,
      timeMins: 10,
      difficulty: 'easy',
      accuracyAvg: 90,
      section: 'communication',
    },
  ];

  const readinessTrendData = [
    { label: 'Wk 1', value: 55 },
    { label: 'Wk 2', value: 62 },
    { label: 'Wk 3', value: 70 },
    { label: 'Wk 4', value: 78 },
  ];

  return (
    <DashboardLayout activeTab="placement-prep" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                SFAI Placement Readiness Engine
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                Campus Hiring Ready
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Placement & Campus Practice
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-normal">
              Timer-based practice sets covering Aptitude, Logical Reasoning, Coding Basics, and Technical MCQs for company hiring tests.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            leftIcon={Play}
            className="bg-white text-primary hover:bg-blue-50 font-bold shrink-0"
            onClick={() => setIsTimerModalOpen(true)}
          >
            Start 15-Min Timer Practice
          </Button>
        </section>

        {/* 1. Placement Sections Navigator */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base sm:text-lg font-bold text-dark flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>Placement Practice Domains</span>
            </h2>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5 bg-subtle p-1 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-400 font-bold px-2">Difficulty:</span>
              {['easy', 'medium', 'hard'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-lg capitalize font-semibold transition-all cursor-pointer ${
                    selectedDifficulty === diff
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-slate-600 hover:text-dark'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Section Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = selectedSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white border-primary shadow-soft'
                      : 'bg-white border-slate-200 hover:border-blue-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-primary-light text-primary'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isActive && <Badge variant="primary" className="bg-white/20 text-white border-none" size="sm">Active</Badge>}
                  </div>
                  <span className="font-bold text-xs sm:text-sm">{sec.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 2. Practice Sets List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-dark">Available Daily Practice Sets</h3>
            <span className="text-xs text-slate-500 font-medium">Updated for 2026 Hiring Patterns</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practiceSets.map((set) => (
              <Card key={set.id} isHoverable className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-dark text-sm sm:text-base">{set.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {set.questionsCount} Questions • {set.timeMins} Mins Limit
                    </p>
                  </div>
                  <Badge variant={set.difficulty === 'hard' ? 'wrong' : set.difficulty === 'medium' ? 'weak' : 'correct'} size="sm">
                    {set.difficulty.toUpperCase()}
                  </Badge>
                </div>

                <ProgressBar
                  value={set.accuracyAvg}
                  variant={set.accuracyAvg >= 75 ? 'correct' : 'weak'}
                  size="sm"
                  showLabel
                  label="Average Peer Accuracy"
                />

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Timer-based evaluation</span>
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    rightIcon={ArrowRight}
                    className="font-bold"
                    onClick={() => setIsTimerModalOpen(true)}
                  >
                    Start Test
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Placement Readiness Graph & Mistake Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-7">
            <Card className="space-y-4">
              <Card.Header>
                <div>
                  <Card.Title className="text-base flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span>Placement Readiness Growth</span>
                  </Card.Title>
                  <Card.Description>Weekly trend toward 80%+ corporate qualification mark</Card.Description>
                </div>
                <Badge variant="correct" size="sm">78% Qualified</Badge>
              </Card.Header>

              <Card.Content>
                <LineChart data={readinessTrendData} height={180} />
              </Card.Content>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card variant="primary" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-dark text-sm flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" /> Company Cutoff Target
                </span>
                <Badge variant="primary" size="sm">TCS / Infosys</Badge>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-blue-100 space-y-1">
                  <span className="font-bold text-dark">Quantitative Aptitude:</span>
                  <p className="text-slate-500">Speed improvement needed in Time & Distance formulas.</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-blue-100 space-y-1">
                  <span className="font-bold text-dark">Coding Basics:</span>
                  <p className="text-slate-500">Array rotation & String reversal logic verified.</p>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full font-bold shadow-md shadow-blue-200"
                leftIcon={Sparkles}
                onClick={() => setActiveTab && setActiveTab('ai-tutor')}
              >
                Practice Interview Questions with AI
              </Button>
            </Card>
          </div>

        </section>

      </div>
    </DashboardLayout>
  );
};

export default PlacementPractice;
