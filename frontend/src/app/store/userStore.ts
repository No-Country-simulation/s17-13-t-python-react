import { Books } from '@/interfaces/BookSlice.interface';
import { create } from 'zustand';

interface UserState {
  name: string | null;
  email: string | null;
  recommendations: Books[];
  favorites: Books[];
  isLogged: boolean;
  role: UserRoleType;
  setBasicInfo: (info: BasicInfoUserType) => void;
}

type UserRoleType = 'admin' | 'user' | 'visitor';
type BasicInfoUserType = Pick<UserState, 'email' | 'name' | 'isLogged' | 'role'>;

export const useUserStore = create<UserState>((set) => ({
  name: null,
  email: null,
  recommendations: [],
  favorites: [],
  isLogged: false,
  role: 'visitor',
  setBasicInfo: ({ email, isLogged, name, role }) =>
    set((state) => ({
      ...state,
      email,
      isLogged,
      name,
      role,
    })),
}));
