import React from 'react';
import { BrainCircuit, Heart, Shield, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import Badge from './Badge';

/**
 * Responsive Footer component for StudyFix AI (SFAI)
 */
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-dark">StudyFix AI</span>
              <Badge variant="primary" size="sm">SFAI</Badge>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              "Har galati se seekho. Weak topics fix karo."
            </p>
            <p className="text-xs text-slate-400">
              Personalized AI study assistant designed to transform mistakes into mastery.
            </p>
          </div>

          {/* Targeted Learners */}
          <div>
            <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Target Learners</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-600">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span><strong>College Students</strong> (Engineering, Science, Business)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <BookOpen className="w-4 h-4 text-primary shrink-0" />
                <span><strong>School Students</strong> (Class 6–12 CBSE/ICSE/State)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-correct shrink-0" />
                <span>Targeted Mistake Analysis</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard Overview</a></li>
              <li><a href="#weak-topics" className="hover:text-primary transition-colors">Weak Topic Analyzer</a></li>
              <li><a href="#practice" className="hover:text-primary transition-colors">Adaptive Quiz Engine</a></li>
              <li><a href="#analytics" className="hover:text-primary transition-colors">Learning Progress</a></li>
            </ul>
          </div>

          {/* Design System & Tech */}
          <div>
            <h4 className="font-semibold text-dark mb-3 text-xs tracking-wider uppercase">Design System</h4>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <Badge variant="primary" size="sm">#2563EB Primary</Badge>
              <Badge variant="correct" size="sm">Correct #16A34A</Badge>
              <Badge variant="wrong" size="sm">Wrong #DC2626</Badge>
              <Badge variant="weak" size="sm">Weak #F59E0B</Badge>
            </div>
            <p className="text-[11px] text-slate-400">
              Built with React, Vite & Tailwind CSS. Rounded-2xl design, soft shadows, clean spacing.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} StudyFix AI (SFAI). All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made for college & school students with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
