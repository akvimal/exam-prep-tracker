'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useStore, useActiveProject, useSubjectAndChapter } from '../../../../lib/store';
import { QuestionType, PracticeSessionInput, UploadedFile, ChapterReference, TopicStatus, Confidence, ActivityType, activityTypeInfo } from '../../../../lib/types';
import { getSubjectQuestionTypes } from '../../../../data/question-patterns';
import { getChapterQuestions } from '../../../../data/question-bank-physics';
import { getChemistryChapterQuestions } from '../../../../data/question-bank-chemistry';
import { getMathematicsChapterQuestions } from '../../../../data/question-bank-mathematics';
import Breadcrumb from '../../../../components/Breadcrumb';
import ChapterStats from '../../../../components/ChapterStats';
import QuestionTypeCard from '../../../../components/QuestionTypeCard';
import PracticeSessionModal from '../../../../components/PracticeSessionModal';
import FileUpload from '../../../../components/FileUpload';
import QuestionBankView from '../../../../components/QuestionBankView';
import PDFViewer, { InlinePDFViewer } from '../../../../components/PDFViewer';
import { StatusBadge, ConfidenceBadge, WeightageBadge } from '../../../../components/StatusBadge';

type TabType = 'topics' | 'textbook' | 'question-bank' | 'log-practice' | 'resources';
type RefType = 'video' | 'article' | 'link';

const statusCycle: TopicStatus[] = ['not_started', 'learning', 'done'];
const confidenceCycle: Confidence[] = ['low', 'medium', 'high'];
const activityTypes: ActivityType[] = ['study', 'practice', 'revision', 'assessment'];

