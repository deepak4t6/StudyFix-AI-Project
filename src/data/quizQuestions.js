/**
 * 10 Sample Quiz Questions for StudyFix AI (SFAI)
 */
export const quizQuestions = [
  {
    id: 1,
    subject: 'Operating Systems',
    topic: 'Process Scheduling',
    question: 'Under Shortest Job First (SJF) scheduling, if Process P1 has burst time 6ms and P2 has burst time 2ms (both arriving at t=0), which process runs first?',
    options: [
      'P1 runs first because it has a larger burst time',
      'P2 runs first because SJF prioritizes the shortest execution time',
      'Both run simultaneously on single core CPU',
      'Execution order is random'
    ],
    correctAnswer: 1,
    explanation: 'SJF (Shortest Job First) selects the process with the smallest execution/burst time. Since P2 (2ms) < P1 (6ms), P2 executes first to minimize average waiting time.',
    similarPractice: 'What happens if P3 (1ms) arrives at t=1ms under Preemptive Shortest Remaining Time First (SRTF)?',
  },
  {
    id: 2,
    subject: 'Database Management Systems',
    topic: 'Normalization',
    question: 'A relation is in 3NF (Third Normal Form) if it is in 2NF and there is no ____ dependency.',
    options: [
      'Partial',
      'Transitive',
      'Multivalued',
      'Join'
    ],
    correctAnswer: 1,
    explanation: '3NF requires that no non-prime attribute is transitively dependent on any candidate key. In short: Non-key -> Non-key dependencies are forbidden.',
    similarPractice: 'If A -> B and B -> C exist in a table, what condition must hold for C to be in 3NF?',
  },
  {
    id: 3,
    subject: 'Data Structures',
    topic: 'Binary Search Trees',
    question: 'What is the time complexity of searching an element in a balanced Binary Search Tree (BST) with N nodes?',
    options: [
      'O(1)',
      'O(N)',
      'O(log N)',
      'O(N log N)'
    ],
    correctAnswer: 2,
    explanation: 'In a balanced BST, each comparison eliminates half of the remaining subtrees. Hence, the height of the tree is O(log N) and search complexity is O(log N).',
    similarPractice: 'What is the worst-case time complexity of searching in a completely skewed BST?',
  },
  {
    id: 4,
    subject: 'Mathematics',
    topic: 'Integration by Parts',
    question: 'According to the ILATE rule for Integration by Parts (∫ u dv), which function type should be chosen as u when integrating x² · e^x?',
    options: [
      'Exponential (e^x) as u',
      'Algebraic (x²) as u',
      'Logarithmic as u',
      'Either can be chosen'
    ],
    correctAnswer: 1,
    explanation: 'In ILATE (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential), Algebraic (x²) comes before Exponential (e^x). Thus, u = x² and dv = e^x dx.',
    similarPractice: 'Evaluate ∫ x · ln(x) dx by identifying which term should be chosen as u according to ILATE.',
  },
  {
    id: 5,
    subject: 'Quantitative Aptitude',
    topic: 'Time and Work',
    question: 'If Worker A can complete a task in 10 days and Worker B can complete it in 15 days, how many days will they take working together?',
    options: [
      '6 days',
      '8 days',
      '12.5 days',
      '5 days'
    ],
    correctAnswer: 0,
    explanation: '1 day work = 1/10 + 1/15 = (3 + 2) / 30 = 5/30 = 1/6. Therefore, together they will finish in 6 days.',
    similarPractice: 'If Worker C joins them and together they finish in 4 days, how long would C take alone?',
  },
  {
    id: 6,
    subject: 'Operating Systems',
    topic: 'Deadlocks',
    question: 'Which of the following is NOT one of the 4 necessary conditions for a deadlock to occur in an OS?',
    options: [
      'Mutual Exclusion',
      'Hold and Wait',
      'Preemption Allowed',
      'Circular Wait'
    ],
    correctAnswer: 2,
    explanation: 'Deadlock requires "No Preemption" (resources cannot be forcibly taken). If preemption IS allowed, deadlock is prevented!',
    similarPractice: 'Which algorithm is famously used for deadlock avoidance in multi-resource environments?',
  },
  {
    id: 7,
    subject: 'DBMS',
    topic: 'SQL Joins',
    question: 'Which SQL join returns all rows from the left table and matching rows from the right table?',
    options: [
      'INNER JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'FULL OUTER JOIN'
    ],
    correctAnswer: 1,
    explanation: 'LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table. If no match is found, NULL is returned.',
    similarPractice: 'What result is produced if a RIGHT JOIN finds no corresponding match in the left table?',
  },
  {
    id: 8,
    subject: 'Data Structures',
    topic: 'Stacks & Queues',
    question: 'Which data structure follows the LIFO (Last In, First Out) principle?',
    options: [
      'Queue',
      'Stack',
      'Priority Queue',
      'Array'
    ],
    correctAnswer: 1,
    explanation: 'A Stack is a LIFO structure where the last inserted element is the first to be popped out (e.g., undo stack or function call stack).',
    similarPractice: 'Name two real-world application examples of Queue (FIFO) in operating systems.',
  },
  {
    id: 9,
    subject: 'Quantitative Aptitude',
    topic: 'Speed & Distance',
    question: 'A train traveling at 60 km/h crosses a 200m pole in how many seconds?',
    options: [
      '12 seconds',
      '10 seconds',
      '15 seconds',
      '18 seconds'
    ],
    correctAnswer: 0,
    explanation: 'Speed in m/s = 60 × (5/18) = 50/3 m/s. Time = Distance / Speed = 200 / (50/3) = (200 × 3) / 50 = 12 seconds.',
    similarPractice: 'How long would the same train take to cross a 300m platform?',
  },
  {
    id: 10,
    subject: 'Mathematics',
    topic: 'Matrices',
    question: 'A square matrix A is called orthogonal if its transpose Aᵀ satisfies:',
    options: [
      'Aᵀ = A',
      'Aᵀ = -A',
      'A · Aᵀ = I (Identity Matrix)',
      'Det(A) = 0'
    ],
    correctAnswer: 2,
    explanation: 'An orthogonal matrix satisfies A · Aᵀ = Aᵀ · A = I, meaning its inverse is equal to its transpose (A⁻¹ = Aᵀ).',
    similarPractice: 'What is the value of the determinant of an orthogonal matrix?',
  }
];
