import { api } from './_api';

// PATCH /characters/:uid.json
export const patch = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`, {
		// TODO Add more body fields here
		name: request.body.get('name'),
		inPlay: request.body.has('inPlay') ? !!request.body.get('inPlay') : undefined
	});
};

// DELETE /characters/:uid.json
export const del = async (request) => {
	return api(request, `characters/${request.locals.userid}/${request.params.uid}`);
};
