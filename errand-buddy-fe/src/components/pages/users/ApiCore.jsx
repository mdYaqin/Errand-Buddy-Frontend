import { API } from "./UserConfig";

export const addErrand = (sortBy) => {
  return fetch(`${API}/errands?sortBy=${sortBy}&order=desc&limit=7`, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
