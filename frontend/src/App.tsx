import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/landing/LandingPage";
import { trackerPages } from "./types/constants";
import RootLayout from "./main/RootLayout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProfileLandingLists from "./Components/landing/ProfileLandinglists";

const App = () => {

  return (
    <Router>
        <Routes>
          {/* Public routes - seen before signin */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Private routes - seen after signin */}
          <Route path="/home" element={<RootLayout />}>
            <Route index element={<ProfileLandingLists />} />
            {trackerPages.map((page, index) => (
              <Route key={index} path={`/home${page.href}`} element={page.component} />
            ))}
          </Route>
        </Routes>
    </Router>
  );
}

export default App;