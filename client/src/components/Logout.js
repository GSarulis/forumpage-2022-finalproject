import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const removeKey = () => {
    localStorage.removeItem("user");
    navigate("/home");
    window.location.reload();
  };

  return (
    <div>
      <button type="submit" onClick={removeKey}>
        Log out
      </button>
    </div>
  );
};

export default LogOut;
