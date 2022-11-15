import axios from 'axios'
const token =localStorage.getItem('token')
console.log(token,"token at axios instance ")
const instance = axios.create({
  baseURL:"http://localhost:9000" ,
 headers: { token: `Bearer ${token}`}
 
});
export default instance
