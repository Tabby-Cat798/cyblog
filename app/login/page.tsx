// app/login/page.tsx

'use client';

import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" }); // 登录成功后跳转到 /dashboard
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
