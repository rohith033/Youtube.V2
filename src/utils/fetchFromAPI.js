import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':'4dd68c270emsh0d2969f235ab772p1ca9fdjsn16247c819faa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};
export const FeatchFromApi = async (url) => {
  try{
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
  }
  catch(error){
    console.error(error);
  }
};