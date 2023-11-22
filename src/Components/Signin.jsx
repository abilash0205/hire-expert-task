import { useEffect, useState } from "react";
import { UserAuth } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Checkbox,
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, user } = UserAuth();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 320,
    margin: "auto",
    transform : "translateY(25%)"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };
  const padding = { padding: "2px" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/account");
      console.log(user);
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
            <LockOutlined />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Grid align="center">
          <Typography style={padding}>
            <Link>Forgot password?</Link>
          </Typography>
          <Typography style={padding}>
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signin;
