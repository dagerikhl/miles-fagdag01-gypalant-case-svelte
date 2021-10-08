import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { parseNumber } from '$lib/utils/numbers';

// GET /characters.json
export const get: RequestHandler<Locals> = async (request) => {
	// request.locals.userid comes from src/hooks.js
	const response = await api(request, `characters/${request.locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a character list.
		// start with an empty array
		return { body: [] };
	}

	return response;
};

// POST /characters.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
	const response = await api(request, `characters/${request.locals.userid}`, {
		// because index.svelte posts a FormData object,
		// request.body is _also_ a (readonly) FormData
		// object, which allows us to get form data
		// with the `body.get(key)` method
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

	return response;
};
