import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { 
  Sparkles, 
  Plus, 
  MessageSquare, 
  Target, 
  Calendar, 
  HelpCircle, 
  Clock, 
  Trash2, 
  BookOpen, 
  ChevronRight,
  BrainCircuit,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

/**
 * AI Tutor Chat Page for StudyFix AI (SFAI)
 */
export const AiTutor = ({ setActiveTab }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [activeChatId, setActiveChatId] = useState('chat-1');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Subject options
  const subjects = ['All', 'Programming', 'DBMS', 'OS', 'Maths', 'Aptitude'];

  // Recent chats list
  const recentChats = [
    {
      id: 'chat-1',
      title: 'Process Scheduling in OS',
      subject: 'OS',
      date: 'Today',
      active: true,
    },
    {
      id: 'chat-2',
      title: '3NF vs BCNF Normalization',
      subject: 'DBMS',
      date: 'Yesterday',
      active: false,
    },
    {
      id: 'chat-3',
      title: 'Integration by Parts (ILATE Rule)',
      subject: 'Maths',
      date: '3 days ago',
      active: false,
    },
    {
      id: 'chat-4',
      title: 'Time & Work Shortcut Formula',
      subject: 'Aptitude',
      date: 'Oct 5',
      active: false,
    },
  ];

  // Sample initial conversation with requested exact Hinglish dialogue
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'student',
      text: 'Process scheduling samajh nahi aata.',
      timestamp: '10:40 AM',
    },
    {
      id: 2,
      sender: 'ai',
      text: 'Koi baat nahi! Pehle simple example se samajhte hain. CPU ek time par kitne processes handle karta hai?\n\nThink about a single billing counter at a movie theater—if 10 people stand in line, how does the ticket seller decide who gets tickets first?\n\nThat exact decision logic is called **CPU Process Scheduling** (e.g. FCFS, SJF, or Round Robin).',
      timestamp: '10:41 AM',
      practiceQuestion: 'If Process P1 (burst time 6ms) arrives first, and P2 (burst time 2ms) arrives at the same time, which process finishes first under Shortest Job First (SJF)?',
    },
  ]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle student sending a new message
  const handleSendMessage = ({ text, attachment }) => {
    const newStudentMsg = {
      id: Date.now(),
      sender: 'student',
      text: text || 'Uploaded an attachment for doubt solving',
      attachment,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newStudentMsg]);
    setIsTyping(true);

    // Simulate SFAI intelligent tutor step-by-step response in Hinglish
    setTimeout(() => {
      let aiResponseText = '';
      let practiceQ = null;

      const lowerText = text.toLowerCase();

      if (lowerText.includes('p2') || lowerText.includes('2ms') || lowerText.includes('sjf')) {
        aiResponseText = 'Shabash! Perfect answer! 🎉\n\nUnder **Shortest Job First (SJF)**, P2 (2ms) runs before P1 (6ms) because its execution time is shorter. This minimizes the average waiting time.\n\nHere is a quick concept rule to remember:\n• **Non-preemptive**: Current process completes fully before next starts.\n• **Preemptive (SRTF)**: If a shorter process arrives, running process is paused!';
        practiceQ = 'Calculate the average waiting time when P1 (6ms) and P2 (2ms) run in SJF order.';
      } else if (lowerText.includes('normalization') || lowerText.includes('dbms')) {
        aiResponseText = 'DBMS Normalization simple words mein:\n\n1NF: Every cell has single value (no arrays).\n2NF: No partial dependency (non-key attribute depends on WHOLE primary key).\n3NF: No transitive dependency (Non-key -> Non-key is not allowed).\n\nConsistent data, zero duplication!';
        practiceQ = 'In a table where Student_ID -> Department and Department -> HOD_Name, which normal form is violated?';
      } else {
        aiResponseText = `Acha question hai! Step-by-step breakdown karte hain:\n\n1️⃣ Pehle basic concept rule identify karte hain.\n2️⃣ Formula / Theorem apply karenge.\n3️⃣ Common mistake check: Hamesha units and signs check karo.\n\nKya aapko is step tak clarity milli? Next step solve karein?`;
        practiceQ = 'Try solving 1 practice problem on this topic now to confirm your concept mastery!';
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        practiceQuestion: practiceQ,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
  };

  const handlePracticeClick = (questionText) => {
    handleSendMessage({
      text: `Practice question answer: ${questionText}`,
    });
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        text: 'Namaste Rahul! Main aapka StudyFix AI Tutor hoon. Aaj kis subject ya topic ka doubt solve karna hai?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <DashboardLayout activeTab="ai-tutor" setActiveTab={setActiveTab}>
      <div className="h-[calc(100vh-8.5rem)] flex flex-col lg:flex-row gap-4 animate-fade-in">
        
        {/* 1. Left Sidebar: Chat Navigation & Recent Chats */}
        <div className="w-full lg:w-64 bg-white rounded-3xl border border-slate-200 p-4 flex flex-col justify-between shrink-0 shadow-soft">
          <div className="space-y-4">
            
            {/* New Chat Button */}
            <Button
              variant="primary"
              size="md"
              leftIcon={Plus}
              className="w-full font-bold shadow-sm"
              onClick={handleNewChat}
            >
              New AI Chat
            </Button>

            {/* Subject Filters */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Filter Subject
              </span>
              <div className="flex flex-wrap gap-1">
                {subjects.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`text-[11px] px-2.5 py-1 rounded-xl font-semibold transition-all cursor-pointer ${
                      selectedSubject === sub
                        ? 'bg-primary text-white shadow-2xs'
                        : 'bg-subtle text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Chats List */}
            <div className="space-y-1 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Recent AI Sessions
              </span>
              <div className="space-y-1 max-h-48 lg:max-h-72 overflow-y-auto pr-1">
                {recentChats
                  .filter((c) => selectedSubject === 'All' || c.subject === selectedSubject)
                  .map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setActiveChatId(chat.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        activeChatId === chat.id
                          ? 'bg-primary-light text-primary border border-blue-200'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <MessageSquare className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{chat.title}</span>
                      </div>
                      <Badge variant="neutral" size="sm" className="text-[9px] px-1.5">
                        {chat.date}
                      </Badge>
                    </button>
                  ))}
              </div>
            </div>

          </div>

          {/* Quick AI Tutor Info Footnote */}
          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-primary shrink-0" />
            <span>SFAI Engine v1.0 • Hinglish Tutor Mode</span>
          </div>
        </div>

        {/* 2. Center: Chat Window */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200 p-4 flex flex-col justify-between min-w-0 shadow-soft">
          
          {/* Active Chat Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-sm">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-dark text-sm sm:text-base">
                  Process Scheduling in OS
                </h3>
                <p className="text-[11px] text-slate-500">
                  Operating Systems • Hinglish Step-by-Step Explanation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="weak" showDot size="sm">
                Weak Concept Mode
              </Badge>
              <button
                onClick={handleNewChat}
                title="Clear conversation"
                className="p-2 text-slate-400 hover:text-wrong rounded-xl hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto py-4 px-1 space-y-2">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} onPracticeClick={handlePracticeClick} />
            ))}

            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-center text-xs text-slate-400 italic animate-pulse">
                <div className="w-7 h-7 rounded-xl bg-primary text-white flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 animate-spin" />
                </div>
                <span>StudyFix AI is thinking step-by-step explanation...</span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="pt-3 border-t border-slate-100">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isTyping} />
          </div>

        </div>

        {/* 3. Right Sidebar: Context & AI Practice */}
        <div className="hidden xl:flex w-72 flex-col gap-4 shrink-0">
          
          {/* Weak Topics Context */}
          <Card variant="weak" className="space-y-3 border-amber-200 bg-amber-50/40">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-xs flex items-center gap-1.5">
                <Target className="w-4 h-4 text-weak" /> Weak Topic Context
              </span>
              <Badge variant="weak" size="sm">Flagged</Badge>
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm">Process Scheduling</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                OS • 38% accuracy in recent practice sessions
              </p>
            </div>
            <div className="text-[11px] bg-white p-2 rounded-xl border border-amber-200/80 text-slate-700">
              <strong>Common Trap:</strong> Forgetting CPU burst time vs I/O burst time order.
            </div>
          </Card>

          {/* Suggested Practice */}
          <Card className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" /> Suggested AI Practice
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-subtle border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-dark">5-Min OS Quiz</span>
                  <Badge variant="correct" size="sm">3 Qs</Badge>
                </div>
                <p className="text-[11px] text-slate-500">Test SJF & Round Robin logic</p>
              </div>

              <Button
                variant="primary"
                size="sm"
                className="w-full font-bold text-xs mt-1"
                leftIcon={HelpCircle}
                onClick={() => setActiveTab && setActiveTab('quiz')}
              >
                Take 5-Min AI Quiz
              </Button>
            </div>
          </Card>

          {/* Exam Countdown Card */}
          <Card variant="subtle" className="space-y-2 border-slate-200">
            <div className="flex items-center justify-between">
              <span className="font-bold text-dark text-xs flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" /> Upcoming Exam
              </span>
              <Badge variant="weak" size="sm">8 Days</Badge>
            </div>
            <h4 className="font-bold text-dark text-xs">OS Midterm Exam</h4>
            <p className="text-[11px] text-slate-500">Covering Process & Memory Management</p>
          </Card>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default AiTutor;
