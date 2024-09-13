import { create } from 'zustand';

interface AuthorState {
  name: string | null;
  biography: string | null;
  img: string | null;
  setBasicInfo: (info: BasicInfoAuthorType) => void; 
}

type BasicInfoAuthorType = Pick<AuthorState, 'name' | 'biography' | 'img'>; 

export const useAuthorStore = create<AuthorState>((set) => ({
  name: null,
  biography: null,
  img: null,
  
  setBasicInfo: ({ name, biography, img }: BasicInfoAuthorType) => 
    set((state) => ({
      ...state, 
      name, 
      biography, 
      img
    })),
}));
