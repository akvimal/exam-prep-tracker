'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useStore, useActiveProject, useSubjectAndChapter } from '../../../../lib/store';
import { QuestionType, TopicStatus, Confidence, PracticeSessionInput, UploadedFile } from '../../../../lib/types';
import { getSubjectQuestionTypes } from '../../../../data/question-patterns';
import Breadcrumb from '../../../../components/Breadcrumb';
import ChapterStats from '../../../../components/ChapterStats';
import QuestionTypeCard from '../../../../components/QuestionTypeCard';
import PracticeSessionModal from '../../../../components/PracticeSessionModal';
import ChapterAccordion from '../../../../components/ChapterAccordion';
import FileUpload from '../../../../components/FileUpload';

type TabType = 'questions' | 'content' | 'topics';

export default function ChapterDetailPage() {
  const params = useParams();
  const subjectId = params.subjectId as string;
  const chapterId = params.chapterId as string;

  const activeProject = useActiveProject();
  const { subject, chapter } = useSubjectAndChapter(subjectId, chapterId);
  const { logPracticeSession, updateTopicStatus, updateTopicConfidence, updateChapterContent, addUploadedFile, removeUploadedFile, activeProjectId } = useStore();

  const [activeTab, setActiveTab] = useState<TabType>('questions');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState<QuestionType>('mcq');
  const [pdfUrl, setPdfUrl] = useState('');
  const [isEditingPdf, setIsEditingPdf] = useState(false);

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

  const handleOpenPracticeModal = (type: QuestionType) => {
    setSelectedQuestionType(type);
    setModalOpen(true);
  };

  const handleLogPractice = (session: PracticeSessionInput) => {
    if (activeProjectId) {
      logPracticeSession(activeProjectId, subjectId, chapterId, session);
    }
  };

  const handleTopicStatusChange = (topicId: string, status: TopicStatus) => {
    if (activeProjectId) {
      updateTopicStatus(activeProjectId, subjectId, chapterId, topicId, status);
    }
  };

  const handleTopicConfidenceChange = (topicId: string, confidence: Confidence) => {
    if (activeProjectId) {
      updateTopicConfidence(activeProjectId, subjectId, chapterId, topicId, confidence);
    }
  };

  const handleSavePdfUrl = () => {
    if (activeProjectId && pdfUrl) {
      updateChapterContent(activeProjectId, subjectId, chapterId, { ncertPdfUrl: pdfUrl });
      setIsEditingPdf(false);
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

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'questions', label: 'Questions by Type', icon: '📝' },
    { id: 'content', label: 'NCERT Content', icon: '📖' },
    { id: 'topics', label: 'Topics', icon: '📋' },
  ];

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
      <div className="flex gap-2 mt-6 mb-6 bg-bg-secondary rounded-lg p-1 border border-border">
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

      {/* Tab Content */}
      {activeTab === 'questions' && (
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
      )}

      {activeTab === 'content' && (
        <div className="space-y-6">
          {/* NCERT PDF Section */}
          <div className="bg-bg-secondary rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">NCERT Textbook Content</h3>
              {!isEditingPdf && (
                <button
                  onClick={() => {
                    setPdfUrl(chapter.content?.ncertPdfUrl || '');
                    setIsEditingPdf(true);
                  }}
                  className="text-sm text-accent-blue hover:underline"
                >
                  {chapter.content?.ncertPdfUrl ? 'Change PDF URL' : 'Add PDF URL'}
                </button>
              )}
            </div>

            {isEditingPdf ? (
              <div className="space-y-3">
                <input
                  type="url"
                  value={pdfUrl}
                  onChange={(e) => setPdfUrl(e.target.value)}
                  placeholder="Enter NCERT PDF URL (e.g., https://ncert.nic.in/textbook/pdf/...)"
                  className="input w-full"
                />
                <p className="text-xs text-text-secondary">
                  You can find official NCERT PDFs at{' '}
                  <a
                    href="https://ncert.nic.in/textbook.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:underline"
                  >
                    ncert.nic.in/textbook.php
                  </a>
                </p>
                <div className="flex gap-2">
                  <button onClick={handleSavePdfUrl} className="btn-primary py-2 px-4">
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditingPdf(false)}
                    className="btn-secondary py-2 px-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : chapter.content?.ncertPdfUrl ? (
              <div className="space-y-4">
                {/* PDF Viewer */}
                <div className="relative w-full h-[70vh] bg-bg-card rounded-lg overflow-hidden">
                  <iframe
                    src={`${chapter.content.ncertPdfUrl}#toolbar=1&navpanes=0`}
                    className="w-full h-full"
                    title={`${chapter.name} - NCERT PDF`}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a
                    href={chapter.content.ncertPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:underline flex items-center gap-1"
                  >
                    Open in new tab ↗
                  </a>
                  <a
                    href={chapter.content.ncertPdfUrl}
                    download
                    className="text-accent-blue hover:underline flex items-center gap-1"
                  >
                    Download PDF ↓
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-text-secondary">
                <div className="text-4xl mb-4">📚</div>
                <p className="mb-2">No NCERT PDF linked yet.</p>
                <p className="text-sm">Click &quot;Add PDF URL&quot; to link the official NCERT textbook chapter.</p>
              </div>
            )}
          </div>

          {/* File Upload Section */}
          <div className="bg-bg-secondary rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Your Notes & Resources</h3>
            <FileUpload
              uploadedFiles={chapter.content?.uploadedFiles || []}
              onFileUploaded={handleFileUploaded}
              onFileDeleted={handleFileDeleted}
            />
          </div>
        </div>
      )}

      {activeTab === 'topics' && (
        <div className="bg-bg-secondary rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Topics</h3>
          <ChapterAccordion
            chapter={{ ...chapter, topics: chapter.topics }}
            onTopicStatusChange={handleTopicStatusChange}
            onTopicConfidenceChange={handleTopicConfidenceChange}
          />
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
