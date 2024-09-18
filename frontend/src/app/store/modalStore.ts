import { create } from 'zustand';

interface ModalState {
  isView: boolean;
  toggleModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isView: true,
  toggleModal: () =>
    set(({ isView }) => ({
      isView: !isView,
    })),
}));
