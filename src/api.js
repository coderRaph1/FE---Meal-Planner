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