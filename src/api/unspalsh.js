import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID acYf4VVuQLXAokf8CGNcgyZkrCjOQpN71Eyz_k08OTY",
  },
});
