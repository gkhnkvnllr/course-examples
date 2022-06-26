import axios from 'axios';

const KEY = 'AIzaSyBG5nyC05cJjMmXMc7Uy7zPfR2tvZfXn08';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});