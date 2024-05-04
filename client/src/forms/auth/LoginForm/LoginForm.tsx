import { Link } from "react-router-dom";
import useLoginForm from "./useLoginForm";
import FieldError from "@/components/core-ui/FieldError";

const LoginForm = () => {
  const { form } = useLoginForm();

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit} noValidate>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
          <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            readOnly={form.isSubmitting}
            value={form.values.email}
            onChange={form.handleChange}
          />
          {form.errors.email && <FieldError error={form.errors.email} />}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
          <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            readOnly={form.isSubmitting}
            value={form.values.password}
            onChange={form.handleChange}
          />
          {form.errors.password && <FieldError error={form.errors.password} />}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="remember-me"
            className="ml-3 block text-sm leading-6 text-gray-700"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm leading-6">
          <Link
            to="/forgot-password"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={form.isSubmitting}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
