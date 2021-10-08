import type { Stats } from './Stats';
import type { Dispositions } from './Disposition';

export type Character = {
	uid: string;
	created_at: Date;
	name: string;
	inPlay: boolean;
	pending_delete: boolean;
	disposition: Dispositions;
	skills: Array<string>;
	type: string;
	stats: Stats;
};
