import { IRegisterPayload } from "@/interfaces/models";
import useAuthStore from "@/stores/auth.store";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const FORM_INITIAL_VALUES = {
  user_type_name: "job_seeker",
  email: "",
  password: "",
  confirmPassword: "",
  termsConditions: false,
};

const useRegisterForm = () => {
  const {
    registerSuccessMessage,
    registerErrorMessage,
    termsConditionsModalOpen,
    setTermsConditionsModalOpen,
    register,
    clearRegisterMessages,
  } = useAuthStore((state) => ({
    registerSuccessMessage: state.registerSuccessMessage,
    registerErrorMessage: state.registerErrorMessage,
    termsConditionsModalOpen: state.termsConditionsModalOpen,
    setTermsConditionsModalOpen: state.setTermsConditionsModalOpen,
    register: state.register,
    clearRegisterMessages: state.clearRegisterMessages,
  }));

  const validationSchema = Yup.object({
    user_type_name: Yup.string()
      .required("User type is required")
      .oneOf(["job_seeker", "hr_recruiter"]),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    termsConditions: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const form = useFormik({
    initialValues: FORM_INITIAL_VALUES,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const payload: IRegisterPayload = {
          user_type_name: values.user_type_name,
          email: values.email,
          password: values.password,
        };
        await register(payload);
        form.resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleOnOpenTermsConditionsModal = () => {
    setTermsConditionsModalOpen(true);
  };

  const handleOnCloseTermsConditionsModal = () => {
    setTermsConditionsModalOpen(false);
  };

  useEffect(() => {
    return () => {
      clearRegisterMessages();
    };
  }, [clearRegisterMessages]);

  return {
    form,
    registerSuccessMessage,
    registerErrorMessage,
    termsConditionsModalOpen,
    handleOnOpenTermsConditionsModal,
    handleOnCloseTermsConditionsModal,
  };
};

export default useRegisterForm;
