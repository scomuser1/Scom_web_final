import Profile from "@/components/Profile"
import { descriptionProject, projectName } from "@/components/utils/constants"

export const metadata = {
  title: `Profile - ${projectName}`,
  description: `${descriptionProject}`,
}

export default function ProfilePage() {
  return (
    <>
      <Profile />
    </>
  )
}
