import { create } from 'zustand';

interface ModalState {
  isView: boolean;
  toggleModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isView: false,
  toggleModal: () =>
    set(({ isView }) => ({
      isView: !isView,
    })),
}));
