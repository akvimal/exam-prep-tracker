// Core Types for Exam Prep Tracker

export type TopicStatus = 'not_started' | 'learning' | 'done';
export type Confidence = 'low' | 'medium' | 'high';
export type DayType = 'school' | 'weekend' | 'holiday' | 'half_day' | 'exam' | 'rest' | 'event' | 'buffer';
export type TestType = 'school' | 'self' | 'pyq' | 'mock';
export type ActivityType = 'study' | 'practice' | 'revision' | 'assessment';

// Error categories for test corrections
export type ErrorCategory =
  | 'silly_mistake'      // Careless errors
  | 'concept_gap'        // Didn't understand the concept
  | 'time_pressure'      // Ran out of time
  | 'misread_question'   // Misunderstood what was asked
  | 'calculation_error'  // Math mistakes
  | 'incomplete_answer'  // Partial answer
  | 'topic_not_covered'; // Haven't studied this yet

// Error category display info
export const errorCategoryInfo: Record<ErrorCategory, { label: string; icon: string; color: string }> = {
  silly_mistake: { label: 'Silly Mistake', icon: '⚠️', color: 'accent-yellow' },
  concept_gap: { label: 'Concept Gap', icon: '📚', color: 'accent-red' },
  time_pressure: { label: 'Time Pressure', icon: '⏰', color: 'accent-orange' },
  misread_question: { label: 'Misread Question', icon: '👁️', color: 'accent-purple' },
  calculation_error: { label: 'Calculation Error', icon: '🔢', color: 'accent-blue' },
  incomplete_answer: { label: 'Incomplete Answer', icon: '📝', color: 'accent-cyan' },
  topic_not_covered: { label: 'Topic Not Covered', icon: '❓', color: 'text-secondary' },
};

// Action item for test corrections
export interface TestActionItem {
  id: string;
  description: string;
  topicId?: string;      // Link to specific topic
  chapterId?: string;    // Link to specific chapter
  completed: boolean;
  createdAt: string;
}

// Activity type display info
export const activityTypeInfo: Record<ActivityType, { label: string; icon: string; color: string }> = {
  study: { label: 'Study', icon: '📖', color: 'accent-blue' },
  practice: { label: 'Practice', icon: '✏️', color: 'accent-green' },
  revision: { label: 'Revision', icon: '🔄', color: 'accent-yellow' },
  assessment: { label: 'Assessment', icon: '📝', color: 'accent-purple' },
};

// Time logged per activity type
export interface ActivityTimeLog {
  study: number;      // minutes
  practice: number;
  revision: number;
  assessment: number;
}

// Question types based on exam patterns
export type QuestionType =
  // CBSE types
  | 'mcq'           // 1 mark MCQs
  | 'assertion'     // Assertion-Reason MCQs
  | 'vsa'           // Very Short Answer (2 marks)
  | 'sa'            // Short Answer (3 marks)
  | 'la'            // Long Answer (5 marks)
  | 'case_study'    // Case-Based (4 marks)
  // SAT types
  | 'sat_mcq'       // SAT Multiple Choice
  | 'sat_grid_in';  // SAT Student-Produced Response (Math)

// Effort tracking per question type
export interface QuestionTypeProgress {
  type: QuestionType;
  practiceCount: number;      // Questions attempted
  timeSpentMinutes: number;   // Total time spent
  correctCount: number;       // Correct answers
  totalAttempted: number;     // For accuracy calculation
  lastPracticed?: string;     // Date ISO string
}

// Question bank categories
export type QuestionCategory =
  | '1-mark'
  | '2-mark'
  | '3-mark'
  | '5-mark'
  | 'numerical'
  | 'assertion-reason'
  | 'case-study'
  | 'hots';

export const questionCategoryInfo: Record<QuestionCategory, { label: string; marks: number; color: string }> = {
  '1-mark': { label: '1 Mark', marks: 1, color: 'accent-blue' },
  '2-mark': { label: '2 Marks', marks: 2, color: 'accent-cyan' },
  '3-mark': { label: '3 Marks', marks: 3, color: 'accent-green' },
  '5-mark': { label: '5 Marks', marks: 5, color: 'accent-orange' },
  'numerical': { label: 'Numerical', marks: 3, color: 'accent-purple' },
  'assertion-reason': { label: 'Assertion-Reason', marks: 1, color: 'accent-yellow' },
  'case-study': { label: 'Case Study', marks: 4, color: 'accent-red' },
  'hots': { label: 'HOTS', marks: 3, color: 'accent-pink' },
};

