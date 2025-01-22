import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM categories LIMIT 10');

	return {
		categories: rows
	};
}

export const actions = {
	deletecategory: async ({ request }) => {
		const formData = await request.formData(); //Formular data
		const id = formData.get('id'); // Fshin id
		const connection = await createConnection(); //Lidhja me serverin
		try {
			await connection.execute('DELETE FROM categories WHERE id=? ', [id]);
		} catch (e) {
			console.error(e);
		}
		return {
			success: false,
			message: 'Deletion not possible'
		};
	}
};
