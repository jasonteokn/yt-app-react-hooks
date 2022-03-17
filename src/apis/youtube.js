import axios from "axios";

const KEY = "AIzaSyDmk_ulE3RBVBUzAvrnB2cHNvmTnUQd6k0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
