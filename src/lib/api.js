import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=6GlS4RdddxxWq9VcuKnv6lEXyAgULAJbijMw8v9r&date=${date}`);
}