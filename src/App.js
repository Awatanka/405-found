import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Fifa from "./Pages/Games/Fifa/Fifa";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Pages/Profile/Profile";
import NewPost from "./Pages/NewPost/NewPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<Fifa />} />
          <Route path="/mycollection" element={<Fifa />} />
          <Route path="/games/fifa" element={<Fifa />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/apex-legends" element={<Fifa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
