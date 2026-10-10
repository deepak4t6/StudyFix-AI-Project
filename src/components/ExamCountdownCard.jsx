import React from 'react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Exam Countdown Card Component for StudyFix AI
 */
export const ExamCountdownCard = ({ examData }) => {
  const { title, subject, date, daysLeft, priority } = examData;

  const isUrgent = daysLeft <= 3;

  return (
    <Card 
      variant={isUrgent ? 'wrong' : 'default'} 
      className={`space-y-3 ${isUrgent ? 'border-red-200 bg-red-50/30' : ''}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className={`p-2.5 rounded-xl ${isUrgent ? 'bg-wrong text-white' : 'bg-primary-light text-primary'}`}>
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-dark text-xs sm:text-sm">{title}</h4>
            <p className="text-[11px] text-slate-500">Subject: {subject} • {date}</p>
          </div>
        </div>

        <Badge variant={isUrgent ? 'wrong' : 'primary'} size="sm" showDot>
          {daysLeft === 1 ? 'Tomorrow!' : `${daysLeft} Days Left`}
        </Badge>
      </div>

      <div className="flex items-center justify-between pt-1 text-xs">
        <span className="text-slate-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Recommended 30m revision today</span>
        </span>
        <Button variant={isUrgent ? 'wrong' : 'primary'} size="sm" className="text-xs" rightIcon={Sparkles}>
          Generate Exam Plan
        </Button>
      </div>
    </Card>
  );
};

export default ExamCountdownCard;
