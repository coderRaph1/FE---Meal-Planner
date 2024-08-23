import axios from 'axios';

const api = axios.create({
	baseURL: 'https://www.themealdb.com/api/json/v1/1/',
	timeout: 1000
});

export function getCategories() {
	return api
		.get('/categories.php')
		.then(({ data }) => {
			return data.categories;
		})
		.catch((error) => {
			console.error('Error fetching categories:', error);
		});
}

export function getMealsByCategory(category) {
	console.log(category, 'hellooooooo');
	return api

		.get(`/filter.php?c=${category}`)
		.then(({ data }) => {
			return data.meals;
		})
		.catch((error) => {
			console.error('Error fetching meals by category', error);
		});
}

export function getMealById(idMeal) {
	return api
		.get(`/lookup.php?i=${idMeal}`)
		.then(({ data }) => {
			return data.meals;
		})
		.catch((error) => {
			console.error('Error fetching meal by ID:', error);
			throw error;
		});
}

export function getMealsByName(searchQuery) {
	return api
		.get(`/search.php?s=${searchQuery}`)
		.then(({ data }) => {
			return data.meals;
		})
		.catch((error) => {
			console.error('Error searching meals:', error);
			throw error;
		});
}
