import { QuestionType, QuestionTypeProgress } from '@/lib/types';

// Question section definition
export interface QuestionSection {
  type: QuestionType;
  count: number;
  marksEach: number;
  totalMarks: number;
  description: string;
}

// Subject exam pattern
export interface SubjectExamPattern {
  subjectId: string;
  subjectCode: string;
  totalTheoryMarks: number;
  totalPracticalMarks: number;
  totalQuestions: number;
  sections: QuestionSection[];
}

// CBSE 2025-26 Exam Patterns based on official guidelines
export const subjectExamPatterns: Record<string, SubjectExamPattern> = {
  physics: {
    subjectId: 'physics',
    subjectCode: '042',
    totalTheoryMarks: 70,
    totalPracticalMarks: 30,
    totalQuestions: 33,
    sections: [
      { type: 'mcq', count: 14, marksEach: 1, totalMarks: 14, description: 'Section A: MCQs' },
      { type: 'assertion', count: 2, marksEach: 1, totalMarks: 2, description: 'Section A: Assertion-Reason' },
      { type: 'vsa', count: 5, marksEach: 2, totalMarks: 10, description: 'Section B: Very Short Answer' },
      { type: 'sa', count: 7, marksEach: 3, totalMarks: 21, description: 'Section C: Short Answer' },
      { type: 'case_study', count: 2, marksEach: 4, totalMarks: 8, description: 'Section D: Case-Study Based' },
      { type: 'la', count: 3, marksEach: 5, totalMarks: 15, description: 'Section E: Long Answer' },
    ],
  },
  chemistry: {
    subjectId: 'chemistry',
    subjectCode: '043',
    totalTheoryMarks: 70,
    totalPracticalMarks: 30,
    totalQuestions: 33,
    sections: [
      { type: 'mcq', count: 14, marksEach: 1, totalMarks: 14, description: 'Section A: MCQs' },
      { type: 'assertion', count: 2, marksEach: 1, totalMarks: 2, description: 'Section A: Assertion-Reason' },
      { type: 'vsa', count: 5, marksEach: 2, totalMarks: 10, description: 'Section B: Very Short Answer' },
      { type: 'sa', count: 7, marksEach: 3, totalMarks: 21, description: 'Section C: Short Answer' },
      { type: 'case_study', count: 2, marksEach: 4, totalMarks: 8, description: 'Section D: Case-Study Based' },
      { type: 'la', count: 3, marksEach: 5, totalMarks: 15, description: 'Section E: Long Answer' },
    ],
  },
  mathematics: {
    subjectId: 'mathematics',
    subjectCode: '041',
    totalTheoryMarks: 80,
    totalPracticalMarks: 0, // Internal Assessment: 20
    totalQuestions: 38,
    sections: [
      { type: 'mcq', count: 18, marksEach: 1, totalMarks: 18, description: 'Section A: MCQs' },
      { type: 'assertion', count: 2, marksEach: 1, totalMarks: 2, description: 'Section A: Assertion-Reason' },
      { type: 'vsa', count: 5, marksEach: 2, totalMarks: 10, description: 'Section B: Very Short Answer' },
      { type: 'sa', count: 6, marksEach: 3, totalMarks: 18, description: 'Section C: Short Answer' },
      { type: 'la', count: 4, marksEach: 5, totalMarks: 20, description: 'Section D: Long Answer' },
      { type: 'case_study', count: 3, marksEach: 4, totalMarks: 12, description: 'Section E: Case-Based' },
    ],
  },
  'computer-science': {
    subjectId: 'computer-science',
    subjectCode: '083',
    totalTheoryMarks: 70,
    totalPracticalMarks: 30,
    totalQuestions: 37,
    sections: [
      { type: 'mcq', count: 18, marksEach: 1, totalMarks: 18, description: 'Section A: MCQs' },
      { type: 'assertion', count: 3, marksEach: 1, totalMarks: 3, description: 'Section A: Assertion-Reason' },
      { type: 'vsa', count: 5, marksEach: 2, totalMarks: 10, description: 'Section B: Very Short Answer' },
      { type: 'sa', count: 6, marksEach: 3, totalMarks: 18, description: 'Section C: Short Answer' },
      { type: 'la', count: 3, marksEach: 5, totalMarks: 15, description: 'Section D: Long Answer' },
      { type: 'case_study', count: 2, marksEach: 4, totalMarks: 8, description: 'Section E: Case-Based' },
    ],
  },
};

