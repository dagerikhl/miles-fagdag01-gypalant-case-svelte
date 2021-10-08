export type Character = {
	uid: string;
	created_at: Date;
	name: string;
	inPlay: boolean;
	pending_delete: boolean;
	disposition: {
		empathy: number;
		anger: number;
		morale: number;
		honestly: number;
	};
	skills: Array<string>;
	type: string;
	stats: {
		strength: number;
		dexterity: number;
		intelligence: number;
		charisma: number;
	};
};
