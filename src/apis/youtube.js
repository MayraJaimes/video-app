import axios from "axios";
const KEY = "AIzaSyDieQr6XRDEiopFyp08tmRvSqphKmkz6n4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
