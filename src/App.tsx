import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import "./App.css";
import Footer from "./layout/Footer";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/autehntication/SignUp";
import SignIn from "./pages/autehntication/SignIn";
import SignUpSuccess from "./pages/autehntication/SignUpSuccess";
import SignUpFail from "./pages/autehntication/SignUpFail";
function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpSuccess" element={<SignUpSuccess />} />
        <Route path="/signUpFail" element={<SignUpFail />} />
        <Route
          path="/*"
          element={
            <Container>
              <MainContent />
              <Footer />
            </Container>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
