import CareerObjective from '~/components/sections/CareerObjective'
import GrowthRoadmap from '~/components/sections/GrowthRoadmap'
import { IObjectives, IGrowthRoadmap } from '~/types'

interface AboutProps {
  objectives: IObjectives
  growthRoadmap: IGrowthRoadmap
}

export function About({ objectives, growthRoadmap }: AboutProps) {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 flex flex-col gap-48">
        <CareerObjective dict={objectives} />
        <GrowthRoadmap dict={growthRoadmap} />
      </div>
    </section>
  )
}