// Individual question in the question bank
export interface Question {
  id: string;
  text: string;
  category: QuestionCategory;
  topicId?: string;           // Links to topic section (e.g., "1.1", "1.2")
  answer?: string;            // Optional answer/solution
  isAttempted?: boolean;      // Track if user has attempted
  isBookmarked?: boolean;     // For revision
}

// Question bank structure per chapter
export interface ChapterQuestionBank {
  chapterId: string;
  questions: Question[];
}

// Chapter content & resources
export interface ChapterReference {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'link';
}

// Uploaded file metadata
export interface UploadedFile {
  id: string;
  filename: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export interface ChapterContent {
  ncertPdfUrl?: string;       // NCERT textbook PDF URL (legacy, kept for compat)
  notes?: string;             // Rich text notes
  references?: ChapterReference[];  // YouTube videos, articles, links
  uploadedFiles?: UploadedFile[];   // User-uploaded files
}

export interface Topic {
  id: string;
  name: string;
  weightage: string;
  status: TopicStatus;
  confidence: Confidence;
  lastRevised?: string;
  notes?: string;
  timeSpent?: number;              // Total minutes (sum of all activities) - for backward compat
  timeByActivity?: ActivityTimeLog; // Detailed breakdown by activity type
  estimatedTime?: number;          // Estimated minutes to complete (default: 60)
}

export interface Chapter {
  id: string;
  name: string;
  weightage: number;
  weightagePercent: number;
  topics: Topic[];
  questionTypeProgress?: QuestionTypeProgress[];  // Track effort per question type
  content?: ChapterContent;                        // NCERT PDF and resources
}

export interface SubjectContent {
  ncertPdfUrl?: string;
  notes?: string;
  uploadedFiles?: UploadedFile[];
}

export interface Subject {
  id: string;
  name: string;
  totalMarks: number;
  chapters: Chapter[];
  content?: SubjectContent;
}

export interface Project {
  id: string;
  name: string;
  icon: string;
  type: string;
  examDate: string;
  targetDate?: string;        // Optional "finish studying by" date (before exam for revision)
  bufferWeeks?: number;       // Weeks of revision buffer (default: 4)
  subjects: Subject[];
  linkedProjects?: string[]; // IDs of projects with shared topics
}

export interface DayConfig {
  type: DayType;
  hours: number;
  icon: string;
  name: string;
  isBlocked: boolean;
}

export interface CalendarDay {
  date: string; // YYYY-MM-DD
  dayType: DayType;
}

export interface Task {
  id: string;
  projectId: string;
  subjectId: string;
  topicId: string;
  topicName: string;
  duration: number; // minutes
  completed: boolean;
  scheduledTime?: string;
}

export interface DayPlan {
  date: string;
  dayType: DayType;
  availableHours: number;
  tasks: Task[];
}

export interface TestResult {
  id: string;
  date: string;
  projectId: string;
  subjectId: string;
  type: TestType;
  name: string;
  score: number;
  maxScore: number;
  topics?: string[];
  // Correction measures
  notes?: string;                                    // Free-text reflection
  weakTopics?: string[];                             // Topic IDs that need work
  errorBreakdown?: Partial<Record<ErrorCategory, number>>;  // Count per error type
  actionItems?: TestActionItem[];                    // Tasks to address weaknesses
}

export interface Notification {
  id: string;
  type: 'urgent' | 'warning' | 'info';
  title: string;
  message: string;
  projectId?: string;
  date: string;
  read: boolean;
}

// Practice session input
export interface PracticeSessionInput {
  type: QuestionType;
  practiceCount: number;
  timeSpentMinutes: number;
  correctCount: number;
}

// Store State
export interface AppState {
  projects: Project[];
  activeProjectId: string | null;
  dayConfigs: DayConfig[];
  calendarDays: CalendarDay[];
  dayPlans: DayPlan[];
  testResults: TestResult[];
  notifications: Notification[];

  // Actions
  setActiveProject: (id: string) => void;
  updateTopicStatus: (projectId: string, subjectId: string, chapterId: string, topicId: string, status: TopicStatus) => void;
  updateTopicConfidence: (projectId: string, subjectId: string, chapterId: string, topicId: string, confidence: Confidence) => void;
  addTestResult: (result: Omit<TestResult, 'id'>) => void;
  updateTestResult: (testId: string, updates: Partial<Omit<TestResult, 'id'>>) => void;
  deleteTestResult: (testId: string) => void;
  addTestActionItem: (testId: string, item: Omit<TestActionItem, 'id' | 'createdAt'>) => void;
  toggleTestActionItem: (testId: string, itemId: string) => void;
  removeTestActionItem: (testId: string, itemId: string) => void;
  setCalendarDay: (date: string, dayType: DayType) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  toggleTaskComplete: (taskId: string) => void;
  markNotificationRead: (id: string) => void;
  exportData: () => string;
  importData: (json: string) => boolean;

