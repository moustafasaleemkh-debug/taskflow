import { useState } from 'react';
import { useTeam } from '../hooks/useTeam';
import { InviteModal } from '../components/InviteModal';

export function TeamMembers() {
  const { members, inviteMember, removeMember } = useTeam();
  const [showInvite, setShowInvite] = useState(false);

  return (
    <div className="team-page">
      <header>
        <h1>Team Members</h1>
        <button onClick={() => setShowInvite(true)}>Invite Member</button>
      </header>
      <ul className="member-list">
        {members.map(member => (
          <li key={member.id} className="member-card">
            <img src={member.avatarUrl} alt={member.name} />
            <div>
              <strong>{member.name}</strong>
              <span className="role-badge">{member.role}</span>
            </div>
            {member.role !== 'owner' && (
              <button onClick={() => removeMember(member.id)}>Remove</button>
            )}
          </li>
        ))}
      </ul>
      {showInvite && (
        <InviteModal
          onInvite={(email, role) => { inviteMember(email, role); setShowInvite(false); }}
          onClose={() => setShowInvite(false)}
        />
      )}
    </div>
  );
}
