import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import Input, { Select } from '../components/Input';
import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Plus, 
  BookOpen, 
  Target, 
  RotateCcw,
  Zap,
  ArrowRight,
  ListTodo
} from 'lucide-react';

/**
 * Semester Planner Page Component for StudyFix AI (SFAI)
 */
export const SemesterPlanner = ({ setActiveTab }) => {
  const [plannerTab, setPlannerTab] = useState('today'); // 'today' | 'week' | 'exam-week'
  const [showAddModal, setShowAddModal] = useState(false);

  // Form inputs for generating custom plan
  const [formData, setFormData] = useState({
    subject: 'Operating Systems',
    examDate: '2026-10-18',
    dailyHours: '2 Hours',
    topics: 'Process Scheduling, Memory Management, Deadlocks',
  });

  // Task checklist state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Revise DBMS Unit 2 (3NF Normalization)', subject: 'DBMS', time: '45 mins', priority: 'high', completed: false },
    { id: 2, title: 'Complete 10 OS questions (Process Scheduling)', subject: 'Operating Systems', time: '30 mins', priority: 'high', completed: true },
    { id: 3, title: 'Practice 15 aptitude questions (Time & Work)', subject: 'Aptitude', time: '30 mins', priority: 'medium', completed: false },
    { id: 4, title: 'Data Structures Graph BFS/DFS Formula Review', subject: 'Data Structures', time: '20 mins', priority: 'medium', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleGeneratePlan = (e) => {
    e.preventDefault();
    setShowAddModal(false);
    alert(`AI Study Plan generated for ${formData.subject}! Target exam date: ${formData.examDate}`);
  };

  return (
    <DashboardLayout activeTab="semester-planner" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                SFAI AI Study Scheduler
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                Balanced Workload
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Semester Study Planner
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-normal">
              Intelligent timetable that balances midterms, weekly assignments, and backlog revision based on your available daily hours.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            leftIcon={Plus}
            className="bg-white text-primary hover:bg-blue-50 font-bold shrink-0"
            onClick={() => setShowAddModal(!showAddModal)}
          >
            {showAddModal ? 'Close Form' : 'Generate New Plan'}
          </Button>
        </section>

        {/* Modal / Form to generate plan */}
        {showAddModal && (
          <Card className="border border-blue-200 bg-blue-50/40 p-6 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
              <h3 className="font-bold text-dark text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Create Personalized AI Study Plan</span>
              </h3>
              <Badge variant="primary" size="sm">AI Generator</Badge>
            </div>

            <form onSubmit={handleGeneratePlan} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <Input
                label="Target Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Operating Systems"
              />
              <Input
                label="Upcoming Exam Date"
                type="date"
                value={formData.examDate}
                onChange={(e) => setFormData({ ...formData, examDate: e.target.value })}
              />
              <Select
                label="Daily Available Study Time"
                value={formData.dailyHours}
                onChange={(e) => setFormData({ ...formData, dailyHours: e.target.value })}
                options={[
                  { value: '1 Hour', label: '1 Hour / Day' },
                  { value: '2 Hours', label: '2 Hours / Day' },
                  { value: '3 Hours', label: '3 Hours / Day' },
                  { value: '4 Hours', label: '4+ Hours / Day' },
                ]}
              />
              <Input
                label="Key Syllabus Topics"
                value={formData.topics}
                onChange={(e) => setFormData({ ...formData, topics: e.target.value })}
                placeholder="e.g. Normalization, SJF, Graphs"
              />

              <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                <Button type="submit" variant="primary" size="md" rightIcon={Sparkles} className="font-bold">
                  Generate Custom Timetable
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Calendar-Style Plan Tabs */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-dark flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              <span>Timetable & Daily Schedule</span>
            </h2>

            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-subtle p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setPlannerTab('today')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  plannerTab === 'today' ? 'bg-primary text-white shadow-xs' : 'text-slate-600 hover:text-dark'
                }`}
              >
                Today's Plan
              </button>
              <button
                onClick={() => setPlannerTab('week')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  plannerTab === 'week' ? 'bg-primary text-white shadow-xs' : 'text-slate-600 hover:text-dark'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setPlannerTab('exam-week')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  plannerTab === 'exam-week' ? 'bg-primary text-white shadow-xs' : 'text-slate-600 hover:text-dark'
                }`}
              >
                Exam Week
              </button>
            </div>
          </div>

          {/* Interactive Task Checklist Section */}
          <Card className="space-y-4">
            <Card.Header>
              <div>
                <Card.Title className="text-base flex items-center gap-2">
                  <ListTodo className="w-5 h-5 text-primary" />
                  <span>Daily Task Checklist (Prioritized for Weak Subjects)</span>
                </Card.Title>
                <Card.Description>Click tasks as you complete them to update your progress</Card.Description>
              </div>
              <Badge variant="correct" size="sm">
                {tasks.filter((t) => t.completed).length} / {tasks.length} Done
              </Badge>
            </Card.Header>

            <Card.Content className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    task.completed
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-xl border flex items-center justify-center transition-colors ${
                        task.completed
                          ? 'bg-correct border-correct text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4" />}
                    </div>

                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-semibold ${
                          task.completed ? 'line-through text-slate-400' : 'text-dark'
                        }`}
                      >
                        {task.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {task.subject} • Est. {task.time}
                      </p>
                    </div>
                  </div>

                  <Badge variant={task.priority === 'high' ? 'wrong' : 'primary'} size="sm">
                    {task.priority === 'high' ? 'High Priority' : 'Standard'}
                  </Badge>
                </div>
              ))}
            </Card.Content>
          </Card>
        </section>

        {/* Timetable Overview Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="primary" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-sm">Revision Days</span>
              <Badge variant="primary" size="sm">2 Days / Wk</Badge>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Saturdays & Sundays are automatically reserved for high-yield formula revision and formula flashcards.
            </p>
          </Card>

          <Card variant="correct" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-sm">Quiz Practice</span>
              <Badge variant="correct" size="sm">Adaptive</Badge>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every completed topic triggers a 5-minute quiz to lock in long-term memory retention before exams.
            </p>
          </Card>

          <Card variant="weak" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-sm">Weak Subject Shield</span>
              <Badge variant="weak" size="sm">Active</Badge>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating Systems is allocated +45 mins extra daily to clear concept confusion before midterms.
            </p>
          </Card>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default SemesterPlanner;
