import { Books } from "@/interfaces/BookSlice.interface";
import { create } from 'zustand';

interface UserState {
  name: string | null;
  email: string | null;
  recommendations: Books[];
  favorites: Books[];
}

export const useUserStore = create<UserState>((set) => ({
  name: null,
  email: null,
  recommendations: [],
  favorites: [],
}));
