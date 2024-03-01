import axios from 'axios';

export const fetchUser = async () => {
  const { data } = await axios.get('https://api.example.com/data');
  return data;
};

export default fetchUser