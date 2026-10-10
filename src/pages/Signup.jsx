import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Input, { Select } from '../components/Input';
import Badge from '../components/Badge';
import { User, Mail, Lock, Eye, EyeOff, Building, GraduationCap, BookOpen, Check, ArrowRight } from 'lucide-react';

/**
 * Signup Page Component for StudyFix AI (SFAI)
 * Includes dynamic fields for College Students (default) and School Students (Class 6-12)
 */
export const Signup = ({ onNavigateLogin, onNavigateHome, onSignupSuccess }) => {
  const [userType, setUserType] = useState('college'); // 'college' (default) | 'school'

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    institutionName: '',
    // College fields
    course: 'B.Tech',
    semester: 'Semester 1',
    selectedSubjects: ['Mathematics', 'Computer Science'],
    // School fields
    schoolClass: 'Class 10',
    board: 'CBSE',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Available subjects list for college student toggle
  const availableCollegeSubjects = [
    'Mathematics',
    'Physics',
    'Computer Science',
    'Data Structures',
    'Chemistry',
    'Electronics',
    'Engineering Drawing',
    'Algorithms',
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const toggleSubject = (subject) => {
    setFormData((prev) => {
      const exists = prev.selectedSubjects.includes(subject);
      const updated = exists
        ? prev.selectedSubjects.filter((s) => s !== subject)
        : [...prev.selectedSubjects, subject];
      return { ...prev, selectedSubjects: updated };
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.institutionName.trim()) {
      newErrors.institutionName =
        userType === 'college' ? 'College Name is required' : 'School Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userPayload = { ...formData, userType };
      if (onSignupSuccess) {
        onSignupSuccess(userPayload);
      } else {
        alert(`Account created successfully for ${formData.fullName} (${userType.toUpperCase()})!`);
      }
    }, 800);
  };

  return (
    <AuthLayout
      title="Create your SFAI Account"
      subtitle="Start turning mistakes into mastery with your personalized AI tutor"
      onNavigateHome={onNavigateHome}
    >
      <Card className="shadow-soft-lg border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* User Type Selector (College Student by default) */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700">
              I am a: <span className="text-wrong">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 bg-subtle p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setUserType('college')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  userType === 'college'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-dark'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>College Student</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('school')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  userType === 'school'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-dark'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>School Student (6–12)</span>
              </button>
            </div>
          </div>

          {/* Full Name */}
          <Input
            label="Full Name"
            id="fullName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            leftIcon={User}
            isRequired
          />

          {/* Email */}
          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="student@college.edu or name@gmail.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            leftIcon={Mail}
            isRequired
          />

          {/* Password */}
          <Input
            label="Password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Min. 6 characters"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            leftIcon={Lock}
            rightIcon={showPassword ? EyeOff : Eye}
            onRightIconClick={() => setShowPassword(!showPassword)}
            isRequired
          />

          {/* College or School Name */}
          <Input
            label={userType === 'college' ? 'College / University Name' : 'School Name'}
            id="institutionName"
            type="text"
            placeholder={userType === 'college' ? 'e.g. IIT Delhi / DTU / Anna Univ' : 'e.g. DPS R.K. Puram / St. Xavier'}
            value={formData.institutionName}
            onChange={handleChange}
            error={errors.institutionName}
            leftIcon={Building}
            isRequired
          />

          {/* Conditional Fields: College Student */}
          {userType === 'college' ? (
            <div className="space-y-3 pt-1 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-3">
                
                {/* Course Selection */}
                <Select
                  label="Course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  options={[
                    { value: 'B.Tech', label: 'B.Tech / B.E.' },
                    { value: 'BCA', label: 'BCA' },
                    { value: 'B.Sc', label: 'B.Sc' },
                    { value: 'B.Com', label: 'B.Com' },
                    { value: 'Diploma', label: 'Diploma' },
                    { value: 'Other', label: 'Other Degree' },
                  ]}
                  isRequired
                />

                {/* Semester Selection (1 to 8) */}
                <Select
                  label="Semester"
                  id="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  options={[
                    { value: 'Semester 1', label: 'Semester 1' },
                    { value: 'Semester 2', label: 'Semester 2' },
                    { value: 'Semester 3', label: 'Semester 3' },
                    { value: 'Semester 4', label: 'Semester 4' },
                    { value: 'Semester 5', label: 'Semester 5' },
                    { value: 'Semester 6', label: 'Semester 6' },
                    { value: 'Semester 7', label: 'Semester 7' },
                    { value: 'Semester 8', label: 'Semester 8' },
                  ]}
                  isRequired
                />
              </div>

              {/* Subjects Toggle Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Active Subjects for AI Tracking:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {availableCollegeSubjects.map((sub) => {
                    const isSelected = formData.selectedSubjects.includes(sub);
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => toggleSubject(sub)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all flex items-center gap-1 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-primary text-primary font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-primary" />}
                        <span>{sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Conditional Fields: School Student */
            <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100">
              
              {/* Class Selection (6 to 12) */}
              <Select
                label="Class"
                id="schoolClass"
                value={formData.schoolClass}
                onChange={handleChange}
                options={[
                  { value: 'Class 6', label: 'Class 6' },
                  { value: 'Class 7', label: 'Class 7' },
                  { value: 'Class 8', label: 'Class 8' },
                  { value: 'Class 9', label: 'Class 9' },
                  { value: 'Class 10', label: 'Class 10' },
                  { value: 'Class 11', label: 'Class 11' },
                  { value: 'Class 12', label: 'Class 12' },
                ]}
                isRequired
              />

              {/* Board Selection */}
              <Select
                label="Education Board"
                id="board"
                value={formData.board}
                onChange={handleChange}
                options={[
                  { value: 'CBSE', label: 'CBSE' },
                  { value: 'ICSE', label: 'ICSE' },
                  { value: 'State Board', label: 'State Board' },
                  { value: 'Other', label: 'Other Board' },
                ]}
                isRequired
              />
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full font-bold mt-3"
            isLoading={isLoading}
            rightIcon={ArrowRight}
          >
            Create SFAI Account
          </Button>

          {/* Link to Login */}
          <div className="text-center pt-2 text-xs text-slate-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onNavigateLogin}
              className="font-bold text-primary hover:underline cursor-pointer"
            >
              Log in here
            </button>
          </div>

        </form>
      </Card>
    </AuthLayout>
  );
};

export default Signup;
