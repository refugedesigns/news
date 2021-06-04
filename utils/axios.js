import axios from 'axios'


const instance = axios.create({
  baseURL: "https://cryptonews-api.com/api/v1",
});

export default instance