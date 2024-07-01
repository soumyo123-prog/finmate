import React, { Suspense } from "react";
import AuthForm from "../../../components/AuthForm";

const Login = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <Suspense>
        <AuthForm type="login" />
      </Suspense>
    </section>
  );
};

export default Login;
