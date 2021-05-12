import axios from "axios"

export const getTodoData = async(dataCallback?: any) => {
   return await axios.get('https://jsonplaceholder.typicode.com/todos');
}