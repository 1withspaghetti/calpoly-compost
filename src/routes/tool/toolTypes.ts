export enum SortLocation {
	COMPOST = 0,
	RECYCLING = 1,
	TRASH = 2
}

export interface Item {
	name: string;
	img: string;
	loc: SortLocation;
	note?: string;
}

export interface ToolGroup {
	name: string;
	img: string;
	items: Record<string, Item>;
}
