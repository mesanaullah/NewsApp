import React from 'react'
import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-1500px overflow-y-auto p-8">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  )
}

export default RegisterPage
