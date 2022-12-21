import axios from 'axios'
const adminToken =localStorage.getItem('adminToken')
const instance = axios.create({
  baseURL:"http://localhost:9000" ,
  headers:{

  },
 
});


instance.interceptors.request.use(function (config) {
  const adminToken =localStorage.getItem('adminToken')
  // Do something before request is sent
  config.headers["token"] = `Bearer ${adminToken}`;
  config.headers["Access-Control-Allow-Origin"] = "*"
  
  return config;
});
export default instance