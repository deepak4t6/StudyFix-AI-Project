import React from 'react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';
import { Target, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';

/**
 * Weak Topic Card Component for StudyFix AI
 */
export const WeakTopicCard = ({ topicData, onFixConcept }) => {
  const { subject, topic, accuracy, mistakesCount, lastMistake, severity } = topicData;

  const severityBadgeMap = {
    high: { variant: 'wrong', text: 'High Priority' },
    medium: { variant: 'weak', text: 'Medium Priority' },
    low: { variant: 'primary', text: 'Low Priority' },
  };

  return (
    <Card variant="weak" isHoverable className="space-y-3 border-amber-200 bg-amber-50/30">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-dark text-xs sm:text-sm">{topic}</h4>
            <p className="text-[11px] text-slate-500">{subject}</p>
          </div>
        </div>
        <Badge variant={severityBadgeMap[severity]?.variant || 'weak'} size="sm">
          {severityBadgeMap[severity]?.text || 'Weak Concept'}
        </Badge>
      </div>

      {/* Mistake Detail */}
      <div className="bg-white p-2.5 rounded-xl border border-amber-200/80 text-xs text-slate-700 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-wrong shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-wrong">Last Mistake: </span>
          <span>{lastMistake}</span>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="flex items-center justify-between text-xs pt-1">
        <span className="text-slate-500 font-medium">
          Mistakes logged: <strong className="text-dark">{mistakesCount} times</strong>
        </span>
        <span className="font-bold text-wrong bg-red-50 text-red-700 px-2 py-0.5 rounded-md border border-red-200">
          {accuracy}% Accuracy
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-1">
        <Button variant="outline" size="sm" className="text-xs" leftIcon={RefreshCw}>
          Review Concept
        </Button>
        <Button 
          variant="weak" 
          size="sm" 
          className="text-xs font-bold" 
          rightIcon={ArrowRight}
          onClick={onFixConcept}
        >
          Fix Concept Now
        </Button>
      </div>
    </Card>
  );
};

export default WeakTopicCard;
