import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=KwPLxv70uZmNHeSySQnbdxcuTlRE3qmGpr5aO4th&date=${date}`);
}