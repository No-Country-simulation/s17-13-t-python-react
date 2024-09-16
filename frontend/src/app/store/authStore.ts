import { create } from 'zustand';

type UserRoleType = 'admin' | 'user' | 'visitor';

interface AuthState {
  isLogged: boolean;
  role: UserRoleType;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogged: false,
  role: 'visitor',
}));
