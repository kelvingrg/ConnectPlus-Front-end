import axios from 'axios'
const token =localStorage.getItem('token')
const instance = axios.create({
  baseURL:"http://localhost:9000/" ,
  headers: { token: `Bearer ${token}`}
 
});
export default instance
