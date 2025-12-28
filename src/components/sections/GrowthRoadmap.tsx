'use client'

import SplitSection from '~/components/SplitSection'
import { IGrowthRoadmap } from '~/types'

interface GrowthRoadmapProps {
  dict: IGrowthRoadmap
}

const GrowthRoadmap = ({ dict }: GrowthRoadmapProps) => {
  return (
    <div id="growth-roadmap">
      <SplitSection
        title={dict.title}
        subtitle={dict.subtitle}
        become={dict.orientation}
        reverse
        imageSrc="/assets/manh-quan-1.webp"
      >
        <div className="space-y-8 mt-8">
          {dict.list.map(
            (item: { id: string; title: string; descriptions: string[] }) => (
              <div
                key={item.id}
                className="relative pl-8 dark:border-emerald-900/30"
              >
                <span className="absolute -left-4 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm">
                  {item.id}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.descriptions.map((text) => (
                    <p
                      key={text}
                      className="text-muted-foreground leading-relaxed border-l-2 border-emerald-100 pl-8 -ml-8"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </SplitSection>
    </div>
  )
}

export default GrowthRoadmap
