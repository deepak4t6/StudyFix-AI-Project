import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import { 
  BarChart2, 
  TrendingUp, 
  Flame, 
  Award, 
  Clock, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Zap, 
  Smile,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

/**
 * Weekly Progress Page Component for StudyFix AI (SFAI)
 */
export const WeeklyProgress = ({ setActiveTab }) => {
  const [chartType, setChartType] = useState('line'); // 'line' | 'bar'

  const dailyAccuracyData = [
    { label: 'Mon', value: 65, color: 'bg-blue-400' },
    { label: 'Tue', value: 70, color: 'bg-blue-500' },
    { label: 'Wed', value: 68, color: 'bg-blue-400' },
    { label: 'Thu', value: 75, color: 'bg-primary' },
    { label: 'Fri', value: 72, color: 'bg-blue-500' },
    { label: 'Sat', value: 78, color: 'bg-primary' },
    { label: 'Sun', value: 82, color: 'bg-correct' },
  ];

  const weeklyOverviewStats = [
    { title: 'This Week Accuracy', value: '78%', subtitle: 'Target: 80%', variant: 'correct', badgeText: '+7% Improvement', badgeVariant: 'correct' },
    { title: 'Last Week Accuracy', value: '71%', subtitle: 'Baseline score', variant: 'primary', badgeText: 'Previous', badgeVariant: 'neutral' },
    { title: 'Weekly Improvement', value: '+7%', subtitle: 'Top growth phase', variant: 'correct', badgeText: '🚀 On Fire', badgeVariant: 'correct' },
    { title: 'Most Improved Topic', value: 'Graph Traversal', subtitle: 'Data Structures (+22%)', variant: 'primary', badgeText: 'Mastered', badgeVariant: 'primary' },
    { title: 'Total Study Time', value: '14.5 Hours', subtitle: '2.1 hrs / day avg', variant: 'weak', badgeText: 'Goal Met', badgeVariant: 'weak' },
  ];

  const subjectProgressData = [
    { subject: 'Data Structures & Algorithms', progress: 68, accuracy: 76, variant: 'correct' },
    { subject: 'Database Management Systems', progress: 54, accuracy: 62, variant: 'weak' },
    { subject: 'Operating Systems', progress: 41, accuracy: 48, variant: 'wrong' },
    { subject: 'Quantitative Aptitude', progress: 63, accuracy: 70, variant: 'primary' },
  ];

  const achievements = [
    {
      id: 'ach-1',
      title: '5-Day Study Streak',
      description: 'Logged in and solved doubts 5 consecutive days.',
      icon: Flame,
      variant: 'weak',
      badge: '🔥 Active Streak',
    },
    {
      id: 'ach-2',
      title: '100 Questions Completed',
      description: 'Solved over 100 SFAI practice & quiz questions.',
      icon: Target,
      variant: 'primary',
      badge: '🎯 Milestoned',
    },
    {
      id: 'ach-3',
      title: 'Backlog Subject Improved',
      description: 'Operating Systems accuracy boosted by +12%.',
      icon: Award,
      variant: 'correct',
      badge: '🚀 Backlog Recovered',
    },
  ];

  return (
    <DashboardLayout activeTab="progress" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                SFAI Performance Tracker
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                Week 4 Summary
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Weekly Progress & Achievements
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-normal">
              Track your daily accuracy trends, study hours, subject completions, and milestone badges.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            leftIcon={Sparkles}
            className="bg-white text-primary hover:bg-blue-50 font-bold shrink-0"
            onClick={() => setActiveTab && setActiveTab('quiz')}
          >
            Take Quick Benchmark Quiz
          </Button>
        </section>

        {/* 1. Motivational Message Card */}
        <Card variant="correct" className="border-emerald-200 bg-emerald-50/50 p-5 shadow-soft">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-correct text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              <Smile className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-emerald-900 uppercase tracking-wider">
                  AI Personal Tutor Encouragement
                </span>
                <Badge variant="correct" size="sm">🔥 5-Day Streak</Badge>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-dark leading-snug">
                “Shabash Rahul! Continuous revision is turning your mistakes into top grades. Keep up the daily streak!”
              </h3>
              <p className="text-xs text-slate-600">
                Your overall accuracy increased from <strong>71% to 78%</strong> this week. Keep revising 15 minutes daily!
              </p>
            </div>
          </div>
        </Card>

        {/* 2. Overview Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {weeklyOverviewStats.map((st, idx) => (
            <StatCard
              key={idx}
              title={st.title}
              value={st.value}
              subtitle={st.subtitle}
              variant={st.variant}
              badgeText={st.badgeText}
              badgeVariant={st.badgeVariant}
            />
          ))}
        </section>

        {/* 3. Daily Accuracy Chart Section */}
        <section className="space-y-4">
          <Card className="space-y-4">
            <Card.Header>
              <div>
                <Card.Title className="flex items-center gap-2 text-base">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Daily Accuracy Trend (This Week)</span>
                </Card.Title>
                <Card.Description>Daily percentage of correct responses across all adaptive quizzes</Card.Description>
              </div>

              {/* Chart Type Toggle */}
              <div className="flex items-center gap-1 bg-subtle p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setChartType('line')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    chartType === 'line' ? 'bg-primary text-white shadow-xs' : 'text-slate-600 hover:text-dark'
                  }`}
                >
                  Line Trend
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    chartType === 'bar' ? 'bg-primary text-white shadow-xs' : 'text-slate-600 hover:text-dark'
                  }`}
                >
                  Bar View
                </button>
              </div>
            </Card.Header>

            <Card.Content className="pt-2">
              {chartType === 'line' ? (
                <LineChart data={dailyAccuracyData} height={180} />
              ) : (
                <BarChart data={dailyAccuracyData} height={180} />
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                <span>Peak Day: <strong className="text-correct">Sunday (82%)</strong></span>
                <span>Weekly Average: <strong className="text-primary font-bold">74.2%</strong></span>
                <span>Consistency Index: <strong className="text-emerald-700">92/100</strong></span>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* 4. Subject-Wise Progress & Achievements Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Subject-Wise Progress Bars */}
          <div className="lg:col-span-7 space-y-4">
            <Card className="space-y-4">
              <Card.Header>
                <div>
                  <Card.Title className="text-base flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>Subject-Wise Mastery Level</span>
                  </Card.Title>
                  <Card.Description>Overall course completion and quiz accuracy per subject</Card.Description>
                </div>
                <Badge variant="primary" size="sm">4 Subjects</Badge>
              </Card.Header>

              <Card.Content className="space-y-4">
                {subjectProgressData.map((sp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-subtle border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-dark text-xs sm:text-sm">{sp.subject}</h4>
                      <Badge variant={sp.variant} size="sm">{sp.accuracy}% Accuracy</Badge>
                    </div>

                    <ProgressBar
                      value={sp.progress}
                      variant={sp.variant}
                      size="md"
                      showLabel
                      label="Syllabus Progress"
                    />
                  </div>
                ))}
              </Card.Content>
            </Card>
          </div>

          {/* Achievements & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="space-y-4">
              <Card.Header>
                <div>
                  <Card.Title className="text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Milestones & Badges Unlocked</span>
                  </Card.Title>
                  <Card.Description>Rewards earned through continuous study</Card.Description>
                </div>
                <Badge variant="weak" size="sm">3 Unlocked</Badge>
              </Card.Header>

              <Card.Content className="space-y-3">
                {achievements.map((ach) => {
                  const Icon = ach.icon;
                  return (
                    <div key={ach.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-bold text-dark text-xs sm:text-sm">{ach.title}</h4>
                        </div>
                        <Badge variant={ach.variant} size="sm">{ach.badge}</Badge>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-9">{ach.description}</p>
                    </div>
                  );
                })}
              </Card.Content>
            </Card>
          </div>

        </section>

      </div>
    </DashboardLayout>
  );
};

export default WeeklyProgress;
