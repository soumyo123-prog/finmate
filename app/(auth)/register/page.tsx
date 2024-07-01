import React, { Suspense } from "react";
import AuthForm from "../../../components/AuthForm";

const Register = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <Suspense>
        <AuthForm type="register" />
      </Suspense>
    </section>
  );
};

export default Register;
