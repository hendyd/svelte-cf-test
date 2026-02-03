export const categories = {
	feet: { label: 'Feet' },
	hands: { label: 'Hands' },
	extras: { label: 'Extras' },
	facials: { label: 'Facials' },
	waxing: { label: 'Waxing' },
	eyesAndBrows: { label: 'Eyes and Brows' },
	holistic: { label: 'Holistic' },
	massage: { label: 'Massage' }
} as const;

export type CategoryKey = keyof typeof categories;

export type Treatment = {
	id: string;
	name: string;
	price: number;
	category: CategoryKey;
	active: boolean;
};

export const treatments: Treatment[] = [
	{
		id: 'feet-file-and-paint',
		name: 'File and Paint',
		price: 14.5,
		category: 'feet',
		active: true
	},
	{
		id: 'feet-classic-pedicure',
		name: 'Classic Pedicure',
		price: 27,
		category: 'feet',
		active: true
	},
	{
		id: 'feet-luxury-pedicure',
		name: 'Luxury Pedicure',
		price: 30,
		category: 'feet',
		active: true
	},
	{
		id: 'feet-file-and-gelish-polish',
		name: 'File and Gelish Polish',
		price: 25,
		category: 'feet',
		active: true
	},
	{
		id: 'hands-file-and-paint',
		name: 'File and Paint',
		price: 14.5,
		category: 'hands',
		active: true
	},
	{
		id: 'hands-classic-manicure',
		name: 'Classic Manicure',
		price: 24.5,
		category: 'hands',
		active: true
	},
	{
		id: 'hands-luxury-manicure',
		name: 'Luxury Manicure',
		price: 28,
		category: 'hands',
		active: true
	},
	{
		id: 'hands-file-and-gelish-polish',
		name: 'File and Gelish Polish',
		price: 25,
		category: 'hands',
		active: true
	},
	{
		id: 'extras-gelish-polish-manicure-pedicure',
		name: 'Gelish Polish Manicure & Pedicure',
		price: 6.5,
		category: 'extras',
		active: true
	},
	{
		id: 'extras-french-gelish-polish-manicure-pedicure',
		name: 'Frenchh Gelish Polish Manicure & Pedicure',
		price: 6.5,
		category: 'extras',
		active: true
	},
	{
		id: 'gel-removal',
		name: 'Gel Removal',
		price: 7.5,
		category: 'extras',
		active: true
	},
	{
		id: 'waxing-eyebrow',
		name: 'Eyebrow',
		price: 11,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-chin',
		name: 'Chin',
		price: 6.5,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-lip',
		name: 'Lip',
		price: 6.5,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-lip-chin',
		name: 'Lip & Chin',
		price: 11,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-underarm',
		name: 'Underarm',
		price: 12,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-forearm',
		name: 'Forearm',
		price: 15,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-full-leg',
		name: 'Full Leg',
		price: 24,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-half-leg',
		name: 'Half Leg',
		price: 17.5,
		category: 'waxing',
		active: true
	},
	{
		id: 'waxing-bikini',
		name: 'Bikini',
		price: 13,
		category: 'waxing',
		active: true
	},
	{
		id: 'facials-express',
		name: 'Express',
		price: 26.5,
		category: 'facials',
		active: true
	},
	{
		id: 'facials-classic',
		name: 'Classic',
		price: 37,
		category: 'facials',
		active: true
	},
	{
		id: 'facials-luxury',
		name: 'Luxury',
		price: 42,
		category: 'facials',
		active: true
	},
	{
		id: 'eyes-brows-shape',
		name: 'Shape',
		price: 10,
		category: 'eyesAndBrows',
		active: true
	},
	{
		id: 'eyes-brows-tint',
		name: 'Tint',
		price: 10,
		category: 'eyesAndBrows',
		active: true
	},
	{
		id: 'eyes-brows-eyelash-tint',
		name: 'Eyelash Tint',
		price: 12,
		category: 'eyesAndBrows',
		active: true
	},
	{
		id: 'eyes-brows-lash-brow-tint',
		name: 'Lash & Brow Tint',
		price: 20,
		category: 'eyesAndBrows',
		active: true
	},
	{
		id: 'holistic-ear-candle',
		name: 'Ear Candle',
		price: 32,
		category: 'holistic',
		active: true
	},
	{
		id: 'massage-swedish-full',
		name: 'Swedish Full',
		price: 37,
		category: 'massage',
		active: true
	},
	{
		id: 'massage-back-neck-shoulder',
		name: 'Back, Neck & Shoulder',
		price: 27,
		category: 'massage',
		active: true
	},
	{
		id: 'massage-hot-stone-full',
		name: 'Hot Stone (Full)',
		price: 44,
		category: 'massage',
		active: true
	},
	{
		id: 'massage-hot-stone-back',
		name: 'Hot Stone (Back)',
		price: 34,
		category: 'massage',
		active: true
	},
	{
		id: 'massage-mum-to-be',
		name: 'Mum to Be',
		price: 38,
		category: 'massage',
		active: true
	},
	{
		id: 'massage-lava-shells-back-neck-shoulder',
		name: 'Lava Shells - Back, Neck and Shoulder',
		price: 38,
		category: 'massage',
		active: true
	}
];
