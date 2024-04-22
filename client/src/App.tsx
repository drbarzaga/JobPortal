import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./components/routers";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./providers";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Private route using PrivateRoute component */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<div>Not found page!</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
