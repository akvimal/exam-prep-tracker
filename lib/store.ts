import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppState, Project, DayConfig, CalendarDay, DayPlan, TestResult, Notification, TopicStatus, Confidence, QuestionType, ChapterContent, UploadedFile } from './types';
import { initialProjects, defaultDayConfigs, initialNotifications } from '../data/initial-data';

// Generate unique ID
const generateId = () => Math.random().toString(36).substring(2, 15);

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      projects: initialProjects,
      activeProjectId: initialProjects[0]?.id || null,
      dayConfigs: defaultDayConfigs,
      calendarDays: [],
      dayPlans: [],
      testResults: [],
      notifications: initialNotifications,

      setActiveProject: (id: string) => {
        set({ activeProjectId: id });
      },

      updateTopicStatus: (projectId: string, subjectId: string, chapterId: string, topicId: string, status: TopicStatus) => {
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;
                    return {
                      ...chapter,
                      topics: chapter.topics.map((topic) => {
                        if (topic.id !== topicId) return topic;
                        return {
                          ...topic,
                          status,
                          lastRevised: status === 'done' ? new Date().toISOString().split('T')[0] : topic.lastRevised,
                        };
                      }),
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },

      updateTopicConfidence: (projectId: string, subjectId: string, chapterId: string, topicId: string, confidence: Confidence) => {
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;
                    return {
                      ...chapter,
                      topics: chapter.topics.map((topic) => {
                        if (topic.id !== topicId) return topic;
                        return { ...topic, confidence };
                      }),
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },

      addTestResult: (result: Omit<TestResult, 'id'>) => {
        const newResult: TestResult = {
          ...result,
          id: generateId(),
        };
        set((state) => ({
          testResults: [...state.testResults, newResult],
        }));
      },

      setCalendarDay: (date: string, dayType) => {
        set((state) => {
          const existingIndex = state.calendarDays.findIndex((d) => d.date === date);
          if (existingIndex >= 0) {
            const updated = [...state.calendarDays];
            updated[existingIndex] = { date, dayType };
            return { calendarDays: updated };
          }
          return { calendarDays: [...state.calendarDays, { date, dayType }] };
        });
      },

      addTask: (task: Omit<import('./types').Task, 'id'>) => {
        const newTask = {
          ...task,
          id: generateId(),
        };
        set((state) => {
          const date = new Date().toISOString().split('T')[0];
          const existingPlanIndex = state.dayPlans.findIndex((p) => p.date === date);

          if (existingPlanIndex >= 0) {
            const updated = [...state.dayPlans];
            updated[existingPlanIndex] = {
              ...updated[existingPlanIndex],
              tasks: [...updated[existingPlanIndex].tasks, newTask],
            };
            return { dayPlans: updated };
          }

          const dayConfig = state.dayConfigs.find((d) => d.type === 'school') || state.dayConfigs[0];
          return {
            dayPlans: [
              ...state.dayPlans,
              {
                date,
                dayType: 'school',
                availableHours: dayConfig?.hours || 4,
                tasks: [newTask],
              },
            ],
          };
        });
      },

      toggleTaskComplete: (taskId: string) => {
        set((state) => ({
          dayPlans: state.dayPlans.map((plan) => ({
            ...plan,
            tasks: plan.tasks.map((task) =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
          })),
        }));
      },

      markNotificationRead: (id: string) => {
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        }));
      },

      exportData: () => {
        const state = get();
        return JSON.stringify({
          projects: state.projects,
          dayConfigs: state.dayConfigs,
          calendarDays: state.calendarDays,
          dayPlans: state.dayPlans,
          testResults: state.testResults,
          notifications: state.notifications,
          activeProjectId: state.activeProjectId,
        }, null, 2);
      },

      importData: (json: string) => {
        try {
          const data = JSON.parse(json);
          set({
            projects: data.projects || initialProjects,
            dayConfigs: data.dayConfigs || defaultDayConfigs,
            calendarDays: data.calendarDays || [],
            dayPlans: data.dayPlans || [],
            testResults: data.testResults || [],
            notifications: data.notifications || [],
            activeProjectId: data.activeProjectId || null,
          });
          return true;
        } catch {
          return false;
        }
      },

      logPracticeSession: (projectId: string, subjectId: string, chapterId: string, session) => {
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;

                    // Find existing progress for this question type or create new
                    const existingProgress = chapter.questionTypeProgress || [];
                    const typeIndex = existingProgress.findIndex(p => p.type === session.type);

                    let updatedProgress;
                    if (typeIndex >= 0) {
                      // Update existing progress
                      updatedProgress = existingProgress.map((p, i) =>
                        i === typeIndex
                          ? {
                              ...p,
                              practiceCount: p.practiceCount + session.practiceCount,
                              timeSpentMinutes: p.timeSpentMinutes + session.timeSpentMinutes,
                              correctCount: p.correctCount + session.correctCount,
                              totalAttempted: p.totalAttempted + session.practiceCount,
                              lastPracticed: new Date().toISOString().split('T')[0],
                            }
                          : p
                      );
                    } else {
                      // Add new progress entry
                      updatedProgress = [
                        ...existingProgress,
                        {
                          type: session.type,
                          practiceCount: session.practiceCount,
                          timeSpentMinutes: session.timeSpentMinutes,
                          correctCount: session.correctCount,
                          totalAttempted: session.practiceCount,
                          lastPracticed: new Date().toISOString().split('T')[0],
                        },
                      ];
                    }

                    return {
                      ...chapter,
                      questionTypeProgress: updatedProgress,
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },

      updateChapterContent: (projectId: string, subjectId: string, chapterId: string, content) => {
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;
                    return {
                      ...chapter,
                      content: {
                        ...chapter.content,
                        ...content,
                      },
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },

      addUploadedFile: (projectId: string, subjectId: string, chapterId: string, file) => {
        const newFile: UploadedFile = {
          ...file,
          id: generateId(),
        };
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;
                    const existingFiles = chapter.content?.uploadedFiles || [];
                    return {
                      ...chapter,
                      content: {
                        ...chapter.content,
                        uploadedFiles: [...existingFiles, newFile],
                      },
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },

      removeUploadedFile: (projectId: string, subjectId: string, chapterId: string, fileId: string) => {
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;
            return {
              ...project,
              subjects: project.subjects.map((subject) => {
                if (subject.id !== subjectId) return subject;
                return {
                  ...subject,
                  chapters: subject.chapters.map((chapter) => {
                    if (chapter.id !== chapterId) return chapter;
                    const existingFiles = chapter.content?.uploadedFiles || [];
                    return {
                      ...chapter,
                      content: {
                        ...chapter.content,
                        uploadedFiles: existingFiles.filter((f) => f.id !== fileId),
                      },
                    };
                  }),
                };
              }),
            };
          }),
        }));
      },
    }),
    {
      name: 'exam-prep-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        projects: state.projects,
        activeProjectId: state.activeProjectId,
        dayConfigs: state.dayConfigs,
        calendarDays: state.calendarDays,
        dayPlans: state.dayPlans,
        testResults: state.testResults,
        notifications: state.notifications,
      }),
    }
  )
);

