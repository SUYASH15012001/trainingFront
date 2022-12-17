import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/feature/authSlice";

function App() {
  const dispatch = useDispatch();
  // let user = "";
  // if (localStorage.getItem("profile")) {
  //   user = JSON.parse(localStorage.getItem("profile"));
  // }
  // console.log(user);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    // if (user !== "") {
    dispatch(setUser(user));
    // }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