  // New actions for question type tracking
  logPracticeSession: (projectId: string, subjectId: string, chapterId: string, session: PracticeSessionInput) => void;
  updateChapterContent: (projectId: string, subjectId: string, chapterId: string, content: Partial<ChapterContent>) => void;

  // File upload actions (chapter level)
  addUploadedFile: (projectId: string, subjectId: string, chapterId: string, file: Omit<UploadedFile, 'id'>) => void;
  removeUploadedFile: (projectId: string, subjectId: string, chapterId: string, fileId: string) => void;

  // Chapter references (videos, links)
  addChapterReference: (projectId: string, subjectId: string, chapterId: string, ref: Omit<ChapterReference, 'id'>) => void;
  removeChapterReference: (projectId: string, subjectId: string, chapterId: string, refId: string) => void;

  // Subject content actions
  updateSubjectContent: (projectId: string, subjectId: string, content: Partial<SubjectContent>) => void;
  addSubjectFile: (projectId: string, subjectId: string, file: Omit<UploadedFile, 'id'>) => void;
  removeSubjectFile: (projectId: string, subjectId: string, fileId: string) => void;

  // Project date actions
  updateProjectDates: (projectId: string, examDate: string, targetDate?: string, bufferWeeks?: number) => void;

  // Day config actions
  updateDayConfigHours: (dayType: DayType, hours: number) => void;
  bulkSetCalendarDays: (startDate: string, endDate: string, dayType: DayType) => void;
  resetToDefaultDays: (month: number, year: number) => void;

  // Time tracking actions
  logStudyTime: (projectId: string, subjectId: string, chapterId: string, topicId: string, minutes: number, activity: ActivityType) => void;
}

// Helper functions
export function getProjectProgress(project: Project): number {
  let totalTopics = 0;
  let doneTopics = 0;

  project.subjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      chapter.topics.forEach(topic => {
        totalTopics++;
        if (topic.status === 'done') doneTopics++;
      });
    });
  });

  return totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;
}

export function getSubjectProgress(subject: Subject): number {
  let totalTopics = 0;
  let doneTopics = 0;

  subject.chapters.forEach(chapter => {
    chapter.topics.forEach(topic => {
      totalTopics++;
      if (topic.status === 'done') doneTopics++;
    });
  });

  return totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;
}

export function getChapterProgress(chapter: Chapter): number {
  const totalTopics = chapter.topics.length;
  const doneTopics = chapter.topics.filter(t => t.status === 'done').length;
  return totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;
}

export function getDaysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Question type display info
export const questionTypeInfo: Record<QuestionType, { label: string; shortLabel: string; marks: number; color: string }> = {
  // CBSE types
  mcq: { label: 'Multiple Choice Questions', shortLabel: 'MCQ', marks: 1, color: 'accent-blue' },
  assertion: { label: 'Assertion-Reason', shortLabel: 'A-R', marks: 1, color: 'accent-purple' },
  vsa: { label: 'Very Short Answer', shortLabel: 'VSA', marks: 2, color: 'accent-cyan' },
  sa: { label: 'Short Answer', shortLabel: 'SA', marks: 3, color: 'accent-green' },
  la: { label: 'Long Answer', shortLabel: 'LA', marks: 5, color: 'accent-orange' },
  case_study: { label: 'Case Study', shortLabel: 'Case', marks: 4, color: 'accent-yellow' },
  // SAT types
  sat_mcq: { label: 'Multiple Choice', shortLabel: 'MC', marks: 1, color: 'accent-blue' },
  sat_grid_in: { label: 'Student Response', shortLabel: 'Grid-In', marks: 1, color: 'accent-green' },
};

// Get chapter question type progress stats
export function getChapterQuestionStats(chapter: Chapter): {
  totalPracticed: number;
  totalTimeMinutes: number;
  overallAccuracy: number;
} {
  if (!chapter.questionTypeProgress || chapter.questionTypeProgress.length === 0) {
    return { totalPracticed: 0, totalTimeMinutes: 0, overallAccuracy: 0 };
  }

  let totalPracticed = 0;
  let totalTimeMinutes = 0;
  let totalCorrect = 0;
  let totalAttempted = 0;

  chapter.questionTypeProgress.forEach(qtp => {
    totalPracticed += qtp.practiceCount;
    totalTimeMinutes += qtp.timeSpentMinutes;
    totalCorrect += qtp.correctCount;
    totalAttempted += qtp.totalAttempted;
  });

  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  return { totalPracticed, totalTimeMinutes, overallAccuracy };
}
