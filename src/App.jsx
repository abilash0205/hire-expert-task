import {
  AuthContextProvider,
  UserAuth,
} from "../src/Components/Context/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Signin.jsx";
import SignUp from "./Components/Signup.jsx";
import Account from "./Components/Account.jsx";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import NotFound from "./Components/NotFound.jsx";

const App = () => (
  <Router>
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  </Router>
);

const AppContent = () => {
  const { user } = UserAuth();
  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
