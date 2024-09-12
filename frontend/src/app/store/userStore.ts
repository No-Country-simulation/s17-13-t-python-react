import { console } from 'inspector';
import { Books } from '@/interfaces/BookSlice.interface';
import { create } from 'zustand';

interface UserState {
  id:string | null;
  name: string | null;
  email: string | null;
  recommendations: Books[];
  favorites: Books[];
  isLogged: boolean;
  role: UserRoleType;
  setBasicInfo: (info: BasicInfoUserType) => void;
}

type UserRoleType = 'admin' | 'user' | 'visitor';
type BasicInfoUserType = Pick<UserState,'id'| 'email' | 'name' | 'isLogged' | 'role'>;

export const useUserStore = create<UserState>((set) => ({
  id:null,
  name: null,
  email: null,
  recommendations: [],
  favorites: [],
  isLogged: false,
  role: 'visitor',
  setBasicInfo: ({id, email, isLogged, name, role }) =>
    set((state) => ({
      ...state,
      id,
      email,
      isLogged,
      name,
      role,
    })),
  
}));
