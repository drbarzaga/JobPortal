import { Suspense, lazy } from "react";
import { PrivateRoute } from "@/components/routers";
import HomePage from "@/pages/HomePage";
import { AuthProvider } from "@/providers";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/AuthPages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/AuthPages/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("@/pages/AuthPages/ForgotPasswordPage")
);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
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
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
