import { EyeIcon } from "@heroicons/react/24/outline";
import useRegisterForm from "./useRegisterForm";

const RegisterForm = () => {
  const { form } = useRegisterForm();

  return (
    <form onSubmit={form.handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="user_type_name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Register as
          <span className="text-red-500">*</span>
        </label>
        <select
          id="user_type_name"
          name="user_type_name"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          disabled={form.isSubmitting}
          value={form.values.user_type_name}
          onChange={(e) => form.setFieldValue("user_type_name", e.target.value)}
        >
          <option value="job_seeker">Job Seeker</option>
          <option value="hr_recruiter">HR Recruiter</option>
        </select>
        {form.errors.user_type_name && (
          <p className="mt-2 text-sm text-red-600">
            {form.errors.user_type_name}
          </p>
        )}
      </div>

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
            value={form.values.email}
            disabled={form.isSubmitting}
            onChange={form.handleChange}
          />
          {form.errors.email && (
            <p className="mt-2 text-sm text-red-600">{form.errors.email}</p>
          )}
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
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="password"
            type="password"
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.values.password}
            onChange={form.handleChange}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        {form.errors.password && (
          <p className="mt-2 text-sm text-red-600">{form.errors.password}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Repeat password
          <span className="text-red-500">*</span>
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="confirmPassword"
            type="password"
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.values.confirmPassword}
            disabled={form.isSubmitting}
            onChange={form.handleChange}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        {form.errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600">
            {form.errors.confirmPassword}
          </p>
        )}
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
            I agree to the{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={form.isSubmitting}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
