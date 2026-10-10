import React from 'react';
import { BrainCircuit, User, Sparkles, CheckCircle2, Copy } from 'lucide-react';
import Badge from './Badge';

/**
 * Chat Bubble Component for StudyFix AI Tutor
 * Formats student vs SFAI tutor messages in friendly Hinglish step-by-step style
 */
export const ChatBubble = ({ message, onPracticeClick }) => {
  const isAi = message.sender === 'ai';

  return (
    <div className={`flex gap-3 my-4 animate-fade-in ${isAi ? 'justify-start' : 'justify-end'}`}>
      
      {/* AI Avatar */}
      {isAi && (
        <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-200 mt-1">
          <BrainCircuit className="w-4 h-4" />
        </div>
      )}

      {/* Bubble Container */}
      <div className={`max-w-xl space-y-2 ${isAi ? 'items-start' : 'items-end'}`}>
        
        {/* Header Sender Info */}
        <div className={`flex items-center gap-2 text-[11px] text-slate-400 font-medium ${isAi ? '' : 'justify-end'}`}>
          <span>{isAi ? 'StudyFix AI Tutor' : 'Rahul (You)'}</span>
          <span>•</span>
          <span>{message.timestamp || 'Just now'}</span>
          {isAi && (
            <Badge variant="primary" size="sm" className="py-0 px-1.5 text-[10px]">
              AI Step-by-Step
            </Badge>
          )}
        </div>

        {/* Message Box */}
        <div
          className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
            isAi
              ? 'bg-white border border-slate-200/80 text-dark rounded-tl-xs'
              : 'bg-primary text-white rounded-tr-xs shadow-sm shadow-blue-200'
          }`}
        >
          {/* Main Content */}
          <div className="whitespace-pre-line space-y-2">
            {message.text}
          </div>

          {/* Attachment Preview if any */}
          {message.attachment && (
            <div className="mt-3 p-2.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs flex items-center gap-2 text-slate-700">
              <span className="font-bold">📎 Attachment:</span>
              <span className="truncate">{message.attachment.name}</span>
            </div>
          )}

          {/* SFAI Practice Box inside AI Response */}
          {isAi && message.practiceQuestion && (
            <div className="mt-4 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2 text-slate-800">
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Try This Practice Question:
                </span>
                <Badge variant="weak" size="sm">Concept Test</Badge>
              </div>

              <p className="text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-blue-100">
                {message.practiceQuestion}
              </p>

              <button
                onClick={() => onPracticeClick && onPracticeClick(message.practiceQuestion)}
                className="w-full mt-1 py-1.5 px-3 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Answer Practice Question</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Student Avatar */}
      {!isAi && (
        <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0 mt-1">
          RS
        </div>
      )}

    </div>
  );
};

export default ChatBubble;
