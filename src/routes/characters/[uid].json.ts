import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { parseNumber } from '$lib/utils/numbers';

// PATCH /characters/:uid.json
export const patch: RequestHandler<Locals, FormData> = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`, {
		// TODO Add more body fields here
		name: request.body.get('name'),
		disposition: {
			empathy: parseNumber(request.body.get('stats[empathy]')),
			anger: parseNumber(request.body.get('stats[anger]')),
			morale: parseNumber(request.body.get('stats[morale]')),
			honesty: parseNumber(request.body.get('stats[honesty]'))
		},
		skills: request.body.get('skills') ? request.body.get('skills').split(',') : undefined,
		type: request.body.get('type'),
		stats: {
			strength: parseNumber(request.body.get('stats[strength]')),
			dexterity: parseNumber(request.body.get('stats[dexterity]')),
			intelligence: parseNumber(request.body.get('stats[intelligence]')),
			charisma: parseNumber(request.body.get('stats[charisma]'))
		}
	});
};

// DELETE /characters/:uid.json
export const del: RequestHandler<Locals> = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`);
};
