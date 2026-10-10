import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import WeakTopicCard from '../components/WeakTopicCard';
import { weakTopicsList } from '../data/mockDashboardData';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  TrendingUp, 
  Sparkles, 
  Target, 
  ArrowRight,
  AlertTriangle,
  BrainCircuit,
  PieChart
} from 'lucide-react';

/**
 * Mistake Report Page Component for StudyFix AI (SFAI)
 */
export const MistakeReport = ({ setActiveTab }) => {
  const mistakeStats = [
    { title: 'Total Questions', value: '150', subtitle: 'Attempted in SFAI', variant: 'primary', icon: HelpCircle },
    { title: 'Correct Answers', value: '108', subtitle: '72% Success Rate', variant: 'correct', icon: CheckCircle2 },
    { title: 'Wrong Answers', value: '42', subtitle: 'Mistakes Analyzed', variant: 'wrong', icon: XCircle },
    { title: 'Overall Accuracy', value: '72%', subtitle: '+5% vs last week', variant: 'correct', icon: TrendingUp },
  ];

  const mistakeBreakdown = [
    {
      type: 'Conceptual Mistake',
      count: 19,
      percentage: 45,
      description: 'Misunderstood fundamental definition or formula priority (e.g., ILATE or SJF).',
      variant: 'wrong',
      badge: 'High Focus',
    },
    {
      type: 'Calculation Mistake',
      count: 11,
      percentage: 25,
      description: 'Arithmetic errors, sign confusion, or unit conversion mistakes.',
      variant: 'weak',
      badge: 'Medium Focus',
    },
    {
      type: 'Misread Question',
      count: 7,
      percentage: 18,
      description: 'Missed keywords like "NOT", "Except", or "Preemptive".',
      variant: 'primary',
      badge: 'Careful Reading',
    },
    {
      type: 'Lack of Revision',
      count: 5,
      percentage: 12,
      description: 'Forgot old formulas learned > 15 days ago.',
      variant: 'neutral',
      badge: 'Schedule Review',
    },
  ];

  const weakTopicsDetail = [
    { topic: 'Operating Systems – Process Scheduling', accuracy: 38, progress: 38, subject: 'Operating Systems' },
    { topic: 'DBMS – Normalization (3NF vs BCNF)', accuracy: 45, progress: 45, subject: 'DBMS' },
    { topic: 'Mathematics – Integration by Parts', accuracy: 48, progress: 48, subject: 'Higher Maths' },
    { topic: 'Aptitude – Time & Work Problems', accuracy: 52, progress: 52, subject: 'Aptitude' },
  ];

  return (
    <DashboardLayout activeTab="mistake-report" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Title */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                SFAI Error Analytics
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                AI Diagnostic Mode
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Your Mistake Report
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-normal">
              StudyFix AI categorizes your wrong answers into root causes so you never repeat the same error twice.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            leftIcon={Sparkles}
            className="bg-white text-primary hover:bg-blue-50 font-bold shrink-0"
            onClick={() => setActiveTab && setActiveTab('ai-tutor')}
          >
            Ask AI Tutor to Explain Errors
          </Button>
        </section>

        {/* 1. Stat Cards Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mistakeStats.map((st, idx) => (
            <StatCard
              key={idx}
              title={st.title}
              value={st.value}
              subtitle={st.subtitle}
              variant={st.variant}
              icon={st.icon}
            />
          ))}
        </section>

        {/* 2. AI Recommendation Card */}
        <section className="max-w-7xl mx-auto">
          <Card variant="weak" className="border-amber-300 bg-gradient-to-r from-amber-50 via-amber-50/70 to-orange-50 p-6 shadow-soft space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-weak text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-amber-900 uppercase tracking-wider">
                      AI Priority Recommendation
                    </span>
                    <Badge variant="weak" size="sm">Action Required</Badge>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-dark leading-snug">
                    "Focus on Operating Systems: Process Scheduling. Complete 5 basic questions and revise the concept."
                  </h3>
                  <p className="text-xs text-slate-600">
                    SFAI detected 19 conceptual mistakes in Process Scheduling. Fixing this topic will boost your overall accuracy by +8%.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="weak"
                size="lg"
                rightIcon={ArrowRight}
                className="font-extrabold shrink-0 shadow-md shadow-amber-200"
                onClick={() => setActiveTab && setActiveTab('ai-tutor')}
              >
                Start Recommended Practice
              </Button>
            </div>
          </Card>
        </section>

        {/* 3. Mistake Type Breakdown Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-dark flex items-center gap-2">
              <PieChart className="w-5 h-5 text-primary" />
              <span>Mistake Categorization Breakdown</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">Categorized from 42 wrong answers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mistakeBreakdown.map((mb, idx) => (
              <Card key={idx} variant={mb.variant} className="space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-dark text-sm">{mb.type}</span>
                    <Badge variant={mb.variant} size="sm">{mb.badge}</Badge>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-dark tracking-tight">{mb.percentage}%</span>
                    <span className="text-xs text-slate-500 font-medium">({mb.count} errors)</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mb.description}
                  </p>
                </div>

                <ProgressBar
                  value={mb.percentage}
                  variant={mb.variant}
                  size="sm"
                  className="pt-2"
                />
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Weak Topic List with Accuracy & Progress */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-dark flex items-center gap-2">
              <Target className="w-5 h-5 text-weak" />
              <span>Weak Topics Accuracy Ranking</span>
            </h2>
          </div>

          <Card className="space-y-4">
            <Card.Header>
              <div>
                <Card.Title className="text-base">Topics Requiring Immediate Fixes</Card.Title>
                <Card.Description>Sorted by lowest accuracy percentage</Card.Description>
              </div>
              <Badge variant="weak" size="sm">4 Weak Topics</Badge>
            </Card.Header>

            <Card.Content className="space-y-4">
              {weakTopicsDetail.map((wt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-subtle border border-slate-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-dark text-sm sm:text-base">{wt.topic}</h4>
                      <p className="text-xs text-slate-500">{wt.subject}</p>
                    </div>
                    <Badge variant={wt.accuracy < 40 ? 'wrong' : 'weak'} size="sm">
                      {wt.accuracy}% Accuracy
                    </Badge>
                  </div>

                  <ProgressBar
                    value={wt.progress}
                    variant={wt.accuracy < 40 ? 'wrong' : 'weak'}
                    size="md"
                    showLabel
                    label="Topic Mastery Level"
                  />
                </div>
              ))}
            </Card.Content>
          </Card>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default MistakeReport;
