import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// PATCH /characters/:uid.json
export const patch: RequestHandler<Locals, FormData> = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`, {
		// TODO Add more body fields here
		name: request.body.get('name'),
		inPlay: request.body.has('inPlay') ? !!request.body.get('inPlay') : undefined,
		disposition: request.body.get('disposition')
			? JSON.parse(request.body.get('disposition'))
			: undefined,
		skills: request.body.get('skills') ? request.body.get('skills').split(',') : undefined,
		type: request.body.get('type')
	});
};

// DELETE /characters/:uid.json
export const del: RequestHandler<Locals> = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`);
};
