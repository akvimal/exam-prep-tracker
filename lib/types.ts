// Core Types for Exam Prep Tracker

export type TopicStatus = 'not_started' | 'learning' | 'done';
export type Confidence = 'low' | 'medium' | 'high';
export type DayType = 'school' | 'weekend' | 'holiday' | 'half_day' | 'exam' | 'rest' | 'event' | 'buffer';
export type TestType = 'school' | 'self' | 'pyq' | 'mock';

// Question types based on CBSE exam pattern
export type QuestionType =
  | 'mcq'           // 1 mark MCQs
  | 'assertion'     // Assertion-Reason MCQs
  | 'vsa'           // Very Short Answer (2 marks)
  | 'sa'            // Short Answer (3 marks)
  | 'la'            // Long Answer (5 marks)
  | 'case_study';   // Case-Based (4 marks)

// Effort tracking per question type
export interface QuestionTypeProgress {
  type: QuestionType;
  practiceCount: number;      // Questions attempted
  timeSpentMinutes: number;   // Total time spent
  correctCount: number;       // Correct answers
  totalAttempted: number;     // For accuracy calculation
  lastPracticed?: string;     // Date ISO string
}

// Chapter content & resources
export interface ChapterResource {
  title: string;
  url: string;
  type: 'video' | 'pdf' | 'link';
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
  ncertPdfUrl?: string;       // NCERT textbook PDF URL
  notes?: string;             // Rich text notes
  resources?: ChapterResource[];
  uploadedFiles?: UploadedFile[];  // User-uploaded files
}

export interface Topic {
  id: string;
  name: string;
  weightage: string;
  status: TopicStatus;
  confidence: Confidence;
  lastRevised?: string;
  notes?: string;
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

export interface Subject {
  id: string;
  name: string;
  totalMarks: number;
  chapters: Chapter[];
}

export interface Project {
  id: string;
  name: string;
  icon: string;
  type: string;
  examDate: string;
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
  setCalendarDay: (date: string, dayType: DayType) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  toggleTaskComplete: (taskId: string) => void;
  markNotificationRead: (id: string) => void;
  exportData: () => string;
  importData: (json: string) => boolean;

  // New actions for question type tracking
  logPracticeSession: (projectId: string, subjectId: string, chapterId: string, session: PracticeSessionInput) => void;
  updateChapterContent: (projectId: string, subjectId: string, chapterId: string, content: Partial<ChapterContent>) => void;

  // File upload actions
  addUploadedFile: (projectId: string, subjectId: string, chapterId: string, file: Omit<UploadedFile, 'id'>) => void;
  removeUploadedFile: (projectId: string, subjectId: string, chapterId: string, fileId: string) => void;
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
  mcq: { label: 'Multiple Choice Questions', shortLabel: 'MCQ', marks: 1, color: 'accent-blue' },
  assertion: { label: 'Assertion-Reason', shortLabel: 'A-R', marks: 1, color: 'accent-purple' },
  vsa: { label: 'Very Short Answer', shortLabel: 'VSA', marks: 2, color: 'accent-cyan' },
  sa: { label: 'Short Answer', shortLabel: 'SA', marks: 3, color: 'accent-green' },
  la: { label: 'Long Answer', shortLabel: 'LA', marks: 5, color: 'accent-orange' },
  case_study: { label: 'Case Study', shortLabel: 'Case', marks: 4, color: 'accent-yellow' },
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
