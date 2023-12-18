import HeroDefault from "@/components/home(default)/hero"
import { descriptionProject, projectName } from "@/components/utils/constants"

export const metadata = {
  title: `Home - ${projectName}`,
  description: `${descriptionProject}`,
}

export default function Home() {
  return (
    <>
      <HeroDefault />
    </>
  )
}
