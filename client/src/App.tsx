import { lazy } from "react";
import { PrivateRoute } from "@/components/routers";
import HomePage from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "./AppWrapper";

const LoginPage = lazy(() => import("@/pages/AuthPages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/AuthPages/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("@/pages/AuthPages/ForgotPasswordPage")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppWrapper />}>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Private route using PrivateRoute component */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          {/* 404 route */}
          <Route path="*" element={<div>Not found page!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