// Unit-wise weightage based on PDF
export const unitWeightage: Record<string, { units: { name: string; chapters: string[]; marks: number }[] }> = {
  physics: {
    units: [
      { name: 'Units I & II: Electrostatics & Current Electricity', chapters: ['electrostatics', 'current-electricity'], marks: 16 },
      { name: 'Units III & IV: Magnetism, EMI & AC', chapters: ['magnetic-effects', 'emi-ac'], marks: 17 },
      { name: 'Units V & VI: EM Waves & Optics', chapters: ['em-waves', 'optics'], marks: 18 },
      { name: 'Units VII & VIII: Dual Nature, Atoms & Nuclei', chapters: ['modern-physics', 'nuclei'], marks: 12 },
      { name: 'Unit IX: Electronic Devices', chapters: ['semiconductors'], marks: 7 },
    ],
  },
  chemistry: {
    units: [
      { name: 'Physical Chemistry', chapters: ['solid-state', 'solutions', 'electrochemistry', 'chemical-kinetics', 'surface-chemistry'], marks: 23 },
      { name: 'Inorganic Chemistry', chapters: ['p-block', 'd-f-block', 'coordination'], marks: 14 },
      { name: 'Organic Chemistry', chapters: ['haloalkanes', 'alcohols', 'aldehydes-ketones', 'amines', 'biomolecules', 'polymers', 'everyday-chemistry'], marks: 33 },
    ],
  },
  mathematics: {
    units: [
      { name: 'Calculus', chapters: ['continuity-diff', 'applications-derivatives', 'integrals', 'application-integrals', 'differential-equations'], marks: 35 },
      { name: 'Vectors & 3D Geometry', chapters: ['vectors', '3d-geometry'], marks: 14 },
      { name: 'Algebra', chapters: ['matrices', 'determinants'], marks: 10 },
      { name: 'Probability', chapters: ['probability'], marks: 8 },
      { name: 'Relations & Functions', chapters: ['relations-functions', 'inverse-trig'], marks: 8 },
      { name: 'Linear Programming', chapters: ['linear-programming'], marks: 5 },
    ],
  },
  'computer-science': {
    units: [
      { name: 'Unit 1: Python Programming', chapters: ['python-revision', 'functions', 'file-handling', 'data-structures'], marks: 40 },
      { name: 'Unit 2: Computer Networks', chapters: ['networking'], marks: 10 },
      { name: 'Unit 3: Database Management', chapters: ['sql', 'python-mysql'], marks: 20 },
    ],
  },
};

// Helper to create default question type progress for a chapter
export function createDefaultQuestionTypeProgress(subjectId: string): QuestionTypeProgress[] {
  const pattern = subjectExamPatterns[subjectId];
  if (!pattern) return [];

  // Get unique question types from the pattern
  const questionTypes = new Set<QuestionType>();
  pattern.sections.forEach(section => questionTypes.add(section.type));

  return Array.from(questionTypes).map(type => ({
    type,
    practiceCount: 0,
    timeSpentMinutes: 0,
    correctCount: 0,
    totalAttempted: 0,
  }));
}

// Get question types for a subject
export function getSubjectQuestionTypes(subjectId: string): QuestionType[] {
  const pattern = subjectExamPatterns[subjectId];
  if (!pattern) return ['mcq', 'vsa', 'sa', 'la'];

  const types = new Set<QuestionType>();
  pattern.sections.forEach(section => types.add(section.type));
  return Array.from(types);
}
