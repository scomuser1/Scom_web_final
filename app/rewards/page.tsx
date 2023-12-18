import Rewards from "@/components/Rewards"
import { descriptionProject, projectName } from "@/components/utils/constants"

export const metadata = {
  title: `Rewards - ${projectName}`,
  description: `${descriptionProject}`,
}

export default function RewardsPage() {
  return (
    <>
      <Rewards />
    </>
  )
}
