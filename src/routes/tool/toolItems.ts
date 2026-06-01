import { SortLocation, type ToolGroup } from './toolTypes';

import genericThumbnail from '$lib/assets/imgs/tool/generic/thumbnail.png?enhanced';
import woodenUtensilsImg from '$lib/assets/imgs/tool/generic/wooden_utensils.png?enhanced';
import plasticUtensilsImg from '$lib/assets/imgs/tool/generic/plastic_utensils.png?enhanced';
import plasticStrawImg from '$lib/assets/imgs/tool/generic/plastic_straw.png?enhanced';
import plasticLidImg from '$lib/assets/imgs/tool/generic/plastic_lid.png?enhanced';
import plasticCupImg from '$lib/assets/imgs/tool/generic/plastic_cup.png?enhanced';
import paperCupImg from '$lib/assets/imgs/tool/generic/paper_cup.png?enhanced';
import paperNapkinImg from '$lib/assets/imgs/tool/generic/paper_napkin.png?enhanced';
import foodScrapsImg from '$lib/assets/imgs/tool/generic/food_scraps.png?enhanced';
import supposedlyCompostablePlasticsImg from '$lib/assets/imgs/tool/generic/supposedly_compostable_plastics.png?enhanced';
import paperContainerImg from '$lib/assets/imgs/tool/generic/paper_container.webp?enhanced';
import fakePaperContainerImg from '$lib/assets/imgs/tool/generic/fake_paper_container.png?enhanced';
import plasticContainerImg from '$lib/assets/imgs/tool/generic/plastic_container.png?enhanced';

export const generic: ToolGroup = {
	name: 'Generic',
	img: genericThumbnail,
	items: {
		woodenUtensils: {
			name: 'Wooden Utensils',
			img: woodenUtensilsImg,
			loc: SortLocation.COMPOST
		},
		plasticUtensils: {
			name: 'Plastic Utensils',
			img: plasticUtensilsImg,
			loc: SortLocation.TRASH
		},
		plasticStraw: {
			name: 'Plastic Straw',
			img: plasticStrawImg,
			loc: SortLocation.TRASH
		},
		plasticLid: {
			name: 'Plastic Lid',
			img: plasticLidImg,
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first!"
		},
		plasticCup: {
			name: 'Plastic Cup',
			img: plasticCupImg,
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first! Keep lids attached."
		},
		paperCup: {
			name: 'Paper Cup',
			img: paperCupImg,
			loc: SortLocation.TRASH,
			note: "Only commercially composable if labeled so, meaning it doesn't have an inner lining"
		},
		paperNapkin: {
			name: 'Paper Napkin',
			img: paperNapkinImg,
			loc: SortLocation.COMPOST
		},
		foodScraps: {
			name: 'Food Scraps',
			img: foodScrapsImg,
			loc: SortLocation.COMPOST
		},
		supposedlyCompostablePlastics: {
			name: '"Compostable" plastics and products',
			img: supposedlyCompostablePlasticsImg,
			loc: SortLocation.TRASH,
			note: 'Unfortunately, these cannot be properly handed at the time'
		},
		paperContainer: {
			name: 'Paper Container (WITHOUT LINING)',
			img: paperContainerImg,
			loc: SortLocation.COMPOST,
			note: 'Only compostable if they DO NOT have an inner lining protecting the food. All containers from Vista Grande are safe.'
		},
		fakePaperContainer: {
			name: 'Paper Container (WITH LINING)',
			img: fakePaperContainerImg,
			loc: SortLocation.TRASH,
			note: 'Some paper containers have an inner lining, which prevents them from being composted or recycled'
		},
		plasticContainer: {
			name: 'Plastic Container',
			img: plasticContainerImg,
			loc: SortLocation.TRASH,
			note: "Can be recycled if it's Plastic #5 (Polypropylene) and cleaned out first! Keep lids attached."
		}
	}
};

import chickFilAThumbnail from '$lib/assets/imgs/tool/chick_fil_a/thumbnail.jpg?enhanced';
import chickFilABagImg from '$lib/assets/imgs/tool/chick_fil_a/bag.png?enhanced';
import chickFilASmallBagImg from '$lib/assets/imgs/tool/chick_fil_a/small_bag.png?enhanced';
import chickFilABurgerFryContainerImg from '$lib/assets/imgs/tool/chick_fil_a/burger_fly_container.png?enhanced';
import chickFilASaucePacketImg from '$lib/assets/imgs/tool/chick_fil_a/sauce_packet.png?enhanced';

export const chicFilA: ToolGroup = {
	name: 'Chick-fil-A',
	img: chickFilAThumbnail,
	items: {
		bag: {
			name: 'Paper Bag',
			img: chickFilABagImg,
			loc: SortLocation.RECYCLING
		},
		smallBag: {
			name: 'Small Bag',
			img: chickFilASmallBagImg,
			loc: SortLocation.TRASH,
			note: 'The aluminum lining inside prevents it from being properly handled'
		},
		burgerContainer: {
			name: 'Burger, Nugget, and Fry containers',
			img: chickFilABurgerFryContainerImg,
			loc: SortLocation.COMPOST,
			note: "As long as they aren't heavily saturated with oil"
		},
		saucePacket: {
			name: 'Sauce Packet',
			img: chickFilASaucePacketImg,
			loc: SortLocation.TRASH
		},
		paperCup: generic.items.paperCup,
		plasticLid: generic.items.plasticLid,
		plasticStraw: generic.items.plasticStraw
	}
};
