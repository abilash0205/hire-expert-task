import { UserAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ctn">
      <h1>Signed in as {user.email}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Account;
