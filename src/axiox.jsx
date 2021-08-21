import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.devtot.com:2087',
});

export default instance;