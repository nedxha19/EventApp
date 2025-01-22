import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute(
		'SELECT e.id,e.title,l.name as locationName FROM events as e LEFT JOIN locations as l ON e.location_id= l.id;'
	);

	return {
		events: rows
	};
}

export const actions = {
	deleteEvent: async ({ request }) => {
		const formData = await request.formData(); //Formular data
		const id = formData.get('id'); // Fshin id
		const connection = await createConnection(); //Lidhja me serverin
		const { result } = await connection.execute('DELETE FROM events WHERE id=? ', [id]);
	}
};
