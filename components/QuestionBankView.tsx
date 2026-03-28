'use client';

import { useState } from 'react';
import { Question, QuestionCategory, questionCategoryInfo } from '../lib/types';

interface QuestionBankViewProps {
  questions: Question[];
  chapterName: string;
}

export default function QuestionBankView({ questions, chapterName }: QuestionBankViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'all'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  // Get unique categories from the questions
  const categories = Array.from(new Set(questions.map(q => q.category))) as QuestionCategory[];

  // Filter questions by selected category
  const filteredQuestions = selectedCategory === 'all'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  // Group questions by category for display
  const questionsByCategory = filteredQuestions.reduce((acc, q) => {
    if (!acc[q.category]) {
      acc[q.category] = [];
    }
    acc[q.category].push(q);
    return acc;
  }, {} as Record<QuestionCategory, Question[]>);

  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const getCategoryCount = (category: QuestionCategory) => {
    return questions.filter(q => q.category === category).length;
  };

  if (questions.length === 0) {
    return (
      <div className="bg-bg-secondary rounded-xl border border-border p-8 text-center">
        <div className="text-4xl mb-3">📚</div>
        <p className="text-text-secondary">No questions available for this chapter yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="bg-bg-secondary rounded-xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-text-secondary text-sm">Filter by:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-accent-blue text-white'
                : 'bg-bg-card text-text-secondary hover:text-text-primary'
            }`}
          >
            All ({questions.length})
          </button>
          {categories.map(cat => {
            const info = questionCategoryInfo[cat];
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? `bg-${info.color} text-white`
                    : 'bg-bg-card text-text-secondary hover:text-text-primary'
                }`}
              >
                {info.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions List by Category */}
      <div className="space-y-6">
        {Object.entries(questionsByCategory).map(([category, categoryQuestions]) => {
          const info = questionCategoryInfo[category as QuestionCategory];
          return (
            <div key={category} className="bg-bg-secondary rounded-xl border border-border overflow-hidden">
              {/* Category Header */}
              <div className={`px-4 py-3 bg-${info.color}/10 border-b border-border`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-semibold text-${info.color}`}>
                    {info.label} Questions
                  </h3>
                  <span className="text-sm text-text-secondary">
                    {categoryQuestions.length} questions
                  </span>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-border">
                {categoryQuestions.map((question, index) => (
                  <div
                    key={question.id}
                    className="p-4 hover:bg-bg-card/50 transition-colors"
                  >
                    <div className="flex gap-3">
                      <span className="text-text-secondary text-sm font-mono w-6 flex-shrink-0">
                        {index + 1}.
                      </span>
                      <div className="flex-1">
                        <p className="text-text-primary leading-relaxed">
                          {question.text}
                        </p>
                        {question.answer && (
                          <div className="mt-2">
                            <button
                              onClick={() => toggleQuestion(question.id)}
                              className="text-sm text-accent-blue hover:underline"
                            >
                              {expandedQuestions.has(question.id) ? 'Hide Answer' : 'Show Answer'}
                            </button>
                            {expandedQuestions.has(question.id) && (
                              <div className="mt-2 p-3 bg-bg-card rounded-lg text-text-secondary text-sm">
                                {question.answer}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="bg-bg-card rounded-xl border border-border p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">
            Showing {filteredQuestions.length} of {questions.length} questions
          </span>
          <div className="flex gap-4 text-text-secondary">
            {categories.slice(0, 4).map(cat => (
              <span key={cat}>
                {questionCategoryInfo[cat].label}: {getCategoryCount(cat)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
