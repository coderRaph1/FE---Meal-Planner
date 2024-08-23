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
  export const postNewList = (user_id,newList) =>{
    console.log(user_id,'<<in post',newList)
    return apiClient.post(`/users/${user_id}/lists`,newList).then(({data}) => {
      console.log(data,'<<<data post')
     return data.user
    }).catch((err)=>{
        console.log(err)
    })
}

export const getLists = (user_id) => {
 // console.log(user_id,'<<in get')
    return apiClient.get(`/users/${user_id}`).then(({data}) =>{
      console.log(data,'<<in get lists')
        return data
    })
  }