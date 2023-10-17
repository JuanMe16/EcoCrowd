"use client";
import ProfileResume from "@/components/dashboard/ProfileResume";
import LatestProjects from "@/components/dashboard/LatestProjects";
import UserProjectsStats from "@/components/dashboard/UserProjectsStats";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

//Dashboard page, it checks if user is logged in, if not it redirects to auth.
export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem("session")) {
      console.log("Redirigiendo...");
      router.replace("/auth");
    }
  });

  return (
    <>
      <div className="flex my-10 justify-around">
        <UserProjectsStats />
        <div className="flex w-1/2 flex-col">
          <ProfileResume />
          <LatestProjects />
        </div>
      </div>
    </>
  )
}