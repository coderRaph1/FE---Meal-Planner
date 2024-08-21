import axios from 'axios';

const api = axios.create({
	baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});

export function getMeals() {
	return api.get('/random.php').then(({ data }) => {
		return data.meals[0];
	});
}
