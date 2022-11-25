import axios from 'axios'
const token =localStorage.getItem('token')
const instance = axios.create({
  baseURL:"http://localhost:9000" ,
  header:{
    "Content-Type": "application/json"
  },
 
});


instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers["token"] = `Bearer ${token}`;
  config.headers["Access-Control-Allow-Origin"] = "*"
  config.headers[ 'Content-Type'] = 'application/json'
  return config;
});
export default instance
