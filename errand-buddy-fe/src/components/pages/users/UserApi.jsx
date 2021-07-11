import {API} from "../config"

export const addErrand = (userID, token, category) => {
     return fetch (`${API}/category/create/${userID}`, { 
          method: 'POST',
          headers: {
               Accept: 'application/json'
               Authorization: `Bearer ${Token}`
          },

          body: product
     })

     .then(response => {
          return response.json()
     })
     .catch(err => {
          console.log(err)
     })
}

export const getCategories = () => {
     return fetch (`${API}/categories`, { method: 'GET'
})
.then(response => {
     return response.json()
})
.catch(err => console.log(err))
}
