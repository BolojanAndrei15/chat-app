"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (err) {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full h-[100vh] items-center justify-center flex-col space-y-3">
      <h1 className="font-bold text-3xl">Sign into your account</h1>
      <Button
        disabled={isLoading}
        onClick={() => loginWithGoogle()}
        variant="outline"
        className="flex space-x-2"
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5" />
        ) : (
          <FcGoogle className="w-5 h-5" />
        )}
        <h1>Log in with google</h1>
      </Button>
    </div>
  );
}

export default SignIn;
