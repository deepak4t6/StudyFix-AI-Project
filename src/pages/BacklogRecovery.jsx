import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import { Select } from '../components/Input';
import { 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Target, 
  Flame, 
  Smile,
  ArrowRight,
  Clock,
  BookOpen
} from 'lucide-react';

/**
 * Backlog Recovery Page Component for StudyFix AI (SFAI)
 */
export const BacklogRecovery = ({ setActiveTab }) => {
  const [selectedSubject, setSelectedSubject] = useState('os');

  const backlogSubjects = [
    { value: 'os', label: 'Operating Systems (Sem 3 Backlog)' },
    { value: 'maths', label: 'Engineering Mathematics II' },
    { value: 'coa', label: 'Computer Architecture & Org' },
  ];

  // Day-wise recovery plan topics
  const [recoveryPlan, setRecoveryPlan] = useState([
    { id: 1, day: 'Day 1', topic: 'Process Management & PCB Structure', completed: true, accuracy: 80 },
    { id: 2, day: 'Day 2', topic: 'CPU Scheduling (FCFS & SJF Algorithms)', completed: true, accuracy: 70 },
    { id: 3, day: 'Day 3', topic: 'Preemptive Scheduling (SRTF & Round Robin)', completed: false, accuracy: 45 },
    { id: 4, day: 'Day 4', topic: 'Process Synchronization & Semaphores', completed: false, accuracy: 0 },
    { id: 5, day: 'Day 5', topic: 'Deadlock Detection & Banker’s Algorithm', completed: false, accuracy: 0 },
    { id: 6, day: 'Day 6', topic: 'Memory Management & Virtual Memory Paging', completed: false, accuracy: 0 },
  ]);

  const toggleTopic = (id) => {
    setRecoveryPlan((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = recoveryPlan.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / recoveryPlan.length) * 100);

  return (
    <DashboardLayout activeTab="backlog-recovery" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Banner */}
        <section className="bg-gradient-to-r from-red-600 via-wrong to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="wrong" className="bg-white/20 text-white border-white/30">
                SFAI Backlog Rescue Mode
              </Badge>
              <Badge variant="weak" className="bg-amber-400 text-slate-900 font-bold border-none">
                Estimated Clear: Oct 25, 2026
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Backlog Recovery Center
            </h1>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl font-normal">
              High-yield chapter prioritization strategy to clear past pending subjects without stress.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            leftIcon={Sparkles}
            className="bg-white text-wrong hover:bg-red-50 font-bold shrink-0"
            onClick={() => setActiveTab && setActiveTab('ai-tutor')}
          >
            Ask AI to Explain Backlog Topic
          </Button>
        </section>

        {/* 1. Motivational Message Card */}
        <Card variant="weak" className="border-amber-300 bg-amber-50/70 p-5 shadow-soft">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-weak text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              <Smile className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-amber-900 uppercase tracking-wider">
                  SFAI Daily Motivation
                </span>
                <Badge variant="weak" size="sm">Step-By-Step</Badge>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-dark leading-snug">
                “Backlog clear karna possible hai — aaj sirf 1 topic complete karo.”
              </h3>
              <p className="text-xs text-slate-600">
                Don't worry about the whole syllabus at once. Completing 1 high-yield topic daily guarantees complete recovery in 6 days!
              </p>
            </div>
          </div>
        </Card>

        {/* 2. Select Backlog Subject & Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Subject Selector & Day-Wise Plan */}
          <div className="lg:col-span-8 space-y-6">
            
            <Card className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold text-dark text-base flex items-center gap-2">
                    <RotateCcw className="w-5 h-5 text-wrong" />
                    <span>Select Backlog Subject</span>
                  </h3>
                  <p className="text-xs text-slate-500">Pick pending paper to load day-wise recovery roadmap</p>
                </div>

                <div className="w-full sm:w-72">
                  <Select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    options={backlogSubjects}
                  />
                </div>
              </div>

              {/* Recovery Progress Bar */}
              <div className="space-y-2 pt-2">
                <ProgressBar
                  value={progressPercent}
                  variant={progressPercent > 50 ? 'correct' : 'weak'}
                  size="lg"
                  showLabel
                  label="Overall Backlog Recovery Progress"
                />
              </div>
            </Card>

            {/* Day-Wise Recovery Plan List */}
            <Card className="space-y-4">
              <Card.Header>
                <div>
                  <Card.Title className="text-base">Day-Wise Recovery Roadmap</Card.Title>
                  <Card.Description>High-yield topics ordered by exam scoring probability</Card.Description>
                </div>
                <Badge variant="weak" size="sm">
                  {completedCount} / {recoveryPlan.length} Topics Completed
                </Badge>
              </Card.Header>

              <Card.Content className="space-y-3">
                {recoveryPlan.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleTopic(item.id)}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      item.completed
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : 'bg-white border-slate-200 hover:border-amber-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-xl border flex items-center justify-center transition-colors ${
                          item.completed
                            ? 'bg-correct border-correct text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {item.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-xs text-primary bg-blue-50 px-2 py-0.5 rounded-md">
                            {item.day}
                          </span>
                          <h4
                            className={`text-xs sm:text-sm font-semibold ${
                              item.completed ? 'line-through text-slate-500' : 'text-dark'
                            }`}
                          >
                            {item.topic}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.completed ? (
                        <Badge variant="correct" size="sm">{item.accuracy}% Accuracy</Badge>
                      ) : (
                        <Button variant="weak" size="sm" rightIcon={ArrowRight} className="text-xs">
                          Start Topic
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </Card.Content>
            </Card>

          </div>

          {/* Right Column: Recovery Stats & Target Date */}
          <div className="lg:col-span-4 space-y-6">
            
            <Card variant="wrong" className="space-y-3 border-red-200 bg-red-50/30">
              <div className="flex items-center justify-between">
                <span className="font-bold text-dark text-xs flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-wrong" /> Target Clearance Date
                </span>
                <Badge variant="wrong" size="sm">Oct 25, 2026</Badge>
              </div>
              <h4 className="text-2xl font-extrabold text-dark">6 Days Left</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                At 1 topic per day, you will be 100% prepared 3 days before the backlog exam date.
              </p>
            </Card>

            <Card className="space-y-3">
              <h4 className="font-bold text-dark text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>Recovery Practice Stats</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Topics Mastered:</span>
                  <strong className="text-correct">2 of 6</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Average Quiz Accuracy:</span>
                  <strong className="text-primary">75%</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Est. Grade Boost:</span>
                  <strong className="text-emerald-700">+1.5 CGPA</strong>
                </div>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default BacklogRecovery;
