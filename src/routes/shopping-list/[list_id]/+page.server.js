import { getListById } from '../../../api.js';

export function load({ params }) {
	const { list_id } = params;
	return getListById(list_id).then((data) => {
		return { listObj: data, list_id };
	});
}
