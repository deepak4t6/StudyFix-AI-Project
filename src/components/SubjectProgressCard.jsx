import React from 'react';
import Card from './Card';
import ProgressBar from './ProgressBar';
import Badge from './Badge';
import Button from './Button';
import { BookOpen, ArrowRight } from 'lucide-react';

/**
 * Subject Progress Card Component for StudyFix AI
 */
export const SubjectProgressCard = ({ subjectData }) => {
  const { subject, code, progress, accuracy, status, nextTopic } = subjectData;

  const statusVariantMap = {
    'on-track': 'correct',
    'needs-focus': 'weak',
    'weak': 'wrong',
  };

  const statusLabelMap = {
    'on-track': 'On Track',
    'needs-focus': 'Needs Focus',
    'weak': 'Weak Accuracy',
  };

  return (
    <Card isHoverable className="space-y-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-dark text-sm sm:text-base leading-snug">{subject}</h4>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Subject Code: {code}</p>
        </div>
        <Badge variant={statusVariantMap[status] || 'primary'} size="sm">
          {statusLabelMap[status] || 'Active'}
        </Badge>
      </div>

      <div className="space-y-2">
        <ProgressBar
          value={progress}
          variant={progress > 65 ? 'correct' : progress > 50 ? 'weak' : 'wrong'}
          size="md"
          showLabel
          label="Syllabus Completion"
        />
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-1.5 text-slate-600">
          <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate max-w-[170px] sm:max-w-[220px]">
            <strong>Next:</strong> {nextTopic}
          </span>
        </div>
        <span className="font-bold text-dark">
          {accuracy}% <span className="text-slate-400 font-normal">acc.</span>
        </span>
      </div>

      <div className="pt-1">
        <Button variant="outline" size="sm" className="w-full text-xs" rightIcon={ArrowRight}>
          Continue Practice
        </Button>
      </div>
    </Card>
  );
};

export default SubjectProgressCard;
