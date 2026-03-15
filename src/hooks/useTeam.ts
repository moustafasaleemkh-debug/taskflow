import { useState } from 'react';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  avatarUrl: string;
  joinedAt: Date;
}

export function useTeam() {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'You',
      email: 'you@example.com',
      role: 'owner',
      avatarUrl: '/default-avatar.png',
      joinedAt: new Date(),
    },
  ]);

  const inviteMember = (email: string, role: 'admin' | 'member') => {
    setMembers(prev => [...prev, {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      role,
      avatarUrl: '/default-avatar.png',
      joinedAt: new Date(),
    }]);
  };

  const removeMember = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  return { members, inviteMember, removeMember };
}
