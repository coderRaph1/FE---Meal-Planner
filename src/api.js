import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://event-handlers-meal-planner-be.onrender.com/api'
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

export const getUserRecipes = (user_id) => {
	return apiClient.get(`/users/${user_id}/recipes`).then(({ data }) => {
		return data;
	});
};

export const postRecipe = (user_id, recipe) => {
	return apiClient.post(`/users/${user_id}/recipes`, recipe).then(({ data }) => {
		return data;
	});
};

export const getListsForUser = (user_id) => {
	return apiClient.get(`/users/${user_id}/lists`).then(({ data }) => {
		return data;
	});
};

export const postNewList = (list_name, isPrivate) => {
	return apiClient.post(`/lists`, { list_name, isPrivate }).then(({ data }) => {
		return data;
	});
};

export const postNewListByUSerId = (list_id, user_id) => {
	return apiClient.post(`/users/${user_id}/lists`, { list_id }).then(({ data }) => {
		return data;
	});
};

export const getRecipeById = (recipe_id) => {
	return apiClient.get(`/recipes/${recipe_id}`).then(({ data }) => {
		console.log(data);
		return data;
	});
};

export const patchRecipe = (recipe_id, patchInfo) => {
	return apiClient.patch(`/recipes/${recipe_id}`, patchInfo).then(({ data }) => {
		return data;
	});
};
