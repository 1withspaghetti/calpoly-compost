import { SortLocation, type ToolGroup } from './toolTypes';
import type { Picture } from '@sveltejs/enhanced-img';

export const imageModules = import.meta.glob(
	'$lib/assets/imgs/tool/**/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
	{
		eager: true,
		query: {
			enhanced: true,
			w: "256",
		}
	}
) as Record<string, { default: Picture }>

export const images = Object.fromEntries(Object.entries(imageModules).map(([k, v]) => [k.replace(/^.*\/tool\//, ""), v.default]));

// Groups

export const generic: ToolGroup = {
	name: 'Generic',
	img: "generic/thumbnail.png",
	items: {
		woodenUtensils: {
			name: 'Wooden Utensils',
			img: "generic/wooden_utensils.png",
			loc: SortLocation.COMPOST
		},
		plasticUtensils: {
			name: 'Plastic Utensils',
			img: "generic/plastic_utensils.png",
			loc: SortLocation.TRASH
		},
		plasticStraw: {
			name: 'Plastic Straw',
			img: "generic/plastic_straw.png",
			loc: SortLocation.TRASH
		},
		plasticLid: {
			name: 'Plastic Lid',
			img: "generic/plastic_lid.png",
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first!"
		},
		plasticCup: {
			name: 'Plastic Cup',
			img: "generic/plastic_cup.png",
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first! Keep lids attached."
		},
		paperCup: {
			name: 'Paper Cup',
			img: "generic/paper_cup.png",
			loc: SortLocation.TRASH,
			note: "Only commercially composable if labeled so, meaning it doesn't have an inner lining"
		},
		paperNapkin: {
			name: 'Paper Napkin',
			img: "generic/paper_napkin.png",
			loc: SortLocation.COMPOST
		},
		foodScraps: {
			name: 'Food Scraps',
			img: "generic/food_scraps.png",
			loc: SortLocation.COMPOST
		},
		supposedlyCompostablePlastics: {
			name: '"Compostable" plastics',
			img: "generic/supposedly_compostable_plastics.png",
			loc: SortLocation.TRASH,
			note: 'Unfortunately, these cannot be properly handed at the time'
		},
		paperContainer: {
			name: 'Paper Container',
			img: "generic/paper_container.webp",
			loc: SortLocation.COMPOST,
			note: 'Only compostable if they DO NOT have an inner lining protecting the food. All containers from Vista Grande are safe.'
		},
		fakePaperContainer: {
			name: 'Paper Container With Lining',
			img: "generic/fake_paper_container.png",
			loc: SortLocation.TRASH,
			note: 'Some paper containers have an inner lining, which prevents them from being composted or recycled'
		},
		plasticContainer: {
			name: 'Plastic Container',
			img: "generic/plastic_container.png",
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first! Keep lids attached."
		}
	}
};

export const chicFilA: ToolGroup = {
	name: 'Chick-fil-A',
	img: "chick_fil_a/thumbnail.jpg",
	items: {
		bag: {
			name: 'Paper Bag',
			img: "chick_fil_a/bag.png",
			loc: SortLocation.RECYCLING
		},
		smallBag: {
			name: 'Small Bag',
			img: "chick_fil_a/small_bag.png",
			loc: SortLocation.TRASH,
			note: 'The aluminum lining inside prevents it from being properly handled'
		},
		burgerContainer: {
			name: 'Burger, Nugget, and Fry containers',
			img: "chick_fil_a/burger_fly_container.png",
			loc: SortLocation.COMPOST,
			note: "As long as they aren't heavily saturated with oil"
		},
		saucePacket: {
			name: 'Sauce Packet',
			img: "chick_fil_a/sauce_packet.png",
			loc: SortLocation.TRASH
		},
		paperCup: generic.items.paperCup,
		plasticLid: generic.items.plasticLid,
		plasticStraw: generic.items.plasticStraw
	}
};

const toolGroups = [ generic, chicFilA ];
export default toolGroups;
