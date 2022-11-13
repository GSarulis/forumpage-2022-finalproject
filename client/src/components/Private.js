import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  const checkUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    PostService.getAllPrivatePosts().then(
      (response) => {
        if (checkUser && checkUser.token) {
          setPrivatePosts(response.data);
        } else {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      },
      (error) => {
        console.log("Private page", error.response);

        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  return (
    <div>
      <h3>
        {privatePosts.map((post) => (
          <ul key={post.id}>{post.name}</ul>
        ))}
      </h3>
    </div>
  );
};

export default Home;
