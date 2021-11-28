import axios from "axios";

const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;

export const getImage = async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.log("error =>", error);
  } finally {
  }
};
