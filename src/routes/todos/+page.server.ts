import * as db from '$lib/server/database';
import { fail } from '@sveltejs/kit';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		const description = data.get('description') as string;
		try {
			db.createTodo(cookies.get('userid') ?? '', description);
		} catch (error: unknown) {
			const message = error instanceof Error ? error.message : String(error);
			return fail(422, {
				description: data.get('description'),
				error: message
			});
		}
	},
	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		const id = data.get('id') as string;
		db.deleteTodo(cookies.get('userid') ?? '', id);
		return {
			success: true
		};
	}
};