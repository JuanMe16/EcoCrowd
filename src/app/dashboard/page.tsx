"use client";
import { ProfileResume } from "@/components/dashboard/ProfileResume";
import { LatestProjects } from "@/components/dashboard/LatestProjects";
import { UserProjectsStats } from "@/components/dashboard/UserProjectsStats";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sendProfileResume } from "@/utils/dashboard";

//Dashboard page, it checks if user is logged in, if not it redirects to auth.
export default function DashboardPage() {
  const [user, setUser] = useState({ username: "", email: "", createdAt: "", age: 0 });
  const router = useRouter();

  useEffect(() => {
    const session = window.localStorage.getItem("session") || "";
    sendProfileResume(session).then((result) => {
      setUser(result);
    }).catch(() => {
      router.replace("/auth");
    });
  }, [router]);

  if (!user) {
    router.replace("/auth");
  }

  return (
    <>
      <div className="flex my-10 justify-around">
        <UserProjectsStats />
        <div className="flex w-1/2 flex-col">
          <ProfileResume profileInstance={user} />
          <LatestProjects />
        </div>
      </div>
    </>
  )
}