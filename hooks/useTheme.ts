import { create } from 'zustand';

interface IThemeState {
	theme: 'dark' | 'light';
	changeTheme: () => void;
}

const useTheme = create<IThemeState>((set) => ({
	theme: (localStorage.getItem('theme') as 'dark' | 'light') || 'dark',
	changeTheme: () =>
		set((state) => {
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return { theme: newTheme };
		}),
}));

export default useTheme;
