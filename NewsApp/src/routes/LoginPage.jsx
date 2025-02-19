import React from 'react'
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden">
      <SignIn signUpUrl="/register" />
    </div>
  )
}

export default LoginPage
