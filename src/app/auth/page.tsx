"use client";
import { useState } from "react";
import { LoginComponent } from "@/components/auth/LoginComponent";
import { RegisterComponent } from "@/components/auth/RegisterComponent";
import { useRouter } from "next/navigation";

//Auth page to controll between login and register components.
export default function AuthenticationPage() {
  const [authMethod, setAuthMethod] = useState("login");
  const router = useRouter();

  const returnToDashboard = () => {
    router.replace("/dashboard");
  };

  return (
    <>
      {
        authMethod ?
          <LoginComponent signController={returnToDashboard} controller={setAuthMethod}/> :
          <RegisterComponent controller={setAuthMethod}/>
      }
    </>
  )
}