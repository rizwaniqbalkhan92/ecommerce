import axios from 'axios';

export const apiGet = async (URL, PAYLOAD) => {
  try {
    const result = await axios.get(URL, PAYLOAD);

    if (result) {
      return result;
    }
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
