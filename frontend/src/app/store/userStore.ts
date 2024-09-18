import { Books } from '@/interfaces/BookSlice.interface';
import { create } from 'zustand';

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  city: string | null;
  img: string | null;
  recommendations: Books[];
  favorites: Books[];
  isLogged: boolean;
  role: UserRoleType;
  setBasicInfo: (info: Partial<BasicInfoUserType>) => void;
}

export type UserRoleType = 'admin' | 'user' | 'visitor';
export type BasicInfoUserType = Pick<
  UserState,
  'id' | 'email' | 'name' | 'isLogged' | 'role' | 'city' | 'img'
>;

export type LoginUserResponse = Pick<UserState, 'id' | 'name' | 'email'> & {
  preferences: boolean;
};

export const useUserStore = create<UserState>((set) => ({
  id: null,
  name: null,
  email: null,
  city: null,
  img: null,
  recommendations: [],
  favorites: [],
  isLogged: false,
  role: 'visitor',
  setBasicInfo: (info) =>
    set((state) => ({
      ...state,
      ...Object.fromEntries(
        Object.entries(info).filter(([_, value]) => value !== undefined)
      )
    })),
}));
