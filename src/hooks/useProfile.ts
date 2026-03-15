import { useState, useEffect } from 'react';

interface Profile {
  name: string;
  avatarUrl: string;
  bio: string;
  timezone: string;
}

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    // Simulated API call
    setTimeout(() => {
      setProfile({ name: '', avatarUrl: '', bio: '', timezone: 'UTC' });
      setLoading(false);
    }, 500);
  }, [userId]);

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile(prev => prev ? { ...prev, ...updates } : null);
  };

  return { profile, loading, updateProfile };
}
