import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://meal-planner-event-handlers-99c1a26e1dcf.herokuapp.com/api'
});

export const postUser = (user) => {
	return apiClient.post('/users', user).then(({ data }) => {
		return data;
	});
};

export function getListById(list_id) {
	return apiClient
		.get(`/lists/${list_id}`)
		.then(({ data }) => {
			return data;
		})
		.catch((error) => {
			console.error('Error fetching list by ID:', error);
			throw error;
		});
}

export function getUserById(user_id) {
	return apiClient
		.get(`/users/${user_id}`)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
}

export function postItem(list_id, item_name, amount) {
	return apiClient.post(`lists/${list_id}`, { item_name, amount }).then(({ data }) => {
		return data;
	});
}

export function deleteItem(list_id, index) {
	return apiClient.delete(`lists/${list_id}/${index}`);
}
