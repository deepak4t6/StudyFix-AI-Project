import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, Image as ImageIcon, Sparkles, CheckCircle2, FileCode } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

/**
 * Large, Mobile-Friendly Drag and Drop Upload Card for Notes, PDFs, and Slides
 */
export const FileUploadCard = ({ onFileSelected }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file) => {
    onFileSelected({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      type: file.type.includes('pdf') ? 'PDF Document' : 'Document / Image',
    });
  };

  const handleUseSample = () => {
    onFileSelected({
      name: 'Operating_Systems_Unit3_CPU_Scheduling.pdf',
      size: '2.4 MB',
      type: 'PDF Document',
    });
  };

  return (
    <div className="w-full space-y-4">
      
      {/* Main Drag-and-Drop Container */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-4 ${
          isDragOver
            ? 'border-primary bg-blue-50/80 shadow-soft-lg scale-[1.01]'
            : 'border-slate-300 bg-white hover:border-primary hover:bg-slate-50/60 shadow-soft'
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.ppt,.pptx,.doc,.docx,image/*"
          className="hidden"
        />

        {/* Upload Icon */}
        <div className="w-16 h-16 rounded-3xl bg-primary-light text-primary flex items-center justify-center shadow-md shadow-blue-100">
          <UploadCloud className="w-8 h-8" />
        </div>

        {/* Title & Instructions */}
        <div className="space-y-1.5 max-w-md">
          <h3 className="text-base sm:text-lg font-bold text-dark">
            Upload PDF, Notes, Slides, or Images
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Drag & drop your study material here, or <span className="text-primary font-semibold underline">browse files</span> from your device.
          </p>
        </div>

        {/* Supported Format Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          <Badge variant="primary" size="sm">PDF</Badge>
          <Badge variant="neutral" size="sm">PPTX Slides</Badge>
          <Badge variant="neutral" size="sm">Handwritten Notes</Badge>
          <Badge variant="neutral" size="sm">Assignment JPG/PNG</Badge>
        </div>
      </div>

      {/* Instant Demo Sample Button */}
      <div className="flex items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 font-medium">Want to test instantly?</span>
        <button
          type="button"
          onClick={handleUseSample}
          className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Load sample PDF: Operating_Systems_Unit3.pdf</span>
        </button>
      </div>

    </div>
  );
};

export default FileUploadCard;
