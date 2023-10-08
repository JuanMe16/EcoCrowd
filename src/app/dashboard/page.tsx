import { Navbar } from "@/components/dashboard/Navbar";
import ProfileResume from "@/components/dashboard/ProfileResume";
import LatestProjects from "@/components/dashboard/LatestProjects";
import UserProjectsStats from "@/components/dashboard/UserProjectsStats";

export default function DashboardPage() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="flex my-10 justify-around">
          <UserProjectsStats />
          <div className="flex w-1/2 flex-col">
            <ProfileResume />
            <LatestProjects />
          </div>
        </div>
      </div>
    </>
  )
}