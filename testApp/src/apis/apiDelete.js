import axios from 'axios';

export const apiDelete = async (URL, PAYLOAD) => {
  try {
    const result = await axios.delete(URL, PAYLOAD);

    if (result) {
      return result;
    }
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
