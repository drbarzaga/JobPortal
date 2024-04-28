import PublicLayout from "@/components/layouts/public/PublicLayout";
import ForgotPasswordForm from "@/forms/auth/ForgotPasswordForm";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <PublicLayout title="Sign in">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            className="h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
