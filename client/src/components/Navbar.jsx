import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LotusEmblem } from './IndianMotifs';

export default function Navbar({ onOurApproachClick, onHomeClick, activeNav }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Our Approach', to: '/#approach' },
    { label: 'YogaAI', to: '/yoga-ai' },
    { label: 'Ayurveda', to: '/knowledge' },
  ];

  const handleNavClick = (e, link) => {
    if (link.label === 'Home') {
      if (onHomeClick) {
        e.preventDefault();
        onHomeClick();
      }
    } else if (link.label === 'Our Approach') {
      if (onOurApproachClick) {
        e.preventDefault();
        onOurApproachClick();
      } else if (location.pathname !== '/') {
        // Navigating from another route to homepage approach
        navigate('/#approach');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F6EF]/90 backdrop-blur-md border-b border-[#E4E9E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (onHomeClick) {
              e.preventDefault();
              onHomeClick();
            }
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#173F35] flex items-center justify-center text-[#F8F6EF] group-hover:bg-[#102E28] transition-colors shadow-sm border border-[#C6A56B]/30">
            <LotusEmblem className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-[#173F35] leading-none">
                HITAYU
              </span>
              <span className="text-xs font-medium text-[#C6A56B]">हितायुः</span>
            </div>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#78847C] font-medium block mt-0.5">
              Vedic Wisdom • AI
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeNav ? activeNav === link.label : (location.pathname === link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#173F35] font-semibold'
                    : 'text-[#26352F]/80 hover:text-[#173F35]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E8F0E9] text-[#173F35] text-sm font-medium hover:bg-[#d8e6da] transition-colors"
              >
                <User className="w-4 h-4" />
                <span>{user?.name?.split(' ')[0] || 'Dashboard'}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl text-[#78847C] hover:text-[#C85D55] hover:bg-[#FDF2F2] transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-[#173F35] hover:text-[#244F42] px-3 py-2"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="hitayu-btn-primary py-2.5 px-5 text-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-[#173F35] hover:bg-[#E8F0E9]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F8F6EF] border-b border-[#E4E9E2] px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeNav ? activeNav === link.label : (location.pathname === link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setMobileOpen(false);
                }}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#173F35] font-semibold'
                    : 'text-[#26352F] hover:text-[#173F35]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E4E9E2] flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="hitayu-btn-primary w-full justify-center"
                >
                  Open Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="hitayu-btn-secondary w-full justify-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="hitayu-btn-secondary w-full justify-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="hitayu-btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
