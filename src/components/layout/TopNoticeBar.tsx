import React, { useState, useEffect } from 'react';
import { Bell, ChevronRight, Volume2 } from 'lucide-react';
import { db } from '../../services/db';
import { Announcement } from '../../types';
import { useRouter } from '../../context/RouterContext';

export const TopNoticeBar: React.FC = () => {
  const { navigate } = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const list = db.getAnnouncements().filter((a) => a.isLive);
    setAnnouncements(list);
  }, []);

  useEffect(() => {
    if (announcements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [announcements.length]);

  if (announcements.length === 0) return null;

  const current = announcements[currentIndex];

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 text-white text-xs sm:text-sm py-2 px-3 sm:px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="bg-black/20 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ताजा अपडेट</span>
            <span className="sm:hidden">UPDATE</span>
          </span>
        </div>

        <div className="flex-1 overflow-hidden">
          <button
            onClick={() => navigate(current.linkUrl)}
            className="w-full text-left truncate text-white hover:text-amber-100 font-medium transition flex items-center gap-1.5"
            title={current.textHi || current.text}
          >
            <span className="truncate">{current.textHi || current.text}</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
          </button>
        </div>

        {announcements.length > 1 && (
          <div className="hidden md:flex items-center gap-1 shrink-0 text-[11px] text-amber-200">
            <span>{currentIndex + 1} / {announcements.length}</span>
          </div>
        )}
      </div>
    </div>
  );
};
