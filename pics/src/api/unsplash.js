import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8uN2Aq4uMTuehBKsuvi4nNGDHHqqLdh7g4bv3Q15WWE'
  }
});