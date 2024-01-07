import { create } from 'zustand';

interface IScrollBarCollapse {
	isOpen: boolean;
	toggleScrollBarCollapse: () => void;
}

const useScrollBarCollapse = create<IScrollBarCollapse>((set) => ({
	isOpen: true,
	toggleScrollBarCollapse: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useScrollBarCollapse;
