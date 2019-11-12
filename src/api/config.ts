import axios from 'axios'

const API_URL = process.env.REACT_APP_PD_CLIENT_URL
console.log('🔗PD_CLIENT_URL: ' + API_URL)
const http = axios.create({
  baseURL: `${API_URL}/pd/api/v1`
})

export {
  http
}
