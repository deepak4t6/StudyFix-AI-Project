import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

/**
 * Login Page Component for StudyFix AI (SFAI)
 */
export const Login = ({ onNavigateSignup, onNavigateHome, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess(formData);
      } else {
        alert(`Welcome back to StudyFix AI! Logged in as ${formData.email}`);
      }
    }, 800);
  };

  return (
    <AuthLayout
      title="Welcome back to SFAI"
      subtitle="Enter your credentials to access your personalized AI tutor dashboard"
      onNavigateHome={onNavigateHome}
    >
      <Card className="shadow-soft-lg border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
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

          {/* Password Input */}
          <div className="space-y-1">
            <Input
              label="Password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              leftIcon={Lock}
              rightIcon={showPassword ? EyeOff : Eye}
              onRightIconClick={() => setShowPassword(!showPassword)}
              isRequired
            />
            
            <div className="flex justify-end pt-1">
              <a
                href="#forgot-password"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset link feature ready. Check your email inbox!');
                }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Login Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full font-bold mt-2"
            isLoading={isLoading}
            rightIcon={ArrowRight}
          >
            Log In to StudyFix AI
          </Button>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs text-slate-400 font-medium absolute">
              OR
            </span>
          </div>

          {/* Google Login Placeholder Button */}
          <button
            type="button"
            onClick={() => alert('Google Sign-In integration ready!')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-dark text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Link to Signup */}
          <div className="text-center pt-2 text-xs text-slate-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onNavigateSignup}
              className="font-bold text-primary hover:underline cursor-pointer"
            >
              Create free SFAI account
            </button>
          </div>

        </form>
      </Card>
    </AuthLayout>
  );
};

export default Login;
