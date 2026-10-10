import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import SubjectProgressCard from '../components/SubjectProgressCard';
import WeakTopicCard from '../components/WeakTopicCard';
import ExamCountdownCard from '../components/ExamCountdownCard';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import { 
  studentProfile, 
  dashboardStats, 
  subjectProgressList, 
  weakTopicsList, 
  recommendedToday as initialRecommended, 
  upcomingExams, 
  weeklyAccuracyChartData 
} from '../data/mockDashboardData';
import { 
  Sparkles, 
  HelpCircle, 
  FileText, 
  FileSpreadsheet, 
  RotateCcw, 
  Target, 
  CheckCircle2, 
  Calendar, 
  TrendingUp, 
  ArrowRight,
  BookOpen,
  Clock,
  Zap
} from 'lucide-react';

/**
 * Main Student Dashboard Component for StudyFix AI (SFAI)
 */
export const Dashboard = ({ setActiveTab }) => {
  const [recommended, setRecommended] = useState(initialRecommended);

  const toggleTask = (id) => {
    setRecommended((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <DashboardLayout activeTab="dashboard" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* 1. Welcome Header Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                {studentProfile.course} • {studentProfile.institution}
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                Active Student
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Hello {studentProfile.shortName} 👋
            </h1>

            <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
              "Har galati se seekho. Weak topics fix karo." You have <strong>3 weak concepts</strong> flagged for revision today before your 23-day midterm countdown.
            </p>
          </div>

          {/* Quick Primary Call to Action */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Button
              variant="secondary"
              size="md"
              leftIcon={Sparkles}
              className="bg-white text-primary hover:bg-blue-50 font-bold"
              onClick={() => setActiveTab && setActiveTab('ai-tutor')}
            >
              Ask AI Tutor Now
            </Button>
          </div>
        </section>

        {/* 2. Quick Action Buttons Bar */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <Button
            variant="primary"
            size="md"
            leftIcon={Sparkles}
            className="w-full justify-start shadow-sm"
            onClick={() => setActiveTab && setActiveTab('ai-tutor')}
          >
            Ask AI Tutor
          </Button>

          <Button
            variant="outline"
            size="md"
            leftIcon={HelpCircle}
            className="w-full justify-start shadow-sm"
            onClick={() => setActiveTab && setActiveTab('quiz')}
          >
            Take Quiz
          </Button>

          <Button
            variant="outline"
            size="md"
            leftIcon={FileText}
            className="w-full justify-start shadow-sm"
            onClick={() => setActiveTab && setActiveTab('notes-chat')}
          >
            Upload Notes/PDF
          </Button>

          <Button
            variant="outline"
            size="md"
            leftIcon={FileSpreadsheet}
            className="w-full justify-start shadow-sm"
            onClick={() => setActiveTab && setActiveTab('mistake-report')}
          >
            Mistake Report
          </Button>

          <Button
            variant="wrong"
            size="md"
            leftIcon={RotateCcw}
            className="w-full justify-start col-span-2 sm:col-span-1 shadow-sm font-bold"
            onClick={() => setActiveTab && setActiveTab('backlog-recovery')}
          >
            Backlog Recovery
          </Button>
        </section>

        {/* 3. Stat Cards Overview */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-dark flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Student Overview & Progress Stats</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardStats.map((st) => (
              <StatCard
                key={st.id}
                title={st.title}
                value={st.value}
                subtitle={st.subtitle}
                variant={st.variant}
                badgeText={st.badgeText}
                badgeVariant={st.badgeVariant}
              />
            ))}
          </div>
        </section>

        {/* 4. Main Grid: Subject Progress & Weak Topics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8 cols): Subject Progress & Recommended Today */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subject Progress Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-dark flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Subject Completion & Accuracy</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">4 Active Subjects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjectProgressList.map((sp) => (
                  <SubjectProgressCard key={sp.id} subjectData={sp} />
                ))}
              </div>
            </div>

            {/* Recommended Today Section */}
            <Card>
              <Card.Header>
                <div>
                  <Card.Title className="flex items-center gap-2 text-base">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span>Recommended Tasks Today</span>
                  </Card.Title>
                  <Card.Description>
                    AI-curated practice tasks based on your weak points
                  </Card.Description>
                </div>
                <Badge variant="weak" size="sm">
                  {recommended.filter((t) => t.completed).length} / {recommended.length} Done
                </Badge>
              </Card.Header>

              <Card.Content className="space-y-3">
                {recommended.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      task.completed
                        ? 'bg-slate-50 border-slate-200 opacity-70'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
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
                        <p className="text-[11px] text-slate-500">
                          {task.subject} • Est. {task.timeEst}
                        </p>
                      </div>
                    </div>

                    <Badge variant={task.type === 'Revision' ? 'weak' : 'primary'} size="sm">
                      {task.type}
                    </Badge>
                  </div>
                ))}
              </Card.Content>
            </Card>

          </div>

          {/* Right Column (5 cols): Weak Topics, Upcoming Exams, Weekly Accuracy Chart */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Weak Topics Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-dark flex items-center gap-2">
                  <Target className="w-5 h-5 text-weak" />
                  <span>Weak Topics Flagged by AI</span>
                </h3>
                <Badge variant="weak" size="sm">3 Priority</Badge>
              </div>

              <div className="space-y-3">
                {weakTopicsList.map((wt) => (
                  <WeakTopicCard 
                    key={wt.id} 
                    topicData={wt} 
                    onFixConcept={() => setActiveTab && setActiveTab('ai-tutor')}
                  />
                ))}
              </div>
            </div>

            {/* Upcoming Exams and Assignments */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-dark flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Upcoming Exams & Deadlines</span>
                </h3>
              </div>

              <div className="space-y-3">
                {upcomingExams.map((ex) => (
                  <ExamCountdownCard key={ex.id} examData={ex} />
                ))}
              </div>
            </div>

            {/* Weekly Accuracy Trend Chart */}
            <Card>
              <Card.Header>
                <div>
                  <Card.Title className="text-base">Weekly Accuracy Trend</Card.Title>
                  <Card.Description>Daily performance over past 7 days</Card.Description>
                </div>
                <Badge variant="correct" size="sm">+4% vs last week</Badge>
              </Card.Header>

              <Card.Content className="space-y-4">
                {/* Visual Bar Chart using Tailwind */}
                <div className="h-40 flex items-end justify-between gap-2 pt-4 px-2">
                  {weeklyAccuracyChartData.map((item) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.accuracy}%
                      </span>
                      <div
                        className="w-full rounded-t-lg bg-primary hover:bg-primary-hover transition-all duration-300"
                        style={{ height: `${item.accuracy}%` }}
                      />
                      <span className="text-[10px] font-semibold text-slate-500">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Target Accuracy: <strong className="text-dark">80%</strong></span>
                  <span>Current Avg: <strong className="text-primary font-bold">72%</strong></span>
                </div>
              </Card.Content>
            </Card>

          </div>

        </section>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
