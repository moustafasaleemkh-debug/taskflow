import { useState } from 'react';

interface ProfileFormProps {
  user: { email: string; name: string } | null;
}

export function ProfileForm({ user }: ProfileFormProps) {
  const [name, setName] = useState(user?.name ?? '');
  const [avatar, setAvatar] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: persist to backend
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="profile-form">
      <div className="avatar-upload">
        <img src={avatar || '/default-avatar.png'} alt="Avatar" />
        <input type="file" accept="image/*" onChange={e => {
          const file = e.target.files?.[0];
          if (file) setAvatar(URL.createObjectURL(file));
        }} />
      </div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Display name" />
      <p className="email-display">{user?.email}</p>
      <button onClick={handleSave}>Save Profile</button>
      {saved && <span className="saved-badge">Saved!</span>}
    </div>
  );
}
