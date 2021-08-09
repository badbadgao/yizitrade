import axios from 'axios';
const instance = axios.create({
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log(`Request failed with error code '${error.code}', message '${error.message}'`);
    console.log(error.message);
    Promise.reject(error.response);
  },
);

export default instance;
