import axios from 'axios';

export const apiPost = async (URL, PAYLOAD) => {
  try {
    const result = await axios.post(URL, PAYLOAD);

    if (result) {
      return result;
    }
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
