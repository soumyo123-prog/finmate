import React from "react";
import AuthForm from "../../../components/AuthForm";

const Login = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="login" />
    </section>
  );
};

export default Login;
