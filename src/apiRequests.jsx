import axios from 'axios'

const BASE_URL = 'https://api.devtot.com:2087'



const TOKEN = JSON.parse(localStorage.getItem('userToken'))




export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,

  headers: {Authorization:`Bearer ${TOKEN}`}
});

export const createUserRequest = axios.create({
  baseURL: BASE_URL,

  headers: {Authorization:`Bearer "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzM5OTM3NzQsInVzZXJfaWQiOjE2fQ.ACR64olfX6sc7QJMLh6oCc7ugEmyO6TlHL7bPcgaREk"`}
});



