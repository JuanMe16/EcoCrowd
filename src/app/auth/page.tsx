"use client";
import { useState } from "react";
import { LoginComponent } from "@/components/auth/LoginComponent";
import { RegisterComponent } from "@/components/auth/RegisterComponent";

export default function AuthenticationPage() {
  const [authMethod, setAuthMethod] = useState("login");

  return (
    <>
      {
        authMethod ?
          <LoginComponent controller={setAuthMethod}/> :
          <RegisterComponent controller={setAuthMethod}/>
      }
    </>
  )
}