import { useEffect, useState } from "react";
import { UserAuth } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 320,
    margin: "auto",
    transform: "translateY(25%)",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };
  const padding = { padding: "2px" };

  const { createUser, user } = UserAuth();

  const createNewUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/account");
    }
  }, [user, navigate]);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2>Create an account</h2>
        </Grid>
        <form onSubmit={createNewUser}>
          <TextField
            label="Username"
            type="text"
            placeholder="Full Name"
            style={btnStyle}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Email"
            type="email"
            placeholder="user@example.com"
            style={btnStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            style={btnStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign up
          </Button>
        </form>
        <Grid align="center">
          <Typography style={padding}>
            Have an account? <Link to="/">Login</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
