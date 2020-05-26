const axios = require('axios')

export async function getTodos(id){

  const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  const data = await result.data;

  if (result.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}

