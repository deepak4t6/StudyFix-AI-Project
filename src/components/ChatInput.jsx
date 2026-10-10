import React, { useState, useRef } from 'react';
import { Send, Paperclip, Image as ImageIcon, Sparkles, X, FileText } from 'lucide-react';

/**
 * Chat Input Component for StudyFix AI Tutor
 * Includes attachment upload preview, send button, and quick suggestion chips
 */
export const ChatInput = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const quickPrompts = [
    'Process scheduling samajh nahi aata',
    'Explain 3NF Normalization in simple terms',
    'Give me a practice question on ILATE rule',
    'Solve Time & Work shortcut method',
  ];

  const handleSend = (e) => {
    e?.preventDefault();
    if ((!text.trim() && !attachment) || isLoading) return;

    onSendMessage({
      text: text.trim(),
      attachment,
    });

    setText('');
    setAttachment(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment({
        name: file.name,
        type: file.type.includes('pdf') ? 'pdf' : 'image',
        size: `${(file.size / 1024).toFixed(1)} KB`,
      });
    }
  };

  return (
    <div className="space-y-2.5">
      {/* Quick Suggestion Prompt Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-primary" /> Quick doubts:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => {
              setText(prompt);
            }}
            className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Attachment Badge Preview */}
      {attachment && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-primary font-semibold">
          <FileText className="w-4 h-4" />
          <span>{attachment.name} ({attachment.size})</span>
          <button onClick={() => setAttachment(null)} className="p-0.5 hover:bg-blue-100 rounded-md">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Input Textarea Bar */}
      <form onSubmit={handleSend} className="relative flex items-center bg-white rounded-2xl border border-slate-200 shadow-soft focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all p-1.5">
        
        {/* Attachment Button */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,.pdf"
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Upload image or PDF"
          className="p-2.5 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Text Input */}
        <textarea
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Apna doubt, assignment question ya topic likho…"
          className="w-full text-xs sm:text-sm px-3 py-2 text-dark placeholder:text-slate-400 bg-transparent focus:outline-none resize-none max-h-24"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={(!text.trim() && !attachment) || isLoading}
          className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-200 shrink-0 cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>

      </form>

      <p className="text-[11px] text-slate-400 text-center">
        StudyFix AI friendly tutor • Hints & step-by-step logic before direct answer
      </p>
    </div>
  );
};

export default ChatInput;
