export type TItem = {
	id: number;
	arrow: boolean;
	title: string;
	svg: any;
	subItems?: TSubItem[] | false;
};

export type TSubItem = {
	id: number;
	title: string;
	arrow: boolean;
	content?: string[];
};
