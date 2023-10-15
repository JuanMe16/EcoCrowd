"use client";
import ProfileResume from "@/components/dashboard/ProfileResume";
import LatestProjects from "@/components/dashboard/LatestProjects";
import UserProjectsStats from "@/components/dashboard/UserProjectsStats";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function DashboardPage() {

  useEffect(() => {
    if (!window.localStorage.getItem("session")) {
      console.log("Redirigiendo...");
      redirect("/auth");
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