// Selectors for common operations
export const useActiveProject = () => {
  const { projects, activeProjectId } = useStore();
  return projects.find((p) => p.id === activeProjectId) || null;
};

export const useProjectById = (id: string) => {
  const { projects } = useStore();
  return projects.find((p) => p.id === id) || null;
};

export const useUnreadNotifications = () => {
  const { notifications } = useStore();
  return notifications.filter((n) => !n.read);
};

// Get subject by ID from active project
export const useSubjectById = (subjectId: string) => {
  const activeProject = useActiveProject();
  if (!activeProject) return null;
  return activeProject.subjects.find((s) => s.id === subjectId) || null;
};

// Get chapter by ID from a subject in active project
export const useChapterById = (subjectId: string, chapterId: string) => {
  const subject = useSubjectById(subjectId);
  if (!subject) return null;
  return subject.chapters.find((c) => c.id === chapterId) || null;
};

// Get subject and chapter together
export const useSubjectAndChapter = (subjectId: string, chapterId: string) => {
  const activeProject = useActiveProject();
  if (!activeProject) return { subject: null, chapter: null };

  const subject = activeProject.subjects.find((s) => s.id === subjectId) || null;
  const chapter = subject?.chapters.find((c) => c.id === chapterId) || null;

  return { subject, chapter };
};
