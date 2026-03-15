import { useState } from 'react';

interface User {
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    setUser({ email, name: email.split('@')[0] });
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
