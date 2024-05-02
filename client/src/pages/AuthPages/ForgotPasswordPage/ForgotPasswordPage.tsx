import Logo from "@/components/core-ui/Logo";
import PublicLayout from "@/components/layouts/public/PublicLayout";
import ForgotPasswordForm from "@/forms/auth/ForgotPasswordForm";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <PublicLayout title="Sign in">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <Logo />
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            No worries! Enter your email address and we'll send you a link to
            reset your password.
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-10">
          <ForgotPasswordForm />
        </div>
      </div>
    </PublicLayout>
  );
};

export default ForgotPasswordPage;