export default function ChapterDetailPage() {
  const params = useParams();
  const subjectId = params.subjectId as string;
  const chapterId = params.chapterId as string;

  const activeProject = useActiveProject();
  const { subject, chapter } = useSubjectAndChapter(subjectId, chapterId);
  const {
    logPracticeSession,
    addUploadedFile,
    removeUploadedFile,
    addChapterReference,
    removeChapterReference,
    updateTopicStatus,
    updateTopicConfidence,
    logStudyTime,
    activeProjectId
  } = useStore();

  const [activeTab, setActiveTab] = useState<TabType>('topics');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState<QuestionType>('mcq');
  const [showFullscreenPdf, setShowFullscreenPdf] = useState(false);

  // Topic time logging state
  const [loggingTopicId, setLoggingTopicId] = useState<string | null>(null);
  const [logMinutes, setLogMinutes] = useState(30);
  const [logActivity, setLogActivity] = useState<ActivityType>('study');

  // Reference form state
  const [isAddingRef, setIsAddingRef] = useState(false);
  const [refTitle, setRefTitle] = useState('');
  const [refUrl, setRefUrl] = useState('');
  const [refType, setRefType] = useState<RefType>('video');

  if (!activeProject) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Please select a project first.</p>
        </div>
      </div>
    );
  }

  if (!subject || !chapter) {
    return (
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Syllabus', href: '/syllabus' },
            { label: 'Not Found' },
          ]}
        />
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Chapter not found.</p>
          <Link href="/syllabus" className="text-accent-blue hover:underline mt-2 inline-block">
            Back to Syllabus
          </Link>
        </div>
      </div>
    );
  }

  const questionTypes = getSubjectQuestionTypes(subjectId);

  // Get questions from the question bank
  const chapterQuestions = subjectId === 'physics'
    ? getChapterQuestions(chapterId)
    : subjectId === 'chemistry'
      ? getChemistryChapterQuestions(chapterId)
      : subjectId === 'mathematics'
        ? getMathematicsChapterQuestions(chapterId)
        : [];

  const handleOpenPracticeModal = (type: QuestionType) => {
    setSelectedQuestionType(type);
    setModalOpen(true);
  };

  const handleLogPractice = (session: PracticeSessionInput) => {
    if (activeProjectId) {
      logPracticeSession(activeProjectId, subjectId, chapterId, session);
    }
  };

  const handleFileUploaded = (file: Omit<UploadedFile, 'id'>) => {
    if (activeProjectId) {
      addUploadedFile(activeProjectId, subjectId, chapterId, file);
    }
  };

  const handleFileDeleted = (fileId: string) => {
    if (activeProjectId) {
      removeUploadedFile(activeProjectId, subjectId, chapterId, fileId);
    }
  };

  const handleAddReference = () => {
    if (activeProjectId && refTitle && refUrl) {
      addChapterReference(activeProjectId, subjectId, chapterId, {
        title: refTitle,
        url: refUrl,
        type: refType,
      });
      setRefTitle('');
      setRefUrl('');
      setRefType('video');
      setIsAddingRef(false);
    }
  };

  const handleDeleteReference = (refId: string) => {
    if (activeProjectId) {
      removeChapterReference(activeProjectId, subjectId, chapterId, refId);
    }
  };

  // Topic handlers
  const cycleStatus = (topicId: string, currentStatus: TopicStatus) => {
    if (!activeProjectId) return;
    const currentIndex = statusCycle.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    updateTopicStatus(activeProjectId, subjectId, chapterId, topicId, statusCycle[nextIndex]);
  };

  const cycleConfidence = (topicId: string, currentConfidence: Confidence) => {
    if (!activeProjectId) return;
    const currentIndex = confidenceCycle.indexOf(currentConfidence);
    const nextIndex = (currentIndex + 1) % confidenceCycle.length;
    updateTopicConfidence(activeProjectId, subjectId, chapterId, topicId, confidenceCycle[nextIndex]);
  };

  const handleLogTime = (topicId: string) => {
    if (activeProjectId && logMinutes > 0) {
      logStudyTime(activeProjectId, subjectId, chapterId, topicId, logMinutes, logActivity);
      setLoggingTopicId(null);
      setLogMinutes(30);
      setLogActivity('study');
    }
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  // Detect if URL is YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const getRefIcon = (type: RefType) => {
    switch (type) {
      case 'video': return '🎬';
      case 'article': return '📄';
      case 'link': return '🔗';
    }
  };

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'topics', label: 'Topics', icon: '📋' },
    { id: 'textbook', label: 'NCERT Textbook', icon: '📖' },
    { id: 'question-bank', label: 'Question Bank', icon: '📝' },
    { id: 'log-practice', label: 'Log Practice', icon: '✏️' },
    { id: 'resources', label: 'Resources', icon: '📚' },
  ];

  const references = chapter.content?.references || [];
  const ncertPdfUrl = chapter.content?.ncertPdfUrl;

  // Calculate topic stats
  const completedTopics = chapter.topics.filter(t => t.status === 'done').length;
  const learningTopics = chapter.topics.filter(t => t.status === 'learning').length;
  const totalTopics = chapter.topics.length;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Syllabus', href: '/syllabus' },
          { label: subject.name, href: `/syllabus/${subjectId}` },
          { label: chapter.name },
        ]}
      />

      {/* Chapter Stats */}
      <ChapterStats chapter={chapter} />

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-bg-secondary rounded-lg p-1 border border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-accent-blue text-white'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/50'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Fullscreen PDF Viewer */}
      {showFullscreenPdf && ncertPdfUrl && (
        <PDFViewer
          pdfUrl={ncertPdfUrl}
          title={`${chapter.name} - NCERT Textbook`}
          onClose={() => setShowFullscreenPdf(false)}
        />
      )}

      {/* Tab Content */}
      {activeTab === 'topics' && (
        <div className="space-y-4">
          {/* Topic Stats Header */}
          <div className="bg-bg-secondary rounded-xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">Topic Progress</h3>
                <p className="text-sm text-text-secondary mt-1">
                  Track your progress through each topic in this chapter
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-lg font-bold text-accent-green">{completedTopics}</p>
                  <p className="text-xs text-text-secondary">Done</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-accent-yellow">{learningTopics}</p>
                  <p className="text-xs text-text-secondary">Learning</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-secondary">{totalTopics - completedTopics - learningTopics}</p>
                  <p className="text-xs text-text-secondary">Not Started</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics List */}
          <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden">
            {chapter.topics.map((topic, index) => (
              <div
                key={topic.id}
                className={`p-4 ${
                  index !== chapter.topics.length - 1 ? 'border-b border-border/50' : ''
                } hover:bg-bg-card/30 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-text-primary font-medium">{topic.name}</span>
                      <WeightageBadge weightage={topic.weightage} size="sm" />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-secondary">
                      {topic.estimatedTime && (
                        <span className="text-accent-purple">Est: {formatTime(topic.estimatedTime)}</span>
                      )}
                      {topic.timeSpent && topic.timeSpent > 0 && (
                        <span className="text-accent-blue">Spent: {formatTime(topic.timeSpent)}</span>
                      )}
                      {topic.lastRevised && (
                        <span>Last: {new Date(topic.lastRevised).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLoggingTopicId(loggingTopicId === topic.id ? null : topic.id)}
                      className="text-xs text-accent-blue hover:underline px-2 py-1 rounded hover:bg-accent-blue/10"
                    >
                      +Time
                    </button>
                    <ConfidenceBadge
                      confidence={topic.confidence}
                      onClick={() => cycleConfidence(topic.id, topic.confidence)}
                    />
                    <StatusBadge
                      status={topic.status}
                      onClick={() => cycleStatus(topic.id, topic.status)}
                    />
                  </div>
                </div>

                {/* Log Time Inline Form */}
                {loggingTopicId === topic.id && (
                  <div className="mt-3 bg-bg-card p-3 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-secondary">Time:</span>
                      <input
                        type="number"
                        value={logMinutes}
                        onChange={(e) => setLogMinutes(Math.max(0, Number(e.target.value)))}
                        className="w-20 text-sm px-2 py-1 rounded bg-bg-secondary border border-border text-text-primary"
                        min="0"
                        max="480"
                      />
                      <span className="text-xs text-text-secondary">minutes</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {activityTypes.map(activity => (
                        <button
                          key={activity}
                          onClick={() => setLogActivity(activity)}
                          className={`text-xs px-3 py-1.5 rounded flex items-center gap-1 ${
                            logActivity === activity
                              ? 'bg-accent-blue text-white'
                              : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                          }`}
                        >
                          <span>{activityTypeInfo[activity].icon}</span>
                          <span>{activityTypeInfo[activity].label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLogTime(topic.id)}
                        className="text-xs bg-accent-blue text-white px-4 py-1.5 rounded hover:opacity-80"
                      >
                        Add {logMinutes}m {activityTypeInfo[logActivity].label}
                      </button>
                      <button
                        onClick={() => setLoggingTopicId(null)}
                        className="text-xs text-text-secondary hover:text-text-primary px-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="bg-bg-card rounded-xl p-4 border border-border/50">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-text-secondary">Click to change:</span>
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">Status:</span>
                <span className="px-2 py-0.5 rounded text-xs status-not-started">Not Started</span>
                <span className="text-text-secondary">→</span>
                <span className="px-2 py-0.5 rounded text-xs status-learning">Learning</span>
                <span className="text-text-secondary">→</span>
                <span className="px-2 py-0.5 rounded text-xs status-done">Done</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">Confidence:</span>
                <span className="px-2 py-0.5 rounded text-xs confidence-low">Low</span>
                <span className="text-text-secondary">→</span>
                <span className="px-2 py-0.5 rounded text-xs confidence-medium">Medium</span>
                <span className="text-text-secondary">→</span>
                <span className="px-2 py-0.5 rounded text-xs confidence-high">High</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'textbook' && (
        <div className="space-y-4">
          {ncertPdfUrl ? (
            <>
              {/* PDF Controls */}
              <div className="bg-bg-secondary rounded-xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <h3 className="font-semibold text-text-primary">NCERT Textbook</h3>
                      <p className="text-sm text-text-secondary">{chapter.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowFullscreenPdf(true)}
                      className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/80 transition-colors text-sm font-medium"
                    >
                      Open Fullscreen
                    </button>
                    <a
                      href={ncertPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-bg-card text-text-primary border border-border rounded-lg hover:bg-bg-secondary transition-colors text-sm font-medium"
                    >
                      Open in New Tab
                    </a>
                    <a
                      href={ncertPdfUrl}
                      download
                      className="px-4 py-2 bg-bg-card text-text-primary border border-border rounded-lg hover:bg-bg-secondary transition-colors text-sm font-medium"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>

              {/* Inline PDF Viewer */}
              <InlinePDFViewer pdfUrl={ncertPdfUrl} height="calc(100vh - 350px)" />
            </>
          ) : (
            <div className="bg-bg-secondary rounded-xl border border-border p-8 text-center">
              <div className="text-4xl mb-3">📄</div>
              <p className="text-text-secondary">No NCERT textbook PDF available for this chapter.</p>
              <p className="text-sm text-text-secondary mt-2">
                PDFs can be added by placing them in the textbooks folder.
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'question-bank' && (
        <QuestionBankView questions={chapterQuestions} chapterName={chapter.name} />
      )}

      {activeTab === 'log-practice' && (
        <div className="space-y-4">
          <div className="bg-bg-secondary rounded-xl border border-border p-4">
            <p className="text-sm text-text-secondary">
              Track your practice sessions by question type. Click on any card to log your practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {questionTypes.map((type) => {
              const progress = chapter.questionTypeProgress?.find((p) => p.type === type);
              return (
                <QuestionTypeCard
                  key={type}
                  type={type}
                  progress={progress}
                  onPractice={() => handleOpenPracticeModal(type)}
                />
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="space-y-6">
          {/* References Section */}
          <div className="bg-bg-secondary rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Video & Links</h3>
              {!isAddingRef && (
                <button
                  onClick={() => setIsAddingRef(true)}
                  className="text-sm text-accent-blue hover:underline"
                >
                  + Add Reference
                </button>
              )}
            </div>

            {/* Add Reference Form */}
            {isAddingRef && (
              <div className="bg-bg-card rounded-lg p-4 mb-4 space-y-3">
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Title</label>
                  <input
                    type="text"
                    value={refTitle}
                    onChange={(e) => setRefTitle(e.target.value)}
                    placeholder="e.g., Physics Wallah - Kinematics"
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">URL</label>
                  <input
                    type="url"
                    value={refUrl}
                    onChange={(e) => setRefUrl(e.target.value)}
                    placeholder="https://youtube.com/..."
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Type</label>
                  <div className="flex gap-2">
                    {(['video', 'article', 'link'] as RefType[]).map((type) => (
                      <button
                        key={type}
                        onClick={() => setRefType(type)}
                        className={`px-3 py-1.5 rounded text-sm capitalize ${
                          refType === type
                            ? 'bg-accent-blue text-white'
                            : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {getRefIcon(type)} {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={handleAddReference}
                    disabled={!refTitle || !refUrl}
                    className="btn-primary py-2 px-4 disabled:opacity-50"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingRef(false);
                      setRefTitle('');
                      setRefUrl('');
                    }}
                    className="btn-secondary py-2 px-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* References List */}
            {references.length > 0 ? (
              <div className="space-y-3">
                {references.map((ref) => {
                  const youtubeId = ref.type === 'video' && isYouTubeUrl(ref.url) ? getYouTubeId(ref.url) : null;

                  return (
                    <div key={ref.id} className="bg-bg-card rounded-lg overflow-hidden">
                      {/* YouTube Embed */}
                      {youtubeId && (
                        <div className="aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            className="w-full h-full"
                            title={ref.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}

                      {/* Reference Info */}
                      <div className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span>{getRefIcon(ref.type)}</span>
                          <div>
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-primary hover:text-accent-blue font-medium"
                            >
                              {ref.title}
                            </a>
                            {!youtubeId && (
                              <p className="text-xs text-text-secondary truncate max-w-xs">{ref.url}</p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteReference(ref.id)}
                          className="text-text-secondary hover:text-accent-red p-1"
                          title="Delete"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : !isAddingRef ? (
              <div className="text-center py-8 text-text-secondary">
                <div className="text-3xl mb-2">🎬</div>
                <p>No references added yet.</p>
                <p className="text-sm">Add YouTube videos, articles, or helpful links.</p>
              </div>
            ) : null}
          </div>

          {/* File Upload Section */}
          <div className="bg-bg-secondary rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Notes & Files</h3>
            <FileUpload
              uploadedFiles={chapter.content?.uploadedFiles || []}
              onFileUploaded={handleFileUploaded}
              onFileDeleted={handleFileDeleted}
            />
          </div>
        </div>
      )}

      {/* Practice Session Modal */}
      <PracticeSessionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleLogPractice}
        questionType={selectedQuestionType}
        chapterName={chapter.name}
      />
    </div>
  );
}
