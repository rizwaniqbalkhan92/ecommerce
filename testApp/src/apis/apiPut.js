import axios from 'axios';

export const apiPut = async (URL, PAYLOAD) => {
  try {
    const result = await axios.put(URL, PAYLOAD);

    if (result) {
      return result;
    }
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
