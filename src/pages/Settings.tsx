import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProfileForm } from '../components/ProfileForm';

export function Settings() {
  const { user } = useAuth();

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <section>
        <h2>Profile</h2>
        <ProfileForm user={user} />
      </section>
      <section>
        <h2>Notifications</h2>
        <NotificationPreferences />
      </section>
    </div>
  );
}

function NotificationPreferences() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  return (
    <div className="notification-prefs">
      <label>
        <input type="checkbox" checked={emailNotifs} onChange={e => setEmailNotifs(e.target.checked)} />
        Email notifications
      </label>
      <label>
        <input type="checkbox" checked={pushNotifs} onChange={e => setPushNotifs(e.target.checked)} />
        Push notifications
      </label>
    </div>
  );
}
