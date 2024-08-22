import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://meal-planner-event-handlers-99c1a26e1dcf.herokuapp.com/api"
});

export const postUser = (user) => {
    return apiClient
    .post("/users", user)
    .then(({data}) => {
      return data
    })
  }

  export const getUserRecipes = (user_id) => {
    return apiClient
    .get(`/users/${user_id}/recipes`)
    .then(({data}) => {
      return data
    })
  }

  export const postRecipe = (user_id, recipe) => {
    return apiClient.post(`/users/${user_id}/recipes`, recipe)
    .then(({data}) => {
            
      return data
    })
  }