/**
 * Mock data for StudyFix AI (SFAI) Student Dashboard
 */
export const studentProfile = {
  name: 'Rahul Sharma',
  shortName: 'Rahul',
  userType: 'college',
  course: 'B.Tech Computer Science',
  semester: '4th Semester',
  institution: 'IIT Delhi',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const dashboardStats = [
  {
    id: 'semester',
    title: 'Current Semester',
    value: '4th Semester',
    subtitle: 'B.Tech Computer Science',
    variant: 'primary',
    badgeText: 'Active',
    badgeVariant: 'primary',
  },
  {
    id: 'exam-countdown',
    title: 'Exam Countdown',
    value: '23 Days',
    subtitle: 'Midterm Exams Start',
    variant: 'weak',
    badgeText: 'High Priority',
    badgeVariant: 'weak',
  },
  {
    id: 'today-goal',
    title: 'Today’s Goal',
    value: '45 / 90 mins',
    subtitle: '50% completed today',
    variant: 'primary',
    badgeText: 'In Progress',
    badgeVariant: 'primary',
  },
  {
    id: 'streak',
    title: 'Study Streak',
    value: '6 Days',
    subtitle: 'Personal best: 14 days',
    variant: 'correct',
    badgeText: '🔥 Active',
    badgeVariant: 'correct',
  },
  {
    id: 'accuracy',
    title: 'Overall Accuracy',
    value: '72%',
    subtitle: '+4% improvement',
    variant: 'correct',
    badgeText: '+4% this week',
    badgeVariant: 'correct',
  },
  {
    id: 'backlog',
    title: 'Backlog Subjects',
    value: '1 Subject',
    subtitle: 'Operating Systems (Sem 3)',
    variant: 'wrong',
    badgeText: 'Recovery Mode',
    badgeVariant: 'wrong',
  },
];

export const subjectProgressList = [
  {
    id: 'ds',
    subject: 'Data Structures & Algorithms',
    code: 'CS-201',
    progress: 68,
    accuracy: 76,
    status: 'on-track',
    nextTopic: 'Graph Traversal (BFS/DFS)',
  },
  {
    id: 'dbms',
    subject: 'Database Management Systems',
    code: 'CS-202',
    progress: 54,
    accuracy: 62,
    status: 'needs-focus',
    nextTopic: '3NF & BCNF Normalization',
  },
  {
    id: 'os',
    subject: 'Operating Systems',
    code: 'CS-203',
    progress: 41,
    accuracy: 48,
    status: 'weak',
    nextTopic: 'Round Robin & SJF CPU Scheduling',
  },
  {
    id: 'aptitude',
    subject: 'Quantitative Aptitude & Reasoning',
    code: 'APT-101',
    progress: 63,
    accuracy: 70,
    status: 'on-track',
    nextTopic: 'Time, Speed & Work Problems',
  },
];

export const weakTopicsList = [
  {
    id: 'wt-1',
    subject: 'Operating Systems',
    topic: 'Process Scheduling (SJF vs Priority)',
    accuracy: 38,
    mistakesCount: 5,
    lastMistake: 'Confused preemptive vs non-preemptive turnaround time calculation',
    severity: 'high',
  },
  {
    id: 'wt-2',
    subject: 'DBMS',
    topic: 'Normalization (3NF vs BCNF)',
    accuracy: 45,
    mistakesCount: 4,
    lastMistake: 'Failed to identify functional dependency overlap in candidate keys',
    severity: 'medium',
  },
  {
    id: 'wt-3',
    subject: 'Aptitude',
    topic: 'Time and Work Problems',
    accuracy: 52,
    mistakesCount: 3,
    lastMistake: 'Miscalculated combined efficiency of 3 workers',
    severity: 'medium',
  },
];

export const recommendedToday = [
  {
    id: 'rec-1',
    title: 'Revise Process Scheduling',
    subject: 'Operating Systems',
    timeEst: '15 mins',
    type: 'Revision',
    completed: false,
  },
  {
    id: 'rec-2',
    title: 'Complete 5 DBMS Normalization Questions',
    subject: 'DBMS',
    timeEst: '20 mins',
    type: 'AI Practice',
    completed: false,
  },
  {
    id: 'rec-3',
    title: 'Take 10-minute Aptitude Quiz',
    subject: 'Aptitude',
    timeEst: '10 mins',
    type: 'Quick Quiz',
    completed: true,
  },
];

export const upcomingExams = [
  {
    id: 'exam-1',
    title: 'Operating Systems Midterm',
    subject: 'CS-203',
    date: 'Oct 18, 2026',
    daysLeft: 8,
    priority: 'high',
  },
  {
    id: 'exam-2',
    title: 'DBMS Normalization Quiz',
    subject: 'CS-202',
    date: 'Oct 13, 2026',
    daysLeft: 3,
    priority: 'medium',
  },
  {
    id: 'exam-3',
    title: 'Data Structures Assignment #4',
    subject: 'CS-201',
    date: 'Tomorrow',
    daysLeft: 1,
    priority: 'high',
  },
];

export const weeklyAccuracyChartData = [
  { day: 'Mon', accuracy: 65 },
  { day: 'Tue', accuracy: 70 },
  { day: 'Wed', accuracy: 68 },
  { day: 'Thu', accuracy: 75 },
  { day: 'Fri', accuracy: 72 },
  { day: 'Sat', accuracy: 78 },
  { day: 'Sun', accuracy: 82 },
];
