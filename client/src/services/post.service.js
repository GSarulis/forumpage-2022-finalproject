import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/users/1");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/users", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;
