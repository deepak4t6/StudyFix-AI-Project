import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { 
  BrainCircuit, 
  Sparkles, 
  Target, 
  FileText, 
  Calendar, 
  RotateCcw, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  HelpCircle, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Star,
  ChevronRight,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone
} from 'lucide-react';

/**
 * Landing Page Component for StudyFix AI (SFAI)
 */
export const Landing = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('college');

  // Feature Card List
  const features = [
    {
      id: 'doubt-solver',
      title: 'AI Doubt Solver',
      description: 'Get instant, step-by-step solutions to complex engineering, science, and math problems with clear logic.',
      icon: MessageSquare,
      badge: 'Instant 24/7',
      variant: 'primary',
    },
    {
      id: 'mistake-analysis',
      title: 'Mistake Analysis',
      description: 'Automatically flags why you missed a question—calculation error, formula confusion, or conceptual gap.',
      icon: Target,
      badge: 'Core Feature',
      variant: 'weak',
    },
    {
      id: 'pdf-chat',
      title: 'PDF & Notes Chat',
      description: 'Upload lecture slides, PDFs, or handwritten notes and ask targeted questions or generate summaries.',
      icon: FileText,
      badge: 'Smart Extraction',
      variant: 'primary',
    },
    {
      id: 'semester-planner',
      title: 'Semester Planner',
      description: 'Intelligent schedule builder that balances midterms, lab exams, assignments, and weekly revision goals.',
      icon: Calendar,
      badge: 'Stress Free',
      variant: 'correct',
    },
    {
      id: 'backlog-recovery',
      title: 'Backlog Recovery',
      description: 'Targeted crash courses and high-yield topic priorities to clear pending subject backlogs fast.',
      icon: RotateCcw,
      badge: 'High Impact',
      variant: 'wrong',
    },
    {
      id: 'placement-prep',
      title: 'Placement Practice',
      description: 'Coding aptitude, core CS concepts, interview MCQs, and domain practice tailored for campus hiring.',
      icon: Briefcase,
      badge: 'Career Ready',
      variant: 'primary',
    },
  ];

  // How it works steps
  const steps = [
    {
      step: '01',
      title: 'Ask a doubt or take a quiz',
      description: 'Upload your question, paste text, or take an adaptive practice quiz on any subject.',
      icon: HelpCircle,
    },
    {
      step: '02',
      title: 'StudyFix AI analyzes mistakes',
      description: 'SFAI deep-scans your incorrect choices and identifies pattern flaws in your problem-solving.',
      icon: BarChart3,
    },
    {
      step: '03',
      title: 'It identifies weak concepts',
      description: 'Visual breakdown highlights your exact weak topics (e.g. Integration by Parts or SN2 mechanism).',
      icon: Target,
    },
    {
      step: '04',
      title: 'Creates personalized revision plan',
      description: 'Receive micro-lessons, bite-sized practice sets, and formula cheat sheets to fix weak areas.',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-subtle text-dark font-sans flex flex-col antialiased">
      
      {/* 1. Landing Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md shadow-blue-200">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-dark">
                  StudyFix <span className="text-primary">AI</span>
                </span>
                <Badge variant="primary" size="sm">SFAI</Badge>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#for-college" className="hover:text-primary transition-colors">For College</a>
              <a href="#for-school" className="hover:text-primary transition-colors">For School</a>
              <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="primary" size="sm" rightIcon={ArrowRight}>
                Get Started
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="p-2 text-slate-700 hover:text-dark focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileNavOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 font-medium text-sm text-slate-700">
              <a href="#features" onClick={() => setIsMobileNavOpen(false)} className="hover:text-primary py-1">Features</a>
              <a href="#for-college" onClick={() => setIsMobileNavOpen(false)} className="hover:text-primary py-1">For College</a>
              <a href="#for-school" onClick={() => setIsMobileNavOpen(false)} className="hover:text-primary py-1">For School</a>
              <a href="#how-it-works" onClick={() => setIsMobileNavOpen(false)} className="hover:text-primary py-1">How It Works</a>
              <a href="#pricing" onClick={() => setIsMobileNavOpen(false)} className="hover:text-primary py-1">Pricing</a>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Button variant="primary" size="md" className="w-full" rightIcon={ArrowRight}>
                Get Started
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 space-y-16 sm:space-y-24 py-8 sm:py-12">
        
        {/* 2. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Har galati se seekho. Weak topics fix karo.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark leading-[1.15]">
                College students ke liye <br className="hidden sm:inline" />
                <span className="text-primary">personal AI study tutor.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                StudyFix AI analyzes your mistakes, identifies weak concepts, clears backlogs, and creates a personalized exam preparation plan.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button variant="primary" size="lg" rightIcon={ArrowRight} className="shadow-lg shadow-blue-200">
                  Start Free
                </Button>
                <Button variant="secondary" size="lg" leftIcon={Sparkles}>
                  Try Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-correct" /> Free 7-Day Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-correct" /> No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-correct" /> Designed for College & School
                </span>
              </div>
            </div>

            {/* Right Side: Dashboard Mockup / AI Chat Illustration */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              
              <Card className="relative bg-white rounded-3xl p-5 border border-slate-200 shadow-soft-lg space-y-4">
                
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-semibold text-slate-400 ml-2">StudyFix AI Tutor Session</span>
                  </div>
                  <Badge variant="primary" size="sm">Live Session</Badge>
                </div>

                {/* AI Chat Conversation Mockup */}
                <div className="space-y-3 text-xs">
                  
                  {/* Student Question */}
                  <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none space-y-1">
                    <span className="font-semibold text-slate-700">Student:</span>
                    <p className="text-slate-800">
                      "Why did I get 0 marks in Question 4 on Integration by Parts?"
                    </p>
                  </div>

                  {/* AI Tutor Diagnostic Analysis */}
                  <div className="bg-blue-50 p-3.5 rounded-2xl rounded-tr-none border border-blue-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary flex items-center gap-1.5">
                        <BrainCircuit className="w-4 h-4" /> StudyFix AI Diagnosis:
                      </span>
                      <Badge variant="weak" size="sm">Weak Concept</Badge>
                    </div>

                    <p className="text-slate-700 leading-relaxed">
                      You chose u = e^x instead of x^2. SFAI detected confusion in applying the <strong>ILATE rule</strong> for priority ordering.
                    </p>

                    {/* Step by step fix */}
                    <div className="bg-white p-2.5 rounded-xl border border-blue-200/70 space-y-1">
                      <span className="font-bold text-correct text-[11px] block">✓ Correct Step-by-Step Fix:</span>
                      <p className="font-mono text-[11px] text-slate-800">
                        ∫ x² · e^x dx  ⇒  u = x² (Algebraic), dv = e^x dx (Exponential)
                      </p>
                    </div>
                  </div>

                  {/* Micro Progress Card inside mockup */}
                  <div className="p-3 bg-subtle rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium">Calculus Mastery</span>
                      <h4 className="text-sm font-bold text-dark">Fixing 1 Weak Concept</h4>
                    </div>
                    <Badge variant="correct" size="sm">+15% Mastery</Badge>
                  </div>

                </div>

              </Card>
            </div>

          </div>
        </section>

        {/* 3. Feature Cards Section */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <Badge variant="primary" size="md">Powerful Features</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
              Everything you need to fix weak topics & ace exams
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored AI tools designed to eliminate exam anxiety, clear backlogs, and build conceptual confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <Card 
                  key={feat.id} 
                  isHoverable 
                  className="flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant={feat.variant} size="sm">
                        {feat.badge}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-dark pt-1">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center text-xs font-semibold text-primary group cursor-pointer">
                    <span>Learn how it works</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 4. Audience Section (For College vs For School) */}
        <section id="for-college" className="bg-white py-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="primary" size="md">Targeted Learning</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                Designed for both College & School Students
              </h2>
              <p className="text-slate-600 text-sm">
                Whether preparing for B.Tech semester exams or Class 10/12 board exams, StudyFix AI adapts to your syllabus.
              </p>

              {/* Toggle Switch */}
              <div className="inline-flex p-1 bg-subtle rounded-2xl border border-slate-200 mt-4">
                <button
                  onClick={() => setActiveTab('college')}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'college'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:text-dark'
                  }`}
                >
                  For College Students (Primary)
                </button>
                <button
                  onClick={() => setActiveTab('school')}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'school'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:text-dark'
                  }`}
                >
                  For School Students (Class 6–12)
                </button>
              </div>
            </div>

            {/* Audience Detailed Cards */}
            {activeTab === 'college' ? (
              <div id="for-college" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                
                <Card variant="primary" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Semester Planning</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Customized weekly study roadmaps aligning mid-term exams, assignment deadlines, and lab submissions.
                  </p>
                </Card>

                <Card variant="wrong" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-wrong text-white flex items-center justify-center font-bold">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Backlog Recovery</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-yield topic prioritization strategy to clear past semester backlogs without affecting current courses.
                  </p>
                </Card>

                <Card variant="correct" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-correct text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Exam Revision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bite-sized formula sheets, pyqs (previous year questions), and quick AI summaries before exam night.
                  </p>
                </Card>

                <Card variant="subtle" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Assignment Assistance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deep conceptual breakdowns for complex lab assignments, code debugging, and numerical derivations.
                  </p>
                </Card>

                <Card variant="primary" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Placement Practice</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Data structures, algorithms, core CS subjects, aptitude tests, and interview technical quizzes.
                  </p>
                </Card>

                <Card variant="weak" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-weak text-white flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">CGPA Booster</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personalized mistake tracking to ensure small scoring errors don't drop your target grade point average.
                  </p>
                </Card>

              </div>
            ) : (
              <div id="for-school" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                
                <Card variant="subtle" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Chapter-Wise Learning</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structured explanations aligned with CBSE, ICSE, and State Board curriculum for Class 6 to 12.
                  </p>
                </Card>

                <Card variant="correct" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-correct text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Board Exam Preparation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sample paper walkthroughs, marking scheme insights, and time-management practice for Class 10 & 12.
                  </p>
                </Card>

                <Card variant="primary" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Homework Doubts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Snap or type math and science homework problems to get instant simplified explanations.
                  </p>
                </Card>

                <Card variant="weak" className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-weak text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-base">Simple Quizzes</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gamified daily quizzes with instant feedback to make revision fun and memory retention long-lasting.
                  </p>
                </Card>

              </div>
            )}
          </div>
        </section>

        {/* 5. How It Works Section */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="correct" size="md">Simple 4-Step Process</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
              How StudyFix AI turns mistakes into top marks
            </h2>
            <p className="text-slate-600 text-sm">
              Our AI engine continuously learns your study habits to optimize every minute of your revision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <Card key={st.step} className="relative overflow-hidden space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-100 font-mono">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-dark text-base pt-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Pricing / Call To Action Banner */}
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-soft-lg">
            <Badge variant="primary" className="bg-white/20 text-white border-white/30">
              Start Free Today
            </Badge>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to fix your weak topics and boost your CGPA?
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-normal">
              Join thousands of college and school students who study smarter with StudyFix AI.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button variant="secondary" size="lg" rightIcon={ArrowRight} className="bg-white text-primary hover:bg-blue-50 font-bold">
                Get Started For Free
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/20">
                View Student Plans
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* 6. Landing Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Logo & Tagline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-dark">StudyFix AI</span>
                <Badge variant="primary" size="sm">SFAI</Badge>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                "Har galati se seekho. Weak topics fix karo."
              </p>
              <p className="text-xs text-slate-400">
                AI personalized study tutor for college and school students.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#for-college" className="hover:text-primary transition-colors">For College Students</a></li>
                <li><a href="#for-school" className="hover:text-primary transition-colors">For School Students</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing & Plans</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Contact Us</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>support@studyfix.ai</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+91 (800) 123-STUDY</span>
                </li>
                <li className="text-slate-500 pt-1">
                  New Delhi & Bengaluru, India
                </li>
              </ul>
            </div>

            {/* Social Icons & Community */}
            <div>
              <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Connect</h4>
              <div className="flex items-center gap-3 mb-4">
                <a href="#" className="w-9 h-9 rounded-xl bg-subtle border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-blue-50 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-subtle border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-subtle border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-blue-50 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                Built with React, Vite & Tailwind CSS. Fully responsive design system.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} StudyFix AI (SFAI). All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
