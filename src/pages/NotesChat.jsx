import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import FileUploadCard from '../components/FileUploadCard';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { 
  FileText, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Layers, 
  BrainCircuit, 
  Send, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  Download, 
  FileCode,
  Zap,
  Target
} from 'lucide-react';

/**
 * PDF / Notes Chat Page Component for StudyFix AI (SFAI)
 */
export const NotesChat = ({ setActiveTab }) => {
  // Uploaded file state (pre-loaded with default sample so user sees rich view right away)
  const [uploadedFile, setUploadedFile] = useState({
    name: 'Operating_Systems_Unit3_CPU_Scheduling.pdf',
    size: '2.4 MB',
    type: 'PDF Document',
  });

  // Chat message state scoped to this document
  const [docMessages, setDocMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello Rahul! Maine aapka PDF **"Operating_Systems_Unit3_CPU_Scheduling.pdf"** complete analyze kar liya hai. Iss document se related koi bhi question poocho!',
    },
  ]);

  const [questionInput, setQuestionInput] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  // Extracted data placeholders
  const fileSummary = `Unit 3 covers CPU Scheduling Algorithms in Operating Systems. Key concepts include FCFS, SJF (Preemptive and Non-Preemptive), Priority Scheduling, and Round Robin (Time Quantum). The unit emphasizes minimizing Average Waiting Time and Turnaround Time while preventing process starvation.`;

  const importantTopics = [
    { title: 'Process Control Block (PCB)', detail: 'Contains Process ID, State, Program Counter, and CPU Registers.' },
    { title: 'Shortest Job First (SJF)', detail: 'Optimal algorithm for minimizing average waiting time.' },
    { title: 'Round Robin Scheduling', detail: 'Designed for time-sharing systems using a fixed Time Quantum (q).' },
    { title: 'Context Switching Overhead', detail: 'Time spent switching CPU from one process to another without doing useful work.' },
  ];

  const keyFormulas = [
    { label: 'Turnaround Time (TAT)', formula: 'Completion Time - Arrival Time' },
    { label: 'Waiting Time (WT)', formula: 'Turnaround Time - Burst Time' },
    { label: 'CPU Utilization', formula: '(Busy Time / Total Time) × 100%' },
  ];

  const generatedQuestions = [
    {
      id: 1,
      question: 'Q1. Why is Non-Preemptive SJF considered optimal for minimizing average waiting time?',
      answer: 'SJF always selects the process with the shortest burst time first. Moving shorter jobs ahead of longer jobs reduces the waiting time of subsequent processes by a greater amount than it increases the waiting time of the long job.',
      showAnswer: false,
    },
    {
      id: 2,
      question: 'Q2. What happens if the Time Quantum in Round Robin is extremely large?',
      answer: 'If the Time Quantum is extremely large (greater than the longest burst time), Round Robin degenerates into First-Come, First-Served (FCFS) scheduling.',
      showAnswer: false,
    },
    {
      id: 3,
      question: 'Q3. How does Preemptive SJF (SRTF) handle a new process arriving with a shorter burst time?',
      answer: 'If a newly arrived process has a burst time shorter than the remaining burst time of the currently running process, the running process is preempted and the new process takes the CPU.',
      showAnswer: false,
    },
  ];

  const [questionsState, setQuestionsState] = useState(generatedQuestions);

  const toggleAnswer = (id) => {
    setQuestionsState((prev) =>
      prev.map((q) => (q.id === id ? { ...q, showAnswer: !q.showAnswer } : q))
    );
  };

  const handleAskQuestion = (e) => {
    e?.preventDefault();
    if (!questionInput.trim() || isAsking) return;

    const userText = questionInput.trim();
    setQuestionInput('');
    
    setDocMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'student', text: userText },
    ]);

    setIsAsking(true);

    setTimeout(() => {
      let reply = `Document Page 14 reference: Based on **${uploadedFile.name}**, ${userText} can be solved by checking the burst time values and applying TAT = CT - AT.`;
      if (userText.toLowerCase().includes('round robin') || userText.toLowerCase().includes('quantum')) {
        reply = `Page 8 of PDF states: Round Robin relies heavily on the Time Quantum (q). Small quantum increases context switching overhead, while large quantum converts it to FCFS.`;
      }

      setDocMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'ai', text: reply },
      ]);
      setIsAsking(false);
    }, 1000);
  };

  return (
    <DashboardLayout activeTab="notes-chat" setActiveTab={setActiveTab}>
      <div className="space-y-8 animate-fade-in">
        
        {/* Header Title Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-primary to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="bg-white/20 text-white border-white/30">
                SFAI PDF & Notes Engine
              </Badge>
              <Badge variant="correct" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                Instant Extraction
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              PDF & Handwritten Notes AI Chat
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl font-normal">
              Upload your lecture slides, PDFs, or notes to generate summaries, key formulas, AI flashcards, and instant doubt solutions.
            </p>
          </div>

          {uploadedFile && (
            <Button
              variant="secondary"
              size="md"
              leftIcon={RefreshCw}
              className="bg-white text-primary hover:bg-blue-50 font-bold shrink-0"
              onClick={() => setUploadedFile(null)}
            >
              Upload New Document
            </Button>
          )}
        </section>

        {/* 1. Upload Card (If no file uploaded) */}
        {!uploadedFile ? (
          <FileUploadCard onFileSelected={(file) => setUploadedFile(file)} />
        ) : (
          /* 2. Uploaded Document Analysis Dashboard */
          <div className="space-y-8">
            
            {/* File Info Bar */}
            <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center font-bold shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm sm:text-base leading-snug">
                    {uploadedFile.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {uploadedFile.type} • {uploadedFile.size} • Extracted 18 Pages
                  </p>
                </div>
              </div>

              {/* Action Buttons Header */}
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={HelpCircle}
                  onClick={() => setActiveTab && setActiveTab('quiz')}
                >
                  Generate Quiz
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={Layers}
                  onClick={() => alert('12 AI Flashcards generated from this PDF!')}
                >
                  Create Flashcards
                </Button>
              </div>
            </Card>

            {/* Summary & Topics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Side: Summary & Formulas */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* AI Summary Card */}
                <Card variant="primary" className="space-y-3 border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> AI Executive Summary
                    </span>
                    <Badge variant="primary" size="sm">PDF Scope</Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {fileSummary}
                  </p>
                </Card>

                {/* Important Topics Extracted */}
                <Card className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark text-base flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Important Topics Extracted</span>
                    </h3>
                    <Badge variant="neutral" size="sm">4 Key Topics</Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {importantTopics.map((top, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-subtle border border-slate-200 space-y-1">
                        <h4 className="font-bold text-dark text-xs sm:text-sm">{top.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{top.detail}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Key Formulas & Definitions */}
                <Card className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark text-base flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500" />
                      <span>Key Formulas & Definitions</span>
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {keyFormulas.map((f, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <span className="font-bold text-slate-800">{f.label}:</span>
                        <code className="font-mono text-primary font-bold bg-white px-2 py-1 rounded-md border border-slate-200">
                          {f.formula}
                        </code>
                      </div>
                    ))}
                  </div>
                </Card>

              </div>

              {/* Right Side: PDF Scope Chat Box & Generated Question Cards */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Scoped Chat Box */}
                <Card className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-dark text-sm">Ask Questions from this PDF</h3>
                    </div>
                    <Badge variant="primary" size="sm">PDF Q&A</Badge>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3 max-h-64 overflow-y-auto text-xs pr-1">
                    {docMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-3 rounded-2xl ${
                          msg.sender === 'ai'
                            ? 'bg-blue-50 border border-blue-100 text-slate-800'
                            : 'bg-primary text-white ml-auto max-w-[85%]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                    {isAsking && (
                      <div className="text-xs text-slate-400 italic animate-pulse">
                        SFAI searching document text...
                      </div>
                    )}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleAskQuestion} className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <input
                      type="text"
                      value={questionInput}
                      onChange={(e) => setQuestionInput(e.target.value)}
                      placeholder="Ask any formula or doubt from PDF..."
                      className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary"
                    />
                    <Button type="submit" variant="primary" size="sm" isLoading={isAsking}>
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                  </form>
                </Card>

                {/* Generated Question Cards */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark text-sm flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span>Generated Practice Questions</span>
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {questionsState.map((q) => (
                      <Card key={q.id} variant="subtle" className="space-y-2 text-xs">
                        <h4 className="font-bold text-dark text-xs">{q.question}</h4>
                        {q.showAnswer && (
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 leading-relaxed animate-fade-in">
                            <strong>AI Answer: </strong>{q.answer}
                          </div>
                        )}
                        <button
                          onClick={() => toggleAnswer(q.id)}
                          className="text-primary font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1 text-[11px]"
                        >
                          <span>{q.showAnswer ? 'Hide Answer' : 'Reveal Answer'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </Card>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default NotesChat;
