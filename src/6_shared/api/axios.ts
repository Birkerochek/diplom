import http from 'http';
import axios from 'axios';


export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  withCredentials: true,
  httpAgent: new http.Agent({ family: 4 }),

  headers: { 'Content-Type': 'application/json' },
  
});

