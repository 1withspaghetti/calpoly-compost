import type { Picture } from "@sveltejs/enhanced-img";

export enum SortLocation {
    COMPOST = 0,
    RECYCLING = 1,
    TRASH = 2,
}

export interface Item {
    name: string;
    img: Picture;
    loc: SortLocation,
    note?: string
}

export interface ToolGroup {
    name: string;
    img: Picture;
    items: Record<string, Item>
}

