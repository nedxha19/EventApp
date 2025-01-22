import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM locations LIMIT 10');

	return {
		locations: rows
	};
}

export const actions = {
	deleteLocation: async ({ request }) => {
		const formData = await request.formData(); //Formular data
		const id = formData.get('id'); // Fshin id
		const connection = await createConnection(); //Lidhja me serverin
		try {
			await connection.execute('DELETE FROM locations WHERE id=? ', [id]);
		} catch (e) {
			return {
				success: false,
				message: 'Deletion not possible'
			};
		}
	}
};
