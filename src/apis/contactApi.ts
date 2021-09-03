import axios from "axios";

const url = "https://contact-server-taeheon.herokuapp.com/contacts";

export const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};
