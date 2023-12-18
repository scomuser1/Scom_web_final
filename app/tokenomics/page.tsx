import Tokenomics from "@/components/Tokenomics"
import { descriptionProject, projectName } from "@/components/utils/constants"

export const metadata = {
  title: `Tokenomics - ${projectName}`,
  description: `${descriptionProject}`,
}

export default function TokenomicsPage() {
  return (
    <>
      <Tokenomics />
    </>
  )
}